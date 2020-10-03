# easy-dom

Small yet powerful package to make manipulating the DOM 5 characters smaller

## Installation

Put this in your `<body>` tag:

```html
<script src="https://ghcdn.rawgit.org/shadowtime2000/easy-dom/master/src/index.js"></script>
```

You have now imported `easy-dom` into your website! And don't worry about file size! `easy-dom` is around 17 bytes, and the script tag is around 92 bytes, totalling 109 bytes added to your website!

### Usage

Just replace every reference to `document` with `DOM`.

#### Advantages

If you replace a reference to `document` with `DOM`, you save around 5 bytes. That means, if you have 22 `document` references, instead of adding 109 bytes to your website, you are decreasing the size by 1 byte. So if you have more than 22, you decrease the size by even more!
