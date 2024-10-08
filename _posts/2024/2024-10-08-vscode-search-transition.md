---
layout: post
tags: [develop, dev-etc]
image: /covers/algorithm.jpg
title: vscode 검색 결과 텍스트 변경 시 정규식 처리
author: minhyeong.jang
date: 2024-10-08 20:05
published: true
---

vscode에서 검색 후 방향키를 누르면 검색어에 대한 일괄 변경 기능이 지원된다.


![vscode Image]({{ site.image_post_url }}/2024/vscode-search-transition-1.png "vscode Image")

작업 중 .hideOverlay 함수에 대한 일괄 변경을 처리하려는데,  
a.hideOverlay, b.hideOverlay... 와 같이 앞에 붙어있는 문자가 모두 다른 상황에서는 단순 검색으로는 변경이 불가능하여 정규식 검색 후 그룹화하여 일괄 변경 처리를 진행했다.

우측위에 .* 아이콘을 클릭하여 정규식 검색을 활성화 후 검색어 및 수정단어에 정규식 처리하여 완료

```js
// 검색어 : (this\.[a-zA-Z]*)\.hideOverlay\(\);
// this부터 hideOverlay 앞의 값까지 모두 그룹화 지정
this.aaa.hideOverlay();
this.bbb.hideOverlay();

// 수정단어 : if($1) { $1.hideOverlay(); }
// 일괄 변경된 결과
if(this.aaa) { this.aaa.hideOverlay(); };
if(this.bbb) { this.bbb.hideOverlay(); };
```


![vscode Image]({{ site.image_post_url }}/2024/vscode-search-transition-1.png "vscode Image")