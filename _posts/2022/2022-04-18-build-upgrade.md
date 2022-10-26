---
layout: post
tags: [develop, react]
image: /covers/nextjs.jpg
title: EC2 웹 서비스 셋팅하기
author: minhyeong.jang
date: 2022-01-02 18:05
published: false
---

```
customize-cra
react-app-rewired
speed-measure-webpack-plugin


    "build:stage": "REACT_APP_ENV=stage react-app-rewired --max_old_space_size=4096 build",
    "build:production": "REACT_APP_ENV=production react-scripts --max_old_space_size=4096 build",
```

```
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin({
  compareLoadersBuild: {
    loaderTopFiles: 40,
  },
});

module.exports = function (config) {
  config = smp.wrap({
    ...config,
  });
  return config;
};

```

- https://velog.io/@goon126/%EB%B9%8C%EB%93%9C%ED%99%98%EA%B2%BD-%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0-Webpack-ESbuild
