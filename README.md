# easy-dom

Small yet powerful package to make manipulating the DOM 5 characters smaller

## Installation

Put this in your `<body>` tag:

```html
<script src="https://ghcdn.rawgit.org/shadowtime2000/easy-dom/master/src/index.js"></script>
```

You have now imported `easy-dom` into your website! And don't worry about file size! `easy-dom` is around 20 bytes, and the script tag is around 92 bytes, totalling 112 bytes added to your website!

### Usage

Just replace every reference to `document` with `DOM`.

#### Advantages

If you replace a reference to `document` with `DOM`, you save around 5 bytes. That means, if you have 23 `document` references, instead of adding 112 bytes to your website, you are decreasing the size by 3 byte. So if you have more than 22, you decrease the size by even more!
But let me give you some bigger numbers:  
If
 - `jquery` started using this they would reduce their bundle size by over 1kb!
 - `react` started using this they would reduce their bundle size by 1.3kb!
 - `angular` started using this they would reduce their bundle size by 2.3kb!
