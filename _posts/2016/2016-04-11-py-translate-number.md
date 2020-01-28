---
layout: post
tags: [dev-blog, dev-etc]
image: /covers/python.png
title: Python - 2진수, 8진수, 10진수, 16진수 변환하기
author: minhyeong.jang
date: 2016-04-11 17:13
etcTags: [python]
---

Python에서 진수 변환을 어떻게 작업하는지를 설명합니다.

## 10진수 -> 2, 8, 16 진수 변환

2진수 bin( 정수 )  
8진수 oct( 정수 )  
16진수 hex( 정수 )

`ex) bin(12345)`

## x진수 -> 10진수 변환

int( 정수, 진수 )

`ex) int( 12345, 7 ) -> 7진수 12345를 10진수로 변환`

## 소스코드

```python
if __name__ == "__main__" :

  num = 12345

  print bin(num)
  # 10진수 -> 2진수 변환 : 0b11000000111001

  print oct(num)
  # 10진수 -> 8진수 변환 : 030071

  print hex(num)
  # 10진수 -> 16진수 변환 : 0x3039

  print int(bin(num),2)
  # 2진수 -> 10진수 변환 : 12345

  print int(hex(num),16)
  # 16진수 -> 10진수 변환 : 12345
```

## 참고사항

위 게시물은 기존에 운영한 Tistory에서 가져온 자료입니다.  
시간이 흐름에 따라 `오류가 발생`하거나 참고사항으로 `첨부한 자료가 없을 수 있습니다.`
