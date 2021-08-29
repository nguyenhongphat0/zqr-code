import { RendererProps } from 'react-qrbtf';

export interface QRCodeProps extends RendererProps {
  value: string;
  rounded?: boolean;
  image?: string;
  size?: number;
}

export interface QRCodeInstance {
  svg: SVGElement,
  getBase64: () => Promise<string>
}