---
layout: post
tags: [dev-blog, dev-etc]
image: /covers/jekyll.png
title: Jekyll + Disqus 연동하기
author: minhyeong.jang
date: 2019-12-12 14:52
etc: jekyll
---

Jekyll에서 Disqus를 연동하는 방법을 살펴보도록 하겠습니다.

## Disqus 설정

1. [Disqus 홈페이지](https://disqus.com/)에 접속해서 회원가입을 진행합니다.

2. 로그인 후 상단에 `Get Start -> I want to install Disqus on my site`를 선택합니다.

3. 정보를 입력 후 확인을 누른 후 `플랫폼 선택에서 jekyll`를 선택합니다.  
   ( 만약 화면이 나타나지 않는 경우, [admin](https://disqus.com/admin/) -> Settings -> Installation )

4. 설명 2번에 있는 `Universal Embed Code` 링크 클릭

5. 홈페이지 첫 동영상 밑에 있는 1번의 Disqus to load 코드를 post Layout에 추가합니다.  
   중간 주석 부분에는 `Disqus thread가 중복되어 생성되는 것을 방지하기 위해 page_url, identifier를 추가`하라고 적혀있습니다.  
   해당 부분은 아래와 같이 site 정보를 설정해주시면 됩니다.

   ```js
   this.page.url = "{{ site.url }}{{ site.baseurl }}{{ page.url }}"; // minhyeong-jang.github.com/doriri/2019/12/...
   this.page.identifier = "{{ page.url }}"; // /2019/12/...
   ```

6. 홈페이지에서 두번째 동영상 밑에 있는 count.js 스크립트를 body 맨 아래 선언하면 `댓글 수가 체크`됩니다.

적용 후 새로고침 하시면 로컬에서도 정상적으로 Disqus가 보이게 됩니다.
