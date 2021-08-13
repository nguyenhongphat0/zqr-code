import QRCodeStyling from 'qr-code-styling';
import { Options } from 'qr-code-styling/lib/types'
export interface QRCodeProps extends Options {
  value: string;
  rounded?: boolean;
  image?: string;
  size?: 'auto' | number;
  onChange?: (base64: string, svg: SVGElement) => any
}

export interface QRCodeInstance extends QRCodeStyling {
  
}