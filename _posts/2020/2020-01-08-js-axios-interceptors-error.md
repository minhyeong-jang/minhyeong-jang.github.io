---
layout: post
tags: [dev-blog, javascript]
image: /covers/js.png
title: axios - interceptors error 처리와 refreshToken
author: minhyeong.jang
date: 2020-01-08 14:10
---

axios로 개발할 때, API마다 try ~ catch문을 적용하여 에러 처리를 진행해왔습니다.  
이번 프로젝트에서는 Token을 관리하며, 서버에서 403에러가 오면 Token을 재발행해야하는 환경이라 더 나은 코드가 없을까 찾아보니 interceptors가 있었습니다.

## axios.interceptors

axios.interceptors 함수를 통해 request, response를 감지할 수 있습니다.

```js
// API 호출 전 해당 함수가 먼저 실행됩니다.
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// API 실행 후 response를 감지하여 데이터를 return 합니다.
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);
```

위 예제처럼 `interceptors.response`를 통하여 에러를 감지할 수 있게됩니다.

그러면 다시 response에 에러처리를 위해 코드를 작성합니다.

```js
const _axios = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});
_axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 403) {
      return Auth.refreshToken() // token 재발행 및 반환
        .then(token => {
          originalRequest.headers["Authorization"] = token;
          return _axios.request(error.config); // error.config(origin API 정보)를 다시 요청
        })
        .catch(error => {
          window.location.href = "/login";
        });
    }
    return Promise.reject(error);
  }
);
```

1. 별도의 axios를 생성하고, `_axios`가 호출되면 403에러를 감지할 수 있도록 작성합니다.
2. `refreshToken()`에서 token을 전달받아 header에 추가
3. `origin API 정보가 들어있는 error.config`로 기존 API 재호출
4. 결과를 return하게 되면, 기존 API 호출 부분의 Response 값으로 전달됩니다.

예를 들면 아래와 같이 API를 호출했을 때 403에러가 나타나도 interceptors에서 정상적인 return 값을 부여하면 result에는 정상적인 값이 들어갑니다.

```js
const result = await _axios.get(url); // 403에러가 나타나도, interceptors의 return 값을 result에 저장
return result;
```

감사합니다.