import React from "react";
import QRCode from "./QRCode";

export default {
  title: "QRCode",
  component: QRCode,
  args: {
    value: 'https://miniapp.zalo.me',
  },
};

const Template = (args) => <QRCode {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Rounded = Template.bind({});
Rounded.args = {
};