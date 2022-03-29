---
layout: post
tags: [develop, algorithm]
image: /covers/algorithm.jpg
title: 평균 점수 구하기
author: minhyeong.jang
date: 2021-09-04 22:44
published: true
---

학생정보와 과목 별 점수 데이터가 들어오는데, 해당 과목에서 최고 점수와 최소 점수를 제외하고 등급 순서로 나열한다.

```js
const grade = (arr) => {
  const average =
    arr.reduce((sum, currValue) => sum + currValue, 0) / arr.length;
  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 50) return "D";
  return "F";
};
function solution(scores) {
  const item = scores.map((_, arrIndex) => {
    let group = scores.map((_, numIndex) => scores[numIndex][arrIndex]);
    const personNum = group[arrIndex];
    if (
      personNum === Math.max.apply(null, group) ||
      personNum === Math.min.apply(null, group)
    ) {
      group.filter((num) => num === personNum).length === 1 &&
        group.splice(arrIndex, 1);
    }
    return grade(group);
  });
  return item.join("");
}
```
