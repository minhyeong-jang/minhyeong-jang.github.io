---
layout: post
tags: [dev-blog, javascript]
image: /covers/js.png
title: axios timeout 설정
author: minhyeong.jang
date: 2021-03-09 00:33
---

axios은 기본적으로 api timeout이 설정되어있지 않습니다.  
따라서 API를 호출하면 서버에서 응답주기 전까지는 계속 연결되어있습니다.

## axios timeout 설정하기

axios를 생성하여 timeout을 옵션으로 추가하고 해당 인스턴스로 api를 호출하도록 작업합니다.

```js
const instance = axios.create({
  timeout: 30000,
});

export const baseApi = (method, url, params) => {
  return instance
    .request({
      method,
      url,
      data: params,
    })
    .then(axiosResponseToData)
    .catch(axiosErrorResToData);
};
```

ts로 작성되어 있던 부분들인데, 불필요해보여 제거 후 올립니다.
