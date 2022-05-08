---
layout: post
tags: [develop, dev-etc]
image: /covers/algorithm.jpg
title: Linux Puppeteer 오류
author: minhyeong.jang
date: 2022-05-08 21:00
published: true
---

## 개요

Puppeteer를 사용하는 nodejs를 linux 서버에 띄었는데 작업하니 다음과 같은 오류가 났다.

```bash
Error: Failed to launch the browser process!
/home/ubuntu/slack-bot-groupware/node_modules/puppeteer/.local-chromium/linux-938248/chrome-linux/chrome: error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory
```

## 해결방법

아래 명령어를 실행하여 추가 패키지를 설치한다.

```bash
sudo apt-get install libgtk2.0-0 libgtk-3-0 libnotify-dev
sudo apt-get install libgconf-2-4 libnss3 libxss1
```
