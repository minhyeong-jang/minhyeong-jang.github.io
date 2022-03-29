---
layout: post
tags: [develop, react]
image: /covers/react.png
title: Type of property 'defaultProps' circularly references itself in mapped type
author: minhyeong.jang
date: 2021-03-20 23:55
---

styled-components를 사용하는 도중 defaultProps 타입 오류가 발생했다.  
Props 전달에도 이상이 없었고 어떤 오류인가 싶어서 검색해봤다.

```error
Type of property 'defaultProps' circularly references itself in mapped type
```

TypeScript Github에 등록된 이슈를 확인해보니, 정확하지는 않지만 `Typescript^3.9.0` 이후 나타나며 해당 오류는 styled-components에서 5.0.1 버전대에서 fix 되었다. ( 자세한 사항은 하단 참고자료로 이동하여 확인하면 좋을 것 같다. )

```bash
yarn upgrade @types/styled-components --latest
# or
npm install @types/styled-components@latest
```

styled-components의 type을 업데이트하는 방법이 있으며, 어려운 경우에는 styled-components.d.ts를 생성하여 예외처리 하는 방향도 있다.

### 참고자료

https://github.com/microsoft/TypeScript/issues/37597#issuecomment-628149946
