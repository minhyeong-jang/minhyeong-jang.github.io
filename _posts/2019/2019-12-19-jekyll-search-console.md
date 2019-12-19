---
layout: post
tags: [dev-blog, dev-etc]
image: /covers/jekyll.png
title: Jekyll + Google Search Console 연동하기
author: minhyeong.jang
date: 2019-12-19 17:39
etc: jekyll
---

Google Search Console에서는 Google 검색에 콘텐츠를 표시하기 위한 실행 가능 보고서, 도구, 학습 리소스를 제공합니다. [Link](https://support.google.com/webmasters/answer/6258314?utm_source=wnc_376106&utm_medium=gamma&utm_campaign=wnc_376106&utm_content=msg_743502&hl=ko)

Google Search Console에서 봇이 데이터를 가져가기 위해 sitemap과 robots의 설정이 필요하며, 먼저 설명드리겠습니다.

> 작성 당시 jekyll 버전은 `3.8.6` 입니다.

## Jekyll Sitemap 설치

### gem jekyll-sitemap 설치

```bash
gem install jekyll-sitemap
```

### Gemfile 설정

```ruby
# GemFile
group :jekyll_plugins do
  gem "jekyll-sitemap"
```

### \_config.yml 수정

```ruby
# _config.yml
plugins:
  - jekyll-sitemap
```

> 이제 도메인 뒤에 `/sitemap.xml`를 붙여 설정된 것을 확인합니다.
> ex) [https://minhyeong-jang.github.io/doriri/sitemap.xml](https://minhyeong-jang.github.io/doriri/sitemap.xml)

## robots.txt 설정

Bot에게 현재 사이트의 sitemap과 권한 설정 등을 제공합니다.

```ruby
User-agent: *
Allow: /

Sitemap: https://minhyeong-jang.github.io/doriri/sitemap.xml
```

## Google Search Console 생성

이제 마지막으로 [Google Search Console](https://search.google.com/search-console) 홈페이지에서 속성을 생성합니다.

도메인 / URL 접두어로 나눠져있는데, 따로 Github Pages에 도메인을 설정하지 않은 경우 URL 접두어를 선택합니다.  
선택 후에는 설명에 따라 인증을 진행합니다. ( 이전에 작성한 [anlytics]({{ site.base_url}}{{ page.previous.url }})를 진행하신 분은 바로 인증이 가능합니다. )

`Sitemaps` 탭으로 이동하여 새 사이트맵에 생성한 sitemap.xml URL을 입력하여 제출합니다.

제출에 성공한 경우 정상적으로 완료된 것 입니다.