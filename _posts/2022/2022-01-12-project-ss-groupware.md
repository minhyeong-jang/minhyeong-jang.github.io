---
layout: project
tags: [project]
image: /projects/ss-groupware/4.png
title: 그룹웨어 간편화 웹페이지
author: minhyeong.jang
date: 2022-01-02 18:05
published: true
---

무신사 합병으로 기존 출퇴근과 법인카드 사용 방식이 변경되었고, 그룹웨어 페이지에 접속하여 수기 진행하는 방식으로 제공되었다.

그룹웨어의 출퇴근 방식은 PC로만 제공되어서 `모바일로 출퇴근이 불가능`했고, 노트북을 회사에 두고 다니는 사람들은 퇴근을 누르지않아 `회사로 복귀하는 상황이 지속적으로 발생`했다.

또한 법인카드 사용내역 등록 방식이 복잡해지면서 혼란이 가중되고 `직원들이 불편함을 호소`했다.

기존처럼 모바일로 출퇴근한다면 생산성이 올라가지 않을까하여 그룹웨어와 통신하는 웹페이지를 기획했다.

## 초기버전

프론트는 `Next.js로 Vercel로 배포`하였으며, 백엔드는 `Node.js`로 구성했다.  
백엔드는 서버에 배포했는데, `AWS Lightsail + Ubuntu 환경에 nginx`를 붙였다.

`SSH 셋팅`을 진행하고 `PM2`로 서비스를 관리했다. [( 참고 )](https://minhyeong-jang.github.io/2022/05/07/lightsail-server)

초기버전에서는 `출퇴근 기능과 법인카드 사용내역`을 포맷에 맞게 등록해주는 기능을 구현했다.

<img src="{{ site.image_url }}/projects/ss-groupware/1.png" alt="초기버전" style="width: 75%;" />

<img src="{{ site.image_url }}/projects/ss-groupware/2.png" alt="초기버전 법인카드" style="width: 75%;" />

사이트에서는 항상 로그인 계정을 입력받고 그룹웨어와 통신하여 데이터를 가져온다.

출퇴근과 법인카드는 직원들이 `가장 많이 접근하는 메뉴`이기 때문에 채널에 오픈 당시 많은 환영을 받았다.

## 기능 업그레이드

5월 포괄임금제 정책이 변경되면서 출퇴근 기록이 중요해졌고, 유저에게 더 의미있는 정보를 제공해보았다.  
다양한 `인사관리 프로그램을 참고`하여 어떤 정보를 제공하면 좋을까 고민하고 다음과 같이 UI를 변경했다.

<img src="{{ site.image_url }}/projects/ss-groupware/4.png" alt="UI 개선" style="width: 75%;" />

메인화면에서는 `출퇴근 시간`을 UI로 명확하게 보여주고, `휴가와 월간 근무 시간`을 합쳐서 보여준다.  
또한 `월간 정보`에는 출퇴근은 누락하지 않았는지 휴가처럼 `인사관련 정보`가 있는 지 보여주는 영역을 만들었다.

<img src="{{ site.image_url }}/projects/ss-groupware/5.png" alt="UI 개선 법인카드" style="width: 75%;" />

법인카드는 `가이드라인`을 만들어서 실제 상신까지 프로세스를 적어놓고 적요가 어떻게 등록되는 지 보여주었다.

## 결과

스타일쉐어 멤버 뿐 아니라 무신사, 29CM 직원도 사용 가능한 구조여서 `약 200명 이상`의 직원이 사용했고 현재 회사와 논의 후 서비스를 종료한 상태이다.

<img src="{{ site.image_url }}/projects/ss-groupware/6.png" alt="모바일화면" style="width: 50%;" />
<img-info>그룹웨어 모바일 페이지</img-info>
