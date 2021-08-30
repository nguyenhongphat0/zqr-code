import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { QRCodeInstance, QRCodeProps } from "./QRCodeProps.types";
import { QRNormal } from 'react-qrbtf'
import "./QRCodeProps.scss";

const toDataURL = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}

const QRCode: React.FC<QRCodeProps> = React.forwardRef(({ value, rounded, image, size = 256, ...restProps }, ref: MutableRefObject<QRCodeInstance>) => {
  const el = useRef<HTMLDivElement>()
  const [icon, setIcon] = useState(image)

  useEffect(() => {
    if (ref) {
      const svg = el.current.querySelector('svg')
      const getBase64 = (type = 'svg') => new Promise<string>(resolve => {
        toDataURL(image, function (dataUrl) {
          if (image) {
            setIcon(dataUrl)
          }
          const s = new XMLSerializer().serializeToString(svg)
          const base64 = window.btoa(s);
          const svgSrc = `data:image/svg+xml;base64,${base64}`
          if (type === 'svg') {
            resolve(svgSrc)
          } else {
            const canvas = document.createElement("canvas");
            canvas.width = size
            canvas.height = size
            const ctx = canvas.getContext("2d");

            const img = document.createElement("img");
            img.setAttribute("src", svgSrc);

            img.onload = function () {
              ctx.drawImage(img, 0, 0, size, size);
              const imageSrc = canvas.toDataURL("image/${type}")
              resolve(imageSrc)
            };
          }
        })
      })
      ref.current = { svg, getBase64 }
    }
  }, [])

  useEffect(() => {
    setIcon(image)
  }, [image])

  return <div ref={el} style={{ width: size, height: size, overflow: 'hidden' }}>
    <QRNormal
      value={value}
      icon={icon}
      iconScale={0.25}
      styles={{
        svg: {
          width: size,
          height: size,
          transform: 'scale(1.4)'
        }
      }}
      type={rounded ? 'round' : 'rect'}
      posType={rounded ? 'round' : 'rect'}
      {...restProps}
    />
  </div>
});

export default QRCode;
