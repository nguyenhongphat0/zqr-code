import React, { useEffect, useRef, useState } from "react";
import {QRCode}  from ".";
import { QRCodeInstance } from "./QRCodeProps.types";

export default {
  title: "QRCode",
  component: QRCode,
  args: {
    value: 'https://zalo.me/s/1604978607252151272/',
    size: 128
  },
};

const Template = (args) => <QRCode {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Base64 = (args) => {
  const ref = useRef<QRCodeInstance>()
  const [src, setSrc] = useState('');

  return <div>
    <QRCode ref={el => el ? setTimeout(() => setSrc(el.getBase64()), 1000) : el} {...args} rounded />
    <img src={src} alt="" />
  </div>
}