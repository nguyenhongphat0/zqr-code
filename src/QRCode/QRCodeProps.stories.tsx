import React, { useRef, useState } from "react";
import QRCode from "./QRCode";
import zaloLogo from '../../static/zalo.png';
import { QRCodeInstance } from "./QRCodeProps.types";

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
  rounded: true
};

export const Base64 = (args) => {
  const [src, setSrc] = useState('');
  return <div>
    <img src={src} alt="" />
    <QRCode {...args} rounded onChange={base64 => setSrc(base64)} />
  </div>
}

export const UseRef = (args) => {
  const ref = useRef<QRCodeInstance>()
  return <>
    <button onClick={() => ref.current.download()}>Download</button>
    <QRCode {...args} rounded ref={ref} />
  </>
}