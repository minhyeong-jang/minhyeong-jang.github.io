---
layout: post
tags: [dev-blog22, javascript]
image: /covers/js.png
title: Javascript 호이스팅(Hoisting) 이해하기
author: minhyeong.jang
date: 2019-12-27 17:39
---

https://reactnative.dev/docs/environment-setup

error Failed to install the app. Make sure you have an Android emulator running or a device connected. Run CLI with --verbose flag for more details.

1. `bash chmod 755 android/gradlew` 실행
2. emulator -list-avds 리스트 뜨는지 확인
3. ~/.bash_profile 또는 ~/.zshrc 에 path 정상 등록되어있는지 확인

> Task :app:stripDebugDebugSymbols UP-TO-DATE
> Compatible side by side NDK version was not found.

> Task :app:installDebug FAILED

Android Studio -> Configure -> SDK Manager -> SDK Tools -> NDK 설치

## Failed to run jetifier

```bash
yarn
yarn add -D jetifier
npx jetify
npx react-native run-android
```

or

```bash
react-native run-android --no-jetifier
```
