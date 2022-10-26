---
layout: post
tags: [develop, study]
image: /covers/programmers.jpg
title: programmers - 숫자게임
author: minhyeong.jang
date: 2022-10-25 14:52
---

## Level3 문제

2n명의 사원들을 두 팀으로 나누고 사원마다 무작위 자연수를 받았을 때, B팀이 승리하는 횟수

## 해결방법

큰 수가 이기는 규칙이기에 내림차순으로 정렬하는게 효율적이다.  
게임으로 단순하게 생각하면 A팀의 가장 큰 숫자를 이기지 못하는 상황일 때, B팀의 가장 작은 숫자를 버리는 방향으로 진행하면 된다.
ex) A팀 [11, 9, 8, 7], B팀 [10, 9, 8, 7]이라면 B팀에서 11을 이길 수 있는 카드가 없으니까 가장 작은 수를 버리면서 B팀의 가장 큰 수를 유지할 수 있다.

해당 방식으로 tail이라는 변수를 놓고 B팀이 뒤에서 카드를 몇장 버렸는 지 체크하면서 값을 비교한다.

## 소스코드

```js
function solution(A, B) {
  const sortA = A.sort((a, b) => b - a);
  const sortB = B.sort((a, b) => b - a);

  let tail = 0;
  let count = 0;
  sortA.forEach((a, index) => {
    if (a >= sortB[index - tail]) {
      tail++;
      return;
    }
    count++;
  });
  return count;
}

solution([6, 8, 7, 9], [7, 9, 8, 6]);
solution([5, 1, 3, 7], [2, 2, 6, 8]);
solution([2, 2, 2, 2], [1, 1, 1, 1]);
```
