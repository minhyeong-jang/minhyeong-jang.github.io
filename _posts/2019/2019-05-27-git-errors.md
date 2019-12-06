---
layout: post
tags: [dev-blog, dev-etc]
image: /covers/algorithm.jpg
title: git error
author: minhyeong.jang
date: 2019-05-27 09:05
---

## fatal: refusing to merge unrelated histories

Git push가 안되는 경우, 서로 관련 기록이 없는 두 프로젝트를 병합할 때 허용하기

```bash
git pull origin master --allow-unrelated-histories
```
