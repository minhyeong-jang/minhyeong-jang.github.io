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

### 참고자료

https://github.com/microsoft/TypeScript/issues/37597#issuecomment-628149946
