---
layout: post
tags: [develop, nomadcoders]
image: /covers/nomadcoders.png
title: React Native로 날씨앱 만들기
author: minhyeong.jang
date: 2019-05-22 16:05
---

## React Native & Expo 특징

#### React Native

- div, span 등 웹 태그 사용이 불가능하다.
- CSS 사용이 가능하다. ( 100% 동일하지는 않으며, Flexbox 사용이 가능 )
- 리액트 네이티브가 지원하는 태그는 빌드 시 Android / iOS에 맞게 변환해준다.
- 오류를 엄격하게 체크한다.
- CSS shorthand property가 작동하지 않는다.

#### Expo

- Android, IOS 테스트가 가능하다.
- 모바일에서 코드를 스캔하여 앱을 다운받고 실시간으로 수정사항 반영이 가능하다. ( Live Reload )
- 배포 시 앱을 업데이트 하는 것이 아닌 서버에 코드를 업데이트하는 방식이다.

  - 따라서 앱 스토어의 승인 절차가 필요없고, 유저는 서버에서 코드를 다운받는다.

- Online Coding : snack.expo.io

## 설치

[Expo Learn](https://expo.io/learn)

```bash
npm install expo-cli --global
expo init react-native-weather

? Choose a template: expo-template-blank
? Choose which workflow to use: managed
✔ Please enter a few initial configuration values.
  Read more: https://docs.expo.io/versions/latest/workflow/configuration · 100% completed
? Yarn v1.13.0 found. Use Yarn to install dependencies? Yes
```

## Expo 회원가입 및 로그인

[expo 회원가입](https://expo.io/signup)

```bash
expo login
? Username/Email Address:
? Password: [hidden]
```

## 실행

```bash
cd react-native-weather
yarn start
```

Expo 로컬 홈페이지가 열리면 Run simulator 또는 모바일에서 Expo 앱을 설치하여 QR코드를 인식한다.

- Xcode 업데이트 필수

## 설정

- Live Reload : 화면 전체 새로고침
- Hot Reloading : 변경 사항 새로고침
- Debug Remote JS : 인터넷 브라우저에서 디버깅

## 중요 코드

전체 소스코드 [Github](https://github.com/minhyeong-jang/react-native-weather) 참고

- 미포함 코드 `PropTypes, Error handle, Loading, StyleSheet, StatusBar, Etc.`

**App.js**

- 플랫폼의 좌표로 openweathermap api를 호출한다.
- 온도 및 날씨 이름을 Weather 컴포넌트로 전달한다.

```jsx
componentDidMount() {
  navigator.geolocation.getCurrentPosition(
    position => {
      this.getWeather(position.coords.latitude, position.coords.longitude);
    },
    error => {
      this.setState({ error });
    }
  );
}
getWeather = (lat, long) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
  )
    .then(res => res.json())
    .then(json =>
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main
      })
    );
};
  render() {
    return (
      <Weather temp={Math.ceil(temperature - 273.15)} weatherName={name} />
    );
  }
}
```

**Weather.js**

- expo 모듈을 사용한다.
  - LinearGradient : 백그라운드 색상을 그라데이션으로 출력
  - MaterialCommunityIcons : expo 에서 제공하는 아이콘

```jsx
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "Raining like a MF",
    subtitle: "For more info look outside",
    icon: "weather-rainy"
  },
  ...
};

const Weather = ({ temp, weatherName }) => {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
    >
      <View>
        <Text>
          <MaterialCommunityIcons
            color="white"
            size={144}
            name={weatherCases[weatherName].icon}
          />
        </Text>
        <Text>{temp}º</Text>
      </View>
      <View>
        <Text>{weatherCases[weatherName].title}</Text>
        <Text>
          {weatherCases[weatherName].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
};
```

## 후기

처음 React Native를 공부했을 때는 React 경험이 없어서 어렵고 이해 안 되는 부분이 많았다.  
지금이야 React 개발자가 되어 공부해보니 생각보다 쉽고 재미있었다.  
다만, 기초적인 부분이기도 하고 사용했던 LinearGradient, Vector-Icons 모듈처럼 여러 모듈의 존재 여부를 모르는 부분이 React Native를 개발하면서 난관일 것이라고 생각한다.

## Reference

Github : [react-native-weather](https://github.com/minhyeong-jang/react-native-weather)  
Reference : [nomadcoders](https://academy.nomadcoders.co/p/fucking-react-native-apps?ref=map)
