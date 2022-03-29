---
layout: post
tags: [develop, dev-etc]
image: /covers/404.png
title: Disqus Email 인증 ERR_CONNECTION_REFUSED
author: minhyeong.jang
date: 2021-03-10 18:20
---

Disqus 계정에서 이메일을 변경하면서 인증하라는 메시지가 나왔다.  
인증받기를 눌러도 메일은 한참 지나서오고 들어가보니 연결을 거부당했다.

```bash
사이트에 연결할 수 없음
disq.us에서 연결을 거부했습니다.

ERR_CONNECTION_REFUSED
```

도메인이 disq.us인게 url shoutcut으로 사용한 것 같은데, 내 네트워크 문제인지 쟤네 문제인지.. 아무튼 거부당했다.

혹시나 해서 disq.us 부분만 disqus.com으로 바꿨더니 url이라는 사용자의 프로필로 이동했다.
URL을 다시 확인해보니 결국은 disq.us에서 url을 파라미터로 받아서 리다이렉트를 하는 방식이다.

## 해결방법

1. disq.us/url?url= 여기서 부터 뒷부분을 전부 복사한다.
2. url을 decode 해주자. [urlDecoder](https://meyerweb.com/eric/tools/dencoder/)에서 붙여넣기 후 decode
3. decode 된 url 경로로 이동하자.

`Your email has been verified successfully!`
