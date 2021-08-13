import React, { MutableRefObject, useEffect, useRef } from "react";
import { QRCodeInstance, QRCodeProps } from "./QRCodeProps.types";
import QRCodeStyling from 'qr-code-styling'
import "./QRCodeProps.scss";

const QRCode: React.FC<QRCodeProps> = React.forwardRef(({ value, rounded, image, onChange, size = 'auto', ...restProps }, ref: MutableRefObject<QRCodeInstance>) => {
  const el = useRef<HTMLDivElement>()
  const qrCode = useRef(new QRCodeStyling())
  if (ref) {
    ref.current = qrCode.current
  }

  useEffect(() => {
    qrCode.current.append(el.current)
  }, [])

  const getBase64 = () => {
    return qrCode.current._canvas.toDataURL();
  }

  useEffect(() => {
    // Create new QRCode Object
    const width = size === 'auto' ? el.current.getBoundingClientRect().width : size
    const height = width

    qrCode.current.update({
      data: value,
      width,
      height,
      image,
      imageOptions: {
        imageSize: 0.25
      },
      type: 'svg',
      dotsOptions: {
        type: rounded ? "dots" : 'square'
      },
      cornersSquareOptions: {
        type: rounded ? "extra-rounded" : 'square'
      },
      cornersDotOptions: {
        type: rounded ? 'dot' : 'square'
      },
      qrOptions: {
        errorCorrectionLevel: 'H'
      },
      ...restProps
    })

    if (onChange) {
      qrCode.current.getRawData("png").then(blob => {
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
          var base64 = reader.result;
          onChange(base64.toString(), qrCode.current._svg);
        }
      })
    }
  }, [value, rounded, size, image, restProps])

  return <div ref={el} style={{ width: size, height: size }}></div>
});

export default QRCode;
