---
layout: post
tags: [develop, nomadcoders]
image: /covers/nomadcoders.png
title: Typescript로 Blockchain 만들기
author: minhyeong.jang
date: 2019-05-24 23:33
---

## Typescript?

Typescript는 프로그래밍 언어로 Javascript + Type의 합성어이다. 컴파일 시 Javascript로 변환된다.  
Javascript가 유명한 건 엄격한 규칙이 없기 때문에 사용하기 쉽고, 우리가 원하는 방향으로 수정하기도 쉽다.
하지만 큰 프로젝트에서 일을 하거나 버그를 최소화하고 싶다면 위의 장점이 단점이 된다.
Typescript로 작성하면 기능 예측이 가능하며, 코드를 읽기 쉬워지게 된다.

## 설치

```bash
yarn add typescript
yarn add tsc-watch --dev
yarn add crypto-js
```

참고 : `yarn global add typescript` 로 설치하는 경우, tsc-watch가 인식하지 못하는 오류가 있습니다.

## 설정

**tsconfig.json**  
Typescript => Javascript 변환할 떄 반영하는 설정

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "ES2015",
    "sourceMap": true,
    "outDir": "dist"
  }
}
```

> `"module": "commonjs"` node.js 평범하게 import, export 한다.  
> `"target": "ES2015"` ES5 버전으로 컴파일 한다.  
> `"sourceMap": true` Sourcemap을 설정한다. ( Sourcemap 이란? )  
> `"outDir": "dist"` dist 파일로 컴파일된 파일을 출력한다.
> `"include": ["src/**/*"]` 컴파일 과정에서 포함할 파일 ( src 폴더 내 전체 파일 )
> `"excude": ["node_modules"]` 컴파일 과정에서 미포함 파일

**tsc-watch**  
소스코드 수정 시 자동으로 컴파일을 진행한다.

기존 스크립트 : yarn start 시 컴파일 및 index.js를 실행한다.

```json
{
  "scripts": {
    "start": "node index.js",
    "prestart": "tsc"
  }
}
```

tsc watch 스크립트 : tsc-watch가 소스코드 변경사항을 확인하여 컴파일, 실행한다.

```json
{
  "scripts": {
    "start": "tsc-watch --onSuccess \" node dist/index.js\" "
  }
}
```

## 타입 체크

**단순 함수**  
name, gender은 문자열, age는 숫자이다. 함수의 return 타입은 string 이다.

```jsx
const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}!`;
};
sayHi("Minhyeong", 23, "male");

export {};
```

**Interface**  
오브젝트에 대한 타입을 선언 후 함수에서 인자 값 타입을 Interface Human으로 정의한다.

```jsx
interface Human {
  name: string;
  age: number;
  gender: string;
}
const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

const person = {
  name: "Minhyeong",
  age: 23,
  gender: "male",
};
sayHi(person);

export {};
```

**Class**  
Human 클래스를 선언하여 타입을 체크하고 객체를 생성한다.

```jsx
class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const min: Human = new Human("Minhyeong", 23, "male");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${
    person.gender
  }!`;
};
sayHi(min);

export {};
```

## 소스코드

[Github / index.ts](https://github.com/minhyeong-jang/typechain/blob/master/src/index.ts)

- 블록체인 형태로 개발을 진행한다.
  - 배열의 맨 마지막 해쉬 값과 생성될 데이터의 값을 합쳐 새로운 해쉬값을 생성합니다.  
    ex) SHA256( 마지막 해쉬 + ( index, 생성시간, 데이터 내용 ) )
- Class 형태로 선언하여, Typescript를 활용하여 로직을 구현합니다.

**흐름순서**

1. createNewBlock 함수에서 암호화에 필요한 데이터를 호출
2. Block.calculateBlockHash 에서 해쉬 값을 생성
3. addBlock 함수에서 isBlockValid 함수를 호출하여 이전 블록과 추가되는 블록의 Validation을 체크 및 push

```jsx
import * as CryptoJS from "crypto-js";

class Block {
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  static validateStructure = (aBlock: Block): boolean =>
    typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";

  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "aaaabbbbbbccccc", "", "firstBlock", 10000000);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimestamp,
    data
  );
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimestamp
  );
  addBlock(newBlock);
  return newBlock;
};

const getHashforBlock = (aBlock: Block): string =>
  Block.calculateBlockHash(
    aBlock.index,
    aBlock.previousHash,
    aBlock.timestamp,
    aBlock.data
  );

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  if (!Block.validateStructure(candidateBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash) {
    return false;
  } else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
    return false;
  } else {
    return true;
  }
};

const addBlock = (candidateBlock: Block): void => {
  if (isBlockValid(candidateBlock, getLatestBlock())) {
    blockchain.push(candidateBlock);
  }
};

createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");

console.log(getBlockchain());

export {};
```

## 후기

Typescript를 기초도 모르는 상태로 개발할 때 "아 이러한 상황에선 이렇게 하면 되는구나"라는 식으로 진행했었다. 강의를 들어보니 내가 놓치고 지나간 부분들이 많다는 것을 알고 새롭게 배웠다. ( 블록체인의 구조도 배운 건 일석이조였다. )

## Reference

Github : [typechain](https://github.com/minhyeong-jang/typechain/)  
Reference : [nomadcoders](https://academy.nomadcoders.co/p/build-a-blockchain-with-typescript?ref=map)
