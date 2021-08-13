# ZMP QR Code

React component for generating QR Code that match Zalo Miniapps looks and feels.

## Installation


```bash
npm i zmp-qrcode
```

## Usage

```jsx
import React from 'react'
import { QRCode } from 'zmp-qrcode'

const ScanMe = () => {
  const value = 'https://www.npmjs.com/package/zmp-qrcode'
  const image = 'https://stc-zaloprofile.zdn.vn/pc/v1/images/logo.svg'

  return <QRCode rounded value={value} image={image} />
}
```

![Preview](https://raw.githubusercontent.com/nguyenhongphat0/zqr-code/main/preview.png)

## API Documentation

### QRCode

|Name|Description|Default|
|--- |--- |--- |
|value*|string|-|
|image|string|-|
|rounded|boolean|false|
|size|number \| "auto"|auto|
|onChange|(base64: string, svg: HTMLCanvasElement) => any|-|
|type|"canvas" \| "svg"|-|
|shape|"square" \| "circle"|-|
|width|number|-|
|height|number|-|
|margin|number|-|
|data|string|-|
|qrOptions|{ typeNumber?: TypeNumber; mode?: Mode; errorCorrectionLevel?: ErrorCorrectionLevel; }|-|
|imageOptions|{ hideBackgroundDots?: boolean; imageSize?: number; crossOrigin?: string; margin?: number; }|-|
|dotsOptions|{ type?: DotType; color?: string; gradient?: Gradient; }|-|
|cornersSquareOptions|{ type?: CornerSquareType; color?: string; gradient?: Gradient; }|-|
|cornersDotOptions|{ type?: CornerDotType; color?: string; gradient?: Gradient; }|-|
|backgroundOptions|{ round?: number; color?: string; gradient?: Gradient; }|-|


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)