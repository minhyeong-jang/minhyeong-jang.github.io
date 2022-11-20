---
layout: post
tags: [develop, react-native]
image: /covers/react-native.jpeg
title: React Native HTML Render
author: minhyeong.jang
date: 2022-11-20 23:52
---

React Native에서 텍스트 에디터로 제작된 공지사항을 그대로 보여주기 위해 html을 렌더링하려고한다.

## 시행착오

처음에는 `react-native-htmlview`를 사용하여 html을 출력했다.

```bash
yarn add react-native-htmlview
```

```js
import HTMLView from 'react-native-htmlview';
...
<StyledContentWrap>
  <HTMLView value={body} />
</StyledContentWrap>

const StyledContentWrap = styled(View)`
  h1 {
    font-size: xxx;
  }
  h2 {
    font-size: xxx;
  }
`
```

html 태그에 맞는 css를 보여주기 위해 styled-components에 태그에 맞는 스타일링을 적용했는데, 여기서 문제가 발생했다.

`Node of type rule not supported as an inline style StyledNativeComponent`

react-native에서는 html 태그를 지원하지 않기 때문에 styledComponent 영역에서 작성이 불가능하다고 warning이 계속 뜨는 것이였다.  
사용은 가능하지만 다른 방법으로 변경하기로 했다.

## react-native-render-html

npm trends에서도 react-native-htmlview과는 엄청난 차이를 보이는 `react-native-render-html`를 사용하기로 했다.

```bash
yarn add react-native-render-html
```
```js
import HTML from 'react-native-render-html';
import { View, useWindowDimensions } from "react-native";
...
const contentWidth = useWindowDimensions().width;
...
<View>
  <HTML
    source={{ html: body }}
    tagsStyles={htmlTagsStyles}
    contentWidth={contentWidth}
  />
</View>
```

`contentWidth`를 주지 않으면 warn이 뜬다. 라이브러리 Readme를 보니 `useWindowDimensions`로 width를 가져와 채워주는 코드가 있어서 그대로 가져왔다.

스타일은 아래와 같이 StyleSheet처럼 스타일링하여 tagsStyles로 넣어주면 된다.

```js
export const htmlTagsStyles = {
  ...
  ul: {
    marginTop: 0,
    paddingLeft: 32,
    marginBottom: 16,
  },
  p: {
    marginTop: 0,
    marginBottom: 16,
  },
  a: {
    color: "#0d6efd",
    textDecoration: "underline",
  },
  ...
}
```

기본적으로 native 코드를 따라가기 때문에, `listStyle`와 같은 스타일링이 불가능하다. 대신 `customRenderers`를 사용하여 ul, li 등 앞에 prefix를 붙이는 등 커스텀이 가능한데, [Document](https://www.npmjs.com/package/react-native-render-html/v/5.0.1#creating-custom-renderers)를 참고하면 된다.
