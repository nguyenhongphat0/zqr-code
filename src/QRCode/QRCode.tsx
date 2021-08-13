import React, { useEffect, useRef } from "react";
import { QRCodeProps } from "./QRCodeProps.types";
import QRCodeStyling from 'qr-code-styling'
import "./QRCodeProps.scss";

const QRCode: React.FC<QRCodeProps> = ({ value, rounded, image, onChange, size = 'auto', ...restProps }) => {
  const ref = useRef<HTMLDivElement>()
  const qrCode = useRef(new QRCodeStyling())

  useEffect(() => {
    qrCode.current.append(ref.current)
  }, [])

  const getBase64 = () => {
    return qrCode.current._canvas.toDataURL();
  }

  useEffect(() => {
    // Create new QRCode Object
    const width = size === 'auto' ? ref.current.getBoundingClientRect().width : size
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

  return <div ref={ref} style={{ width: size, height: size }}></div>
};

export default QRCode;
