---
layout: post
tags: [develop, react-native]
image: /covers/react-native.jpeg
title: Expo 라이브러리 정리
author: minhyeong.jang
date: 2019-05-22 09:05
---

> 계속 업데이트 되는 문서입니다.

## LinearGradient

배경색이 그라데이션으로 출력되는 View

```js
import { LinearGradient } from "expo";
...
<LinearGradient colors={["red","blue"]} />
```

## Vector-Icons

expo 에서 제공하는 여러 폰트의 아이콘 모음이다.  
아래 링크에서 아이콘 및 라이브러리를 확인하고 import하면 작동한다.  
[vector-icons](https://expo.github.io/vector-icons/)

```js
import { Ionicons, AntDesign } from "@expo/vector-icons";
...
<Ionicons color="white" size={144} name="ios-rainy" />
```

> Text 태그 내 사용 시 배경색을 투명으로 변경한다. `{backgroundColor: "transparent"}`
