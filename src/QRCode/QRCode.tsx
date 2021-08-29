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
      const getBase64 = () => new Promise<string>(resolve => {
        toDataURL(image, function (dataUrl) {
          if (image) {
            setIcon(dataUrl)
          }
          const s = new XMLSerializer().serializeToString(svg)
          const base64 = window.btoa(s);
          resolve(`data:image/svg+xml;base64,${base64}`)
        })
      })
      ref.current = { svg, getBase64 }
    }
  }, [])

  useEffect(() => {
    setIcon(image)
  }, [image])

  return <div ref={el}>
    <QRNormal
      value={value}
      icon={icon}
      iconScale={0.25}
      styles={{
        svg: {
          width: size,
          height: size
        }
      }}
      type={rounded ? 'round' : 'rect'}
      posType={rounded ? 'round' : 'rect'}
      {...restProps}
    />
  </div>
});

export default QRCode;
