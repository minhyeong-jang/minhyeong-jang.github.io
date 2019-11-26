---
layout: post
title: 'Intellij + gradle 프로젝트 불러오기'
author: minhyeong.jang
date: 2018-06-20 16:56
tags: [java, gradle, spring]
image: /files/covers/wordpress.png
permalink: /blog/
---
### 들어가며
`IntelliJ 에서 spring + gradle 프로젝트를 import` 합니다.

[spring 설치](https://spring.io/tools/sts/all) `)`<br/>
스프링 설치 사이트에서 dmg 파일 설치 및 STS 파일 Applications 폴더로 이동

[JDK 설치](https://www.oracle.com/technetwork/java/javase/downloads/index.html)






command + d : drag 된 문자열 다음 커서 복사

command + shift + l : drag 된 문자열 전체 커서 복사

command + option + shift + 위/아래 : 커서 추가

Multi cursor improvements
Ctrl+D selects next occurrence of word under cursor or of the current selection
Ctrl+K Ctrl+D moves last added cursor to next occurrence of word under cursor or of the current selection
The commands use matchCase by default. If the find widget is open, then the find widget settings (matchCase / matchWholeWord) will be used for determining the next occurrence
Ctrl+U undoes the last cursor action, so if you added a cursor too many or made a mistake, you can press Ctrl+U to go back to the previous cursor state. Adding cursor up or down (Ctrl+Alt+Up / Ctrl+Alt+Down) now reveals the last added cursor to make it easier to work with multiple cursors on more than 1 viewport height at a time (i.e. select 300 lines and only 80 fit in the viewport).



### 가입형 ( [wordpress.com](wordpress.com) )
`워드프레스가 제공하는 서버 및 DB를 사용하여 웹사이트를 구축합니다.`<br/>
무료를 포함하여 요금제에 따라 성능이 달라집니다.

![wordpress.com](/files/wordpress-info-1.png)
<img-info>wordpress 가입형 페이지</img-info>

#### - 장점

 - `서버 및 DB 환경이 기본적으로 제공`되어 간편하게 사용이 가능합니다.
 - `무료 사용`이 가능합니다.
 - `속도`가 빠릅니다.
 - `서버관리 및 보안`에 신경쓰지 않아도 됩니다.

#### - 단점
 - `워드프레스 규정`을 따라야합니다.
 - `플러그인 및 테마에 제약`이 있습니다.
 - `CSS 수정에 제약`이 있습니다.
 - `위 기능을 사용하기위해 요금제를 높이는 경우 많은 요금을 부과`해야합니다.

![wordpress.com](/files/wordpress-info-2.png)
<img-info>wordpress 가입형 요금</img-info>

### 설치형 ( [wordpress.org](wordpress.org) )
사용자가 `서버에 직접 워드프레스를 설치하여 웹사이트를 구축`합니다.<br/>
웹사이트 소유자이기 때문에 제약이 없습니다.

![wordpress.com](/files/wordpress-info-3.png)
<img-info>wordpress 설치형 페이지</img-info>

#### - 장점
 - `테마 및 플러그인을 설치하여 적용`이 가능합니다.
 - `모든 기능을 무료`로 사용합니다.

#### - 단점
 - `서버 호스팅 및 설치`해야하는 불편함이 있습니다.
 - `서버비용`이 지출됩니다.

### 주관적 생각
`번거롭더라도 설치형으로 진행하시는 것을 추천합니다.`

워드프레스로 블로그 또는 포트폴리오를 제작하는데 있어서,<br/>
`‘플러그인 및 테마, CSS’ 수정이 불가능한건 매우 크리티컬한 이슈`입니다.<br/>
워드프레스의 최대 장점중 하나인 `수많은 플러그인과 테마`를 사용하지 못한다면,<br/>
다른 블로그 서비스를 이용하는 것도 나쁘지 않습니다.<br/>
<br/>
또한, `가입형의 요금제보다 웹호스팅을 받아 운영하는것이 몇배의 비용절감`이 됩니다.<br/>
<br/>
따라서 저는 현재 블로그 또한 설치형으로 운영하고 있으며,<br/>
다음 포스팅으로 워드프레스 설치하기를 업로드 할 계획입니다.