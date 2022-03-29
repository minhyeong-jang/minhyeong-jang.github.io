---
layout: post
tags: [develop, react]
image: /covers/react.png
title: React useContext 사용하기
author: minhyeong.jang
date: 2019-12-11 18:33
---

2019년 초에 Redux를 사용하다가 불편함이 많아 useContext를 사용법을 찾아봤을 때 자료가 생각보다 많지 않아 헤맸던 기억이 있습니다.
늦었지만, useContext의 활용법을 공유 드립니다.

## createContext로 생성하자

```jsx
import React, { createContext } from "react";

export const AppContext = createContext();
```

우선 Context를 생성합니다. 초기화는 바로 할 필요 없으며, export하는 이유는 Redux처럼 다른 파일에서 접근하기 위해 정의합니다.

## context에 함수와 데이터를 저장하자

```jsx
const App = () => {
  const [text, setText] = useState("test");

  const logText = (text) => {
    console.log("test");
  };
  return (
    <AppContext.Provider value={{ text, setText, logText }}>
      <ViewLayout />
    </AppContext.Provider>
  );
};
export default App;
```

Provider를 선언하게 되면, 해당 Provider의 자식들은 value에 선언된 부분들을 props로 넘겨주지 않아도 사용할 수 있습니다.

ViewLayout에서 useContext를 사용하여 데이터 및 함수 실행을 진행합니다.

## useContext로 호출하자

```jsx
import React, { useContext } from "react";

// App에 선언 된 context 호출
import { AppContext } from "./App";

const ViewLayout = () => {
  const { text, setText, logText } = useContext(AppContext);

  return (
    <div>
      <div>{text}</div>
      <button onClick={() => setText("changeText")}>text 변경</button>
      <button onClick={() => logText("log")}>console.log 출력</button>
    </div>
  );
};
export default ViewLayout;
```

props로 넘겨주지 않아도 위와 같이 App 파일에서 선언한 AppContext를 외부 파일에서 가져다 사용 할 수 있습니다.

이러한 방법으로 redux가 없어도 depth가 깊은 컴포넌트에서 호출이 가능하고, 여러 곳에서 사용하는 값이여도 대응이 가능합니다.
