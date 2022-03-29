---
layout: post
tags: [develop, style]
image: /covers/css.jpg
title: list-style에 bold 처리하기
author: minhyeong.jang
date: 2019-12-12 14:52
etc: jekyll
---

ol, li 태그를 사용하면 옆에 숫자가 기본적으로 나타나는데, 해당 숫자에 bold 처리하는 방법입니다.

## 단순 font-weight 처리 방법

기본적으로 list-style에 bold 처리를 하려면 ol 태그에 적용하면 됩니다.  
이후 li 내 태그를 생성하여 normal을 적용합니다.

```html
<ol>
  <li>
    <p>test</p>
  </li>
  <li>
    <p>test2</p>
  </li>
  <li>not work</li>
</ol>
<style>
  ol {
    font-weight: bold;
  }
  ol li p {
    font-weight: normal;
  }
</style>
```

위 방법의 문제점은 마지막 li처럼 태그 적용이 안되어있으면 같이 bold 처리가 됩니다.

## count-increment

[count-increment](https://developer.mozilla.org/en-US/docs/Web/CSS/counter-increment) 방법을 사용하여 list-style을 사용하지 않고 카운터를 작성할 수 있습니다.

```html
<ol>
  <li>
    <p>test</p>
  </li>
  <li>
    <p>test2</p>
  </li>
  <li>not work</li>
</ol>
<style>
  ol {
    margin: 0 0 1.5em;
    padding: 0;
    counter-reset: item;
  }

  ol > li {
    margin: 0;
    padding: 0 0 0 2em;
    text-indent: -2em;
    list-style-type: none;
    counter-increment: item;
  }

  ol > li:before {
    display: inline-block;
    width: 1em;
    padding-right: 0.5em;
    font-weight: bold;
    text-align: right;
    content: counter(item) ".";
  }
</style>
```

counter를 사용하여 li:before에 숫자를 직접 작성하는 방법입니다.  
단점으로는 list-style처럼 다양한 스타일이 아닌 숫자로만 제공합니다.
