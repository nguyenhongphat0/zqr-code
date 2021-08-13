import React, { useState } from "react";
import QRCode from "./QRCode";
import zaloLogo from '../../static/zalo.png';

export default {
  title: "QRCode",
  component: QRCode,
  args: {
    value: 'https://zalo.me/4318657068771012646',
    image: zaloLogo,
    size: 256
  },
};

const Template = (args) => <QRCode {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,
  onChange: base64 => {
    console.log('alo', base64)
  }
};

export const Base64 = (args) => {
  const [src, setSrc] = useState('');
  return <div>
    <img src={src} alt="" />
    <QRCode {...args} onChange={base64 => setSrc(base64)} />
  </div>
}