import React, { useEffect, useRef, useState } from "react";
import QRCode from "./QRCode";
import zaloLogo from '../../static/zalo.png';
import { QRCodeInstance } from "./QRCodeProps.types";

export default {
  title: "QRCode",
  component: QRCode,
  args: {
    value: 'https://zalo.me/4318657068771012646',
    image: zaloLogo,
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
  const ref = useRef<QRCodeInstance>()
  const [src, setSrc] = useState('');
  useEffect(() => {
    ref.current.getBase64().then(base64 => setSrc(base64))
  }, [])

  return <div>
    <img src={src} alt="" />
    <QRCode ref={ref} {...args} rounded />
  </div>
}

export const ExportImage = () => {
  const [src, setSrc] = useState('');

  const ref = useRef<QRCodeInstance>();
  useEffect(() => {
    ref.current.getBase64('png').then(base64 => setSrc(base64))
  }, []);

  return <div>
    <img src={src} alt="" />
    <QRCode ref={ref} rounded image={zaloLogo} value="just another value" />
  </div>
}

export const UseRef = (args) => {
  const ref = useRef<QRCodeInstance>()
  return <>
    <button onClick={() => console.log(ref.current)}>Download</button>
    <QRCode {...args} rounded ref={ref} />
  </>
}