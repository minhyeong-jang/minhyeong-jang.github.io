---
layout: post
tags: [dev-blog, dev-etc]
image: /covers/jekyll.png
title: ERROR: Failed to build gem native extension.
author: minhyeong.jang
date: 2021-03-08 18:30
---

# ERROR: Failed to build gem native extension.

gem으로 jekyll 모듈을 설치하는 과정에서 다음과 같은 오류가 나타났다.  
검색해보니 xcode 관련 자료만 나오다가 해당 모듈이 사용중인 jekyll 버전을 미지원하는 내용이 나왔다.

1. 해당 모듈의 버전 리스트를 검색한다.

```bash
gem list --remote --all jekyll-sitemap

*** REMOTE GEMS ***

jekyll-sitemap (1.4.0, 1.3.1, 1.3.0, 1.2.0, ...)
```

2. 지원하는 버전을 설치해보자.

```bash
sudo gem install jekyll-sitemap -v 1.2.0

Successfully installed jekyll-sitemap-1.2.0
```

사용하려는 [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap)은 현재 jekyll 버전에서 v1.2.0까지만 지원한다.

지원 여부를 깃헙에서 확인해봤으면 됐을텐데, 오류만 검색하다가 시간을 많이 소모했다..
