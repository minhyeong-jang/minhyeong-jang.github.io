---
layout: post
tags: [develop, react]
image: /covers/nextjs.png
title: Nextjs에서 styled-components 깜빡임 현상
author: minhyeong.jang
date: 2019-12-12 14:52
etc: nextjs
---

Nextjs에서 styled-components (이하 SC) 사용하면 CSS 로딩이 늦게 되어 발생하는 깜빡임 현상이 발생합니다.

개인적인 생각으로는 HTML은 SSR로 미리 렌더링 시켜 보내지만 SC의 스타일들은 사용자가 접속 시 변환된다고 생각합니다.

## css를 미리 적용할 수 있을까?

[참고 자료](https://github.com/zeit/next.js/blob/master/examples/with-styled-components/pages/_document.js)

Next.js와 SC를 검색한 결과, ServerStyleSheet라는 함수를 SC에서 제공하고 있었고 Next.js에서 샘플 코드를 제공하고 있었습니다.

해당 페이지에서 제공하는 코드는 다음과 같습니다.

```jsx
import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
```

> `_document.js 란?` HTML Document를 관리하는 부분으로 이 외에도 `'_app.js, _error.js'` 등이 있습니다.

## 위 코드에서 에러가 나신다면..?

시간이 지나고 작성하는 글이라 정확하게 기억은 안나지만, 위에 코드를 사용해도 깜빡임 현상이 계속 발생했던 것으로 기억납니다. 그래서 코드를 참고하여 새롭게 개발했습니다.

```jsx
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import React from "react";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <meta data-react-helmet='true' property='og:image' content='' />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
```

`ServerStyleSheet를 사용하여 element로 변환 후 head 태그 안에 출력`했습니다.
