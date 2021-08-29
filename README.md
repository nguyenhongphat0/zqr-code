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
## Props
|Name|Description|Default|
|--- |--- |--- |
|value*|string|-|
|image|string|-|
|rounded|boolean|false|
|size|number|256|

## Ref
You can export a static image from QRCode using ref. Here is an example:

```jsx
const ExportImage = () => {
  const [src, setSrc] = useState('');

  const ref = useRef<QRCodeInstance>();
  useEffect(() => {
    ref.current.getBase64().then(base64 => setSrc(base64))
  }, []);

  return <div>
    <img src={src} alt="" />
    <QRCode ref={ref} rounded value="just another value" />
  </div>
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)