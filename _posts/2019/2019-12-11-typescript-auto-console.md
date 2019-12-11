---
layout: post
tags: [dev-blog, dev-etc]
image: /covers/typescript.png
title: typescript에서 import console 이슈
author: minhyeong.jang
date: 2019-05-27 09:05
etc: typescript
---
typescript 환경에서 console.log를 입력하면 상단에 `import console = require('console');`가 자동으로 import 생성된다.  
해당 문제가 VSCode, Typescript 중 어디서 생성되는지 모르지만 해결방법은 있습니다.

## 해결방안
구글에서 해결방안 중 node_modules 내 파일을 수정하는 방안도 있었지만, 팀원들도 동일한 증상을 겪을 것 같아 declare 방법으로 진행하였습니다.

프로젝트 root 디렉토리에 console.d.ts를 생성 후 아래 코드를 추가합니다. ( 기존에 사용중이신 d.ts가 있으시다면 그걸 사용하셔도 됩니다. )
```js
declare module 'console' {
  export = typeof import("console");
}
```

> - 문제가 해결되지 않으면 `command + shift + p` 후 `TypeScript: Restart to Server`를 실행해주세요.  
> - tsconfig에서 baseUrl을 추가하신 경우, baseUrl의 경로가 root가 됩니다.