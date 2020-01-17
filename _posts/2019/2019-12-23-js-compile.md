---
layout: post
tags: [dev-blog22, javascript]
image: /covers/jekyll.png
title: Javascript Compile 이해하기
author: minhyeong.jang
date: 2019-12-19 17:39
---

# Compile

https://velog.io/@geuni1013/You-Dont-Know-JS-%EC%8A%A4%EC%BD%94%ED%94%84%EC%99%80-%ED%81%B4%EB%A1%9C%EC%A0%80-%EC%A0%95%EB%A6%AC
https://yuddomack.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BB%B4%ED%8C%8C%EC%9D%BC%EB%A0%88%EC%9D%B4%EC%85%98%EC%BD%94%EB%93%9C%EC%9D%98-%EC%8B%A4%ED%96%89%EA%B3%BC%EC%A0%95

https://velog.io/@geuni1013/javascript-%EB%AA%A8%EB%A5%B4%EB%8A%94-%EC%BD%94%EB%93%9C-%EC%9D%B4%ED%95%B4

# Scope

http://www.nextree.co.kr/p7363/

# Execution Context

https://velog.io/@stampid/Execution-Context%EC%8B%A4%ED%96%89-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8%EB%9E%80
https://velog.io/@imacoolgirlyo/JS-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-Hoisting-The-Execution-Context-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85-%EC%8B%A4%ED%96%89-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8-6bjsmmlmgy

Execution Context in Detail
지금 까지 자바스크립트 엔진이 어떻게 실행 컨텍스트를 관리하는지 알아보았다.
다음은 자바스크립트 엔진이 실행 컨텍스트를 만드는 과정에 대해서 알아보자.

실행 컨텍스트는 두 가지 단계로 생성된다. Creation Phase, Execution Phase

(1) Creation Phase

- LexicalEnvironment 컴포넌트 생성
- VariableEnvironment 컴포넌트 생성

- Creation Phase
  - Lexical Environment
    - Environment Records : lexical environment 안에 함수와 변수를 기록한다.
      - Declarative environment record : 변수와 함수 선언을 저장
      - Object environment record : 변수와 함수의 선언과 다르게 object environment record는 글로벌 오브젝트도 기록
    - Reference to the outer environment
      - 외부 환경으로의 참조 값의 의미는 외부 lexical 환경으로 접근할 수 있다는 의미이다. 자바스크립트 엔진이 현재의 lexical environment에서 변수를 찾지 못했다면 **외부 환경에서 해당 변수를 찾아 볼 수 있다는 의미**이다.
    - This binding : 함수가 object reference로 호출되었다면 this는 해당 객체를 가리키게 된다. 그렇지 않으면 this는 글로벌 객체(window)를 가리키거나 strict mode에서는 undefined를 가리키고 있다.
  - VariableEnvironment
    - Lexical Environment과 동일, 차이점은 Lexical Environment이 함수 선언과 변수 (let과 const)의 바인딩을 저장하고 VariableEnvironment는 변수 var 만 저장한다.

# this

https://velog.io/@rohkorea86/2018-12-13-1412-%EC%9E%91%EC%84%B1%EB%90%A8-8kjpm5fa9x
