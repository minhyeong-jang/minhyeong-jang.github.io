---
layout: post
tags: [develop, dev-etc]
image: /covers/jekyll.png
title: Jekyll Sitemap 직접 생성하기
author: minhyeong.jang
date: 2022-10-02 12:02
published: true
---

검색에서 사용하기 위한 sitemap을 등록할 때 jekyll-sitemap 플러그인을 사용하여 생성된 xml파일을 연결했었다.  
( [Jekyll Google Search Console 연동하기](https://minhyeong-jang.github.io/2019/12/19/jekyll-search-console) )

최근 블로그를 다시 정리하면서 Analytics를 보고있는데, 유효하지 않은 페이지들이 잡혀서 sitemap.xml 파일을 확인해보았고 `jekyll-sitemap에서 post 뿐만 아닌 layout과 같은 불필요한 디렉토리도 사이트맵에 추가`되고 있었다.

![Sitemap 파일]({{ site.image_post_url }}/2022/sitemap-create-1.png "생성된 sitemap.xml")
<img-info>Sitemap 파일</img-info>

## jekyll-sitemap Path 제외

jekyll-sitemap 문서에서는 특정 path를 제외하고 싶다면 아래와 같이 config의 defaults에 `sitemap: false`를 추가하라고 안내하고 있다.

```yml
defaults:
  - scope:
      path: "author"
    values:
      sitemap: false
```

다만 내 블로그에서는 글을 분리하기 위해 tag, category와 같은 `collections`을 추가한게 문제인지 category를 셋팅하면 \_categories + category path가 둘다 사라지고 pagination number가 path에 추가되는 등 `제대로 동작하지 않아서 직접 제작`하기로 했따.

## Sitemap 파일 만들기

Sitemap을 직접 생성하는건 생각보다 어렵지 않았다. 리스트를 그저 sitemap 형식에 맞게 출력해주면 될 뿐이다.

### 초기 셋팅

`!!모든 코드 설명에서 \는 지워주세요. md 파일에서도 렌더링돼서 어쩔 수 없네요.`

root에 sitemap 파일, posts를 형식에 맞게 출력할 레이아웃 파일을 만들었다.

```json
/sitemap.xml
/_includes
  /sitemap_item.xml
```

sitemap.xml은 아래와 같이 기본 틀을 구성한다.

```xml
---
layout: null
---
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    {\% for post in site.posts %}
      {\% assign post_path = site.url | append: post.url %}
      {\% include sitemap_item.xml url=post_path date=post.date %}
    {\% endfor %}
</urlset>
```

posts 렌더링 부분도 같이 작성했는데, layout으로 url과 date(작성일)을 보내도록 작업했다.

다음은 layout 영역이다.

```xml
<url>
  <loc>{\{ include.url }}</loc>
  {\% if include.date != "" %}
  <lastmod>{\{ include.date | date_to_xmlschema }}</lastmod>
  {\% else %}
  <lastmod>{\{ "now" | date_to_xmlschema }}</lastmod>
  {\% endif %}
</url>
```

`loc 영역에는 Post의 URL`, `lastmod 영역에는 작성일을 출력`하며 존재하지 않는 경우 `최종 배포일`로 설정되게 된다.

위와 같이 파일을 구성했다면 `post에 해당하는 sitemap이 생성`됐을 것이다.

그 외 tag, category, about 등의 페이지들은 방법이 있겠지만 `하드코딩하는게 가장 효율적`이여서 아래와 같이 마무리하고 끝냈다.

```xml
{\% assign about_path = site.url | append: "/about" %}
{\% assign contact_path = site.url | append: "/contact" %}

{\% include sitemap_item.xml url=site.url date="" %}
{\% include sitemap_item.xml url=about_path date="" %}
{\% include sitemap_item.xml url=contact_path date="" %}

{\% for category in site.categories %}
  {\% assign category_path = site.url | append: "/category/" | append: category.name %}
  {\% include sitemap_item.xml url=category_path date="" %}
{\% endfor %}

{\% for tag in site.tags %}
  {\% assign category_path = site.url | append: "/tags/" | append: tag.name %}
  {\% include sitemap_item.xml url=category_path date="" %}
{\% endfor %}
```
