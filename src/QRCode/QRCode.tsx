import React, { useEffect, useRef } from "react";
import EasyQRCode from 'easyqrcodejs';
import { QRCodeProps } from "./QRCodeProps.types";

import "./QRCodeProps.scss";

const QRCode: React.FC<QRCodeProps> = ({ value }) => {
  const ref = useRef<HTMLDivElement>()
  useEffect(() => {
    // Create new QRCode Object
    const qrCode = new EasyQRCode(ref.current, {
      text: value
    });
    return () => qrCode.clear()
  }, [value])

  return <div ref={ref}></div>
};

export default QRCode;
