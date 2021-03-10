---
layout: post
tags: [dev-blog, dev-etc]
image: /covers/github.png
title: git refusing to merge unrelated histories
author: minhyeong.jang
date: 2019-05-27 09:05
---

## fatal: refusing to merge unrelated histories

로컬 저장소에서 Git Repo 생성 후 push 하는 경우, 프로젝트 충돌로 나타나는 오류이다.

```bash
git pull origin main --allow-unrelated-histories
```
