---
layout: post
tags: [develop, dev-etc]
image: /covers/jekyll.png
title: Jekyll Error Reports
author: minhyeong.jang
date: 2019-12-09 21:02
etc: jekyll
---

Jekyll을 사용하며 나타난 오류를 정리합니다.

## Scss Import Error + Tip

```bash
Conversion error: Jekyll::Converters::Scss encountered an error while converting 'assets/css/index.scss':
File to import not found or unreadable: filename. on line 1

Conversion error: Jekyll::Converters::Scss encountered an error while converting 'assets/css/index.scss':
Invalid CSS after "": expected selector, was "---" on line 1

Conversion error: Jekyll::Converters::Scss encountered an error while converting 'assets/css/index.scss':
Invalid CSS after "@import "theme"": expected "{", was ";" on line 3
```

scss 파일은 빌드 후 css + minify 형태로 제공해주기 때문에 head에서는 src="index.css" 형태로 작성하게 됩니다.
파일 수 만큼 css를 import하면 속도가 느려 `index.scss 파일 하나에서 모든 scss 파일을 import` 하는 방법으로 bundle 작업을 진행하는게 좋습니다.

jekyll은 scss에서 상단에 아래 문구가 적혀있으면 css로 빌드 작업을 진행합니다.

```bash
---
---
```

index.scss 파일에서만 위에 문구를 추가한 후 나머지 파일을 import 해줍니다.
만일 `index.scss에서 호출하는 scss 파일들은 상단에 --- 문구가 존재하면 에러가 나타납니다.`  
호출하기 위한 파일을 구분하기 위해 `_theme.scss` 처럼 파일명 앞에 `_`를 붙여줍니다.

scss 파일들을 `project/_sass/...` 경로에 생성하지 않은 경우, 별도의 config 설정이 필요합니다.

```bash
_config.yml

sass:
  style: compressed
  sass_dir: assets/css
```
