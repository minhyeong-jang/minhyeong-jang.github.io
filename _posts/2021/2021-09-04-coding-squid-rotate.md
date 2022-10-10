---
layout: post
tags: [develop, study]
image: /covers/algorithm.jpg
title: 코딩테스트 - 2차원 배열 회전
author: minhyeong.jang
date: 2021-09-04 22:44
published: true
---

N x N 크기의 2차원 배열을 시계방향으로 90도씩 회전하려 합니다. 다음은 2 x 2 크기의 2차원 배열을 시계방향으로 90도씩 회전하는 예시입니다.

```js
// Example ( 2x2 )
[
  [1, 2],
  [3, 4],
][
  // After ( 1회 회전 )
  ([3, 1], [4, 2])
][
  // Example ( 2x2 )
  ([1, 2], [3, 4])
][
  // After ( 2회 회전 )
  ([4, 3], [2, 1])
][
  // Example ( 3x3 )
  ([4, 1, 2], [7, 3, 4], [3, 5, 6])
][
  // After ( 3회 회전 )
  ([2, 4, 6], [1, 3, 5], [4, 7, 3])
];
```

## 소스코드

> !! 정답제출 후 업데이트하지 않은 코드여서 안돌아갈 수 있어요!

```js
const rotateMatrix = (matrix, r) => {
  if (!r) return matrix;
  let temp = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix.length).fill(0));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (!temp[i][j]) {
        temp[i][j] = 0;
      }
      temp[i][j] = matrix[matrix.length - j - 1][i];
    }
  }
  return rotateMatrix(temp, r - 1);
};
const solution = (matrix, r) => {
  return r % 4 ? rotateMatrix(matrix, r % 4) : matrix;
};
```
