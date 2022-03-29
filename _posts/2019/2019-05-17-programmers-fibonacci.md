---
layout: post
tags: [develop, algorithm]
image: /covers/programmers.jpg
title: programmers - 피보나치 수열 값 구하기
author: minhyeong.jang
date: 2019-05-17 23:02
---

## 문제

피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

> F(2) = F(0) + F(1) = 0 + 1 = 1  
> F(3) = F(1) + F(2) = 1 + 1 = 2  
> F(4) = F(2) + F(3) = 1 + 2 = 3  
> F(5) = F(3) + F(4) = 2 + 3 = 5

2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하시오.

- n은 1이상, 100000이하인 자연수입니다.

## 해결방법

피보나치 함수에서는 인자값으로 들어온 n만큼 재귀호출을 진행한다.
F(n) = F(n-1) + F(n-2) 공식을 적용하여 i-1, i-2 를 더하는 공식이다. 재귀 호출방식은 속도가 너무 느리기 때문에 배열에 push하여 계산하는 방식으로 변경하였다. 이때, 조건의 1234567로 나눈 나머지라는 조건을 만족시키기 위해 `%1234567`을 수식에 넣는다.

## 소스코드

```js
function fibonacci(num) {
  let arr = [0, 1];
  for (let i = 2; i <= num; i++) {
    arr.push((arr[i - 1] + arr[i - 2]) % 1234567);
  }
  return arr[num];
}

function solution(n) {
  return fibonacci(n);
}
```

### Reference

Programmers Level 2 - 연습문제
