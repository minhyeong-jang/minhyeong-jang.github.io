---
layout: post
tags: [dev-blog, dev-etc]
image: /covers/jekyll.png
title: "ERROR: Failed to build gem native extension."
author: minhyeong.jang
date: 2021-03-08 18:30
---

```bash
ERROR: Error installing jekyll-sitemap:
      ERROR: Failed to build gem native extension.
```

gem으로 jekyll 모듈을 설치하는 과정에서 다음과 같은 오류가 나타났다.  
검색해보니 xcode 관련 자료만 나오다가 해당 모듈이 사용 중인 jekyll 버전을 미지원하는 내용이 나왔다.

#### 해당 모듈의 버전 리스트를 검색한다.

```bash
gem list --remote --all jekyll-sitemap

*** REMOTE GEMS ***

jekyll-sitemap ( [versions] )
```

#### 지원하는 버전을 설치해보자.

```bash
sudo gem install jekyll-sitemap -v [version]

Successfully installed jekyll-sitemap-[version]
```

사용하려는 [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap)은 현재 jekyll 버전에서 v1.2.0까지만 지원한다고 한다.  
지원 여부를 깃헙에서 확인해 봤으면 됐을 텐데, 오류만 검색하다가 시간을 많이 소모했다.

---

이렇게 모듈을 설치하고 빌드하니 gem install을 실행하라고 한다.  
Gemfile.lock 파일을 삭제하지 않아 의존성 체크가 되었는데, 신기하게 gem install 하니 직접 설치할 때 오류 나던 jekyll-sitemap 1.4.0이 설치되었다.

lock 파일의 의존성은 알겠으나 yarn.lock 하고 좀 다르게 동작하는 느낌이다.  
아직 gem에 대한 이해가 부족해서 나온 이슈인데, 공부가 필요할 듯하다.

### 참고 자료

[understanding-the-gemfile-lock-file](https://stackoverflow.com/questions/7517524/understanding-the-gemfile-lock-file)

[https://stackoverflow.com/questions/4907668/removing-all-installed-gems-and-starting-over/49960935](https://stackoverflow.com/questions/4907668/removing-all-installed-gems-and-starting-over/49960935)
