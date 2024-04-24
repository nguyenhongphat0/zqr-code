# ZMP QR Code

React component for generating QR codes that match Zalo Mini App looks and feels.

## Installation


```bash
npm i zmp-qrcode
```

## Usage

```jsx
import { QRCode } from 'zmp-qrcode'

<QRCode value="https://www.npmjs.com/package/zmp-qrcode" />
```

![Preview](https://raw.githubusercontent.com/nguyenhongphat0/zqr-code/main/preview.png)

## API Documentation

### QRCode
## Props
|Name|Description|Default|
|--- |--- |--- |
|value*|string|-|
|size|number|128|

## Ref
You can export the QR code as a base64 image using ref. Here is an example:

```jsx
export const Base64 = (args) => {
  const ref = useRef<QRCodeInstance>()
  const [src, setSrc] = useState('');

  return <div>
    <QRCode ref={el => el ? setTimeout(() => setSrc(el.getBase64()), 1000) : el} {...args} rounded />
    <img src={src} alt="" />
  </div>
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)