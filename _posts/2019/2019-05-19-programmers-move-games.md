---
layout: post
tags: [dev-blog, algorithm]
image: /files/covers/algorithm.jpg
title: programmers - 좌표 명령어 게임
author: minhyeong.jang
date: 2019-05-19 23:05
---

## 문제

게임 캐릭터를 4가지 명령어를 통해 움직이려 합니다. 명령어는 다음과 같습니다.

> U: 위쪽으로 한 칸 가기  
> D: 아래쪽으로 한 칸 가기  
> R: 오른쪽으로 한 칸 가기  
> L: 왼쪽으로 한 칸 가기

캐릭터는 좌표평면의 (0, 0) 위치에서 시작합니다. 좌표평면의 경계는 왼쪽 위(-5, 5), 왼쪽 아래(-5, -5), 오른쪽 위(5, 5), 오른쪽 아래(5, -5)로 이루어져 있습니다.

이때, 우리는 게임 캐릭터가 지나간 길 중 캐릭터가 처음 걸어본 길의 길이를 구하려고 합니다. 예를 들어 위의 예시에서 게임 캐릭터가 움직인 길이는 9이지만, 캐릭터가 처음 걸어본 길의 길이는 7이 됩니다. (8, 9번 명령어에서 움직인 길은 2, 3번 명령어에서 이미 거쳐 간 길입니다)

단, 좌표평면의 경계를 넘어가는 명령어는 무시합니다.

명령어가 매개변수 dirs로 주어질 때, 게임 캐릭터가 처음 걸어본 길의 길이를 구하여 return 하는 solution 함수를 완성해 주세요.

제한사항

- dirs는 string형으로 주어지며, 'U', 'D', 'R', 'L' 이외에 문자는 주어지지 않습니다.
- dirs의 길이는 500 이하의 자연수입니다.

## 해결방법

처음 걸어본 길만 구한다는 것을 중점으로 개발하면 손쉽게 풀린다.

똑같은 길을 걷는 조건은 두가지가 있다.

1. A좌표 -> B좌표
2. B좌표 -> A좌표

나는 움직이기 전 좌표와 움직인 후 좌표 값을 오브젝트 형태로 저장하였다.  
`A(0, 1) -> B(-1, 1)` 이동 시 `Object { "01-11": true }`  
그리고 **이벤트가 발생할 때 마다 Object에 A -> B, B -> A 가는 경로를 확인한다.**

`A(0, 1) -> B(-1, 1)` 이동 시 `Obejct { "01-11", "-1101" }` 여부를 확인한다.  
둘 중 하나라도 있는 경우, 해당 길을 지나간 적이 있다는 것이다.

## 소스코드

```js
function moveCheck(positions, prevX, prevY, nextX = 0, nextY = 0) {
  const prevPos = `${prevX}${prevY}`
  const nextPos = `${nextX}${nextY}`
  if (!(positions[prevPos + nextPos] || positions[nextPos + prevPos])) {
    return true
  }
  return false
}

function solution(dirs) {
  let x = 0
  let y = 0
  let nextX = 0
  let nextY = 0
  let count = 0
  let positions = {}
  dirs.split('').map(dir => {
    if (dir === 'U' && y < 5) {
      nextY = y + 1
    } else if (dir === 'D' && y > -5) {
      nextY = y - 1
    } else if (dir === 'R' && x < 5) {
      nextX = x + 1
    } else if (dir === 'L' && x > -5) {
      nextX = x - 1
    } else {
      return
    }
    if (moveCheck(positions, x, y, nextX, nextY)) {
      positions[`${x}${y}${nextX}${nextY}`] = true
      count++
    }
    x = nextX
    y = nextY
  })
  return count
}

solution('ULURRDLLU')
```

## 테스트 케이스

| Parameters      | Return |
| --------------- | ------ |
| ULURRDLLU       | 7      |
| LULLLLLLU       | 7      |

## Reference

Programmers Level 3 - 코딩
