export interface QRCodeProps {
  value: string;
  size?: number;
}

export interface QRCodeInstance {
  canvas: HTMLCanvasElement,
  getBase64: (type?: 'png' | 'jpg') => string
}