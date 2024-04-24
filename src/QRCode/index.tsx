import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { FC } from "react";
import { QRCode as RQL } from "react-qrcode-logo";
import { QRCodeInstance, QRCodeProps } from "./QRCodeProps.types";
import logo from "./zalo.png";

export const QRCode = forwardRef<QRCodeInstance, QRCodeProps>((props, ref) => {
  const wrapper = useRef<HTMLDivElement>();
  useImperativeHandle(ref, () => {
    if (wrapper.current) {
      const canvas = wrapper.current.getElementsByTagName("canvas")[0];
      if (canvas) {
        return {
          canvas,
          getBase64: (type = "png") =>  canvas.toDataURL(`image/${type}`)
        };
      }
    }
  });

  return (
    <div ref={wrapper}>
      <RQL {...props} logoImage={logo} eyeRadius={10} qrStyle="dots" />
    </div>
  );
});
