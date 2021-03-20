---
layout: post
tags: [dev-blog, dev-etc]
image: /covers/github.png
title: Type of property 'defaultProps' circularly references itself in mapped type
author: minhyeong.jang
date: 2021-03-20 23:55
---

styled-components를 사용하는 도중 defaultProps 타입 오류가 발생했다.  
Props 전달에도 이상이 없었고 어떤 오류인가 싶어서 검색해봤다.

```error
Type of property 'defaultProps' circularly references itself in mapped type
```

TypeScript Github에 등록된 이슈를 확인해보니, 정확하지는 않지만 `Typescript^3.9.0` 이후 나타나며 해당 오류는 styled-components에서 5.0.1 버전대에서 fix 되었다.

```bash
yarn upgrade @types/styled-components --latest
# or
npm install @types/styled-components@latest
```

styled-components의 type을 업데이트해서 정상 작동되는지 확인해보자.

### 참고자료

https://github.com/microsoft/TypeScript/issues/37597#issuecomment-628149946
