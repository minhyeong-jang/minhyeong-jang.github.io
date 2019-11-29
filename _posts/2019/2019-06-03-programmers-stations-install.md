---
layout: post
tags: [dev-blog, algorithm]
image: /files/covers/algorithm.jpg
title: programmers - 기지국 설치
author: minhyeong.jang
date: 2019-06-03 11:06
---

## 문제

N개의 아파트가 일렬로 쭉 늘어서 있습니다. 이 중에서 일부 아파트 옥상에는 4g 기지국이 설치되어 있습니다. 기술이 발전해 5g 수요가 높아져 4g 기지국을 5g 기지국으로 바꾸려 합니다. 그런데 5g 기지국은 4g 기지국보다 전달 범위가 좁아, 4g 기지국을 5g 기지국으로 바꾸면 어떤 아파트에는 전파가 도달하지 않습니다.

예를 들어 11개의 아파트가 쭉 늘어서 있고, [4, 11] 번째 아파트 옥상에는 4g 기지국이 설치되어 있습니다. 만약 이 4g 기지국이 전파 도달 거리가 1인 5g 기지국으로 바뀔 경우 모든 아파트에 전파를 전달할 수 없습니다. (전파의 도달 거리가 W일 땐, 기지국이 설치된 아파트를 기준으로 전파를 양쪽으로 W만큼 전달할 수 있습니다.)

- 초기에, 1, 2, 6, 7, 8, 9번째 아파트에는 전파가 전달되지 않습니다.  
  ![](https://res.cloudinary.com/jistring93/image/upload/v1492073407/%EA%B8%B0%EC%A7%80%EA%B5%AD%EC%84%A4%EC%B9%981_pvskxt.png)
- 1, 7, 9번째 아파트 옥상에 기지국을 설치할 경우, 모든 아파트에 전파를 전달할 수 있습니다.  
  ![](https://res.cloudinary.com/jistring93/image/upload/v1492073617/%EA%B8%B0%EC%A7%80%EA%B5%AD%EC%84%A4%EC%B9%982_kml0pb.png)

- 3개의 아파트보다 더 많은 아파트 옥상에 기지국을 설치할 경우에도 모든 아파트에 전파를 전달할 수 있습니다.  
  ![](https://res.cloudinary.com/jistring93/image/upload/v1492073725/%EA%B8%B0%EC%A7%80%EA%B5%AD%EC%84%A4%EC%B9%983_xhv7r3.png)

이때, 우리는 기지국을 **최소로 설치**하면서 모든 아파트에 전파를 전달하려고 합니다.

## 해결방법 및 소스코드

처음에는 N개의 아파트를 배열로 생성한 뒤, false로 채우고 전파가 닿는 부분들을 true로 채우는 방식을 진행했습니다.

```js
function solution(n, stations, w) {
  let answer = 0;
  let array = Array(n).fill(false);
  for (let i = 0; i < stations.length; i++) {
    array.fill(true, Math.max(stations[i] - w - 1, 0), stations[i] + w);
  }
  for (let i = array.length - 1; i >= 0; i--) {
    if (!array[i]) {
      let newStation = i - w;
      if (newStation - w < 0) {
        answer++;
        break;
      }
      i = i - w - w;
      answer++;
    }
  }
  return answer;
}
```

하지만 위와 같이 작업하는 경우, **정확성은 맞지만 효율성이 떨어집니다.**  
( for문을 2번 돌고, false 기준으로 기지국을 다시 확인하는 것은 매우 비효율적 )

따라서 노트에 그려보니, **전파가 닿지 않는 부분이 연속적으로 몇개가 있는지에 따라 기지국을 설치할 개수**가 나온다는 것을 알았습니다.

- 설치된 기지국의 위치를 파악하고, **좌측에 있는 전파가 닿지 않는 부분**들을 측정합니다.
- **전파가 닿지 않는 부분의 개수**에 따라 몇 개를 설치해야하는지 파악합니다.
- 다음 기지국의 위치를 파악하고, **1번에서 기준으로 잡았던 기지국**까지 전파가 닿지 않는 부분을 파악합니다.
- 이러한 방식으로 끝까지 계산합니다.

stations이 없는 경우와 처음과 끝에 stations가 있는 경우 등, 다양한 케이스 문제로 시간을 소요했었습니다.

```js
function solution(n, stations, w) {
  stations.sort((a, b) => a - b);
  let answer = 0;
  let state = 0;
  let left = 0;
  let right = 0;
  while (true) {
    right = stations[state] !== undefined ? stations[state] - w - 1 : n;
    let statCount = Math.ceil((right - left) / (2 * w + 1));
    answer += statCount > 0 ? statCount : 0;
    if (right === n) break;
    left = stations[state] + w;
    state++;
  }
  return answer;
}
```

## 테스트 케이스

| Parameters                | Return |
| ------------------------- | ------ |
| 11, [1,11], 1             | 3      |
| 16, [9], 2                | 3      |
| 16, [], 2                 | 4      |
| 16, [1, 16], 2            | 2      |
| 2123000, [0,2123001], 200 | 5294   |

## Reference

Programmers Level 3 - 2018 Summer coding
