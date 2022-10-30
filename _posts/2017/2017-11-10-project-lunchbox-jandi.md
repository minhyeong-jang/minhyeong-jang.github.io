---
layout: post
tags: [project]
image: /projects/lunchbox/1.png
title: 점심 메뉴 사이트
author: minhyeong.jang
date: 2017-11-10 18:05
published: true
---

## 개요

플레이오토 입사 당시, 팀장님이 온보딩 기간 동안 만들고 싶은 것 있는지 찾아보라고 하셨다.  
당시 점심시간에 배달시켜먹는 채널이 있었는데, 배달 앱이 크게 활성화되어있지 않다 보니 채널에 메뉴판을 올리고 다른 사람들이 댓글 형식으로 먹고 싶은 메뉴를 이어 적는 형태였다.

해당 방식을 그대로 사이트 형태로 옮기는 작업을 진행했다.

## 가게와 메뉴 선정

먼저 자주 배달시키는 가게들 위주로 추가했다.  
체인점 같은 경우에는 `웹 페이지로 메뉴를 제공하다 보니 스크랩핑`해서 DB를 구성할 수 있었는데, 중국집같이 `전단지만 있는 경우에는 수동`으로 추가 후 제보받는 형식으로 진행했다.

<img src="{{ site.image_url }}/projects/lunchbox/1.png" alt="배너" style="width: 75%;" />

## 메뉴 선택과 주문

가게를 선택하면 메뉴를 고를 수 있는 방식이다.  
단순하게 마지막 주문하는 사람을 결제자로 지정하려고 했으나, 카드 실적 등 여러 사유로 결제하고 싶은 사람이 있어 선택사항으로 정산 받을 계좌번호를 입력할 수 있도록 처리했다.

결제하기는 한 명만 가능하며 이미 입력한 사람이 있다면 이후 사람들은 주문만 가능하다.

<img src="{{ site.image_url }}/projects/lunchbox/2.png" alt="배너" style="width: 75%;" />

주문 리스트와 별개로 Result라는 항목을 따로 만들었는데, 전화주문을 하다 보면 `주문자가 업체 연락처, 회사 주소를 찾아보고 음식 별 개수를 다시 정리하는 일`이 있어 해당 영역만 봐도 주문이 가능하도록 구현했다.

<img src="{{ site.image_url }}/projects/lunchbox/3.png" alt="배너" style="width: 75%;" />

<img src="{{ site.image_url }}/projects/lunchbox/4.png" alt="배너" style="width: 75%;" />

또한 결제자에게 송금을 완료한 경우 별도의 체크를 할 수 있도록 기능과 미송금자 알림이라는 기능을 넣었는데, 미송금자에게 따로 연락할 필요 없이 체크하지 않은 사람들에게 메시지를 보내도록 처리했다. ( 아래 JANDI Hook에서 추가 설명 )

<img src="{{ site.image_url }}/projects/lunchbox/5.png" alt="배너" style="width: 75%;" />

## JANDI Hook 연동

작업 당시 JANDI라는 국내 업무용 메신져를 사용하고 있었다.  
JANDI에서는 Hook 기능을 제공해 주고 있어 점심 사이트를 기존 배달 메뉴를 고르는 채널에 연동했다.

```php
  $actionUrls = array("https://wh.jandi.com/connect-api/webhook/XXXX/XXXXXX");
  $jandi->send2Jandi($actionUrls, '{"body":"'.implode("\\n", $msg).'"}');
```

채널에 해당하는 ID를 발급받고, body에 넘겨주는 방식으로 처리했었는데, send2Jandi 내부 함수 구현을 어떻게 했는지 기억이 안난다.  
제공해주는 문서가 있어서 그렇게 어렵지는 않았었다.

> JANDI에서는 마크다운을 지원하기 때문에 Code 블럭으로 감싸면 이쁘게 나왔다.

점심 사이트에 연동하는 기능은 `주문 시작, 주문 마감, 미송금자 알림`을 연동했었다.

주문 시작의 경우 마피아 게임 같은 느낌을 넣어봤다.

````php
  $msg = array();
  $msg[] = "[━━━━━━ 호토모토 ━━━━━━]";
  $msg[] = "```";
  $msg[] = "주문이 시작되었습니다.";
  $msg[] = "플레이어들은 메뉴를 선택해주세요.";
  $msg[] = "```";
````

`crontab을 돌리면서 오전 11시에 주문 마감 처리` 및 Result에 있는 정보를 채널로 전송했다.

마지막으로는 버튼 클릭 시 미송금자 및 송금 정보를 보내는 메시지다.

````php
  $msg[] = "[━━━━━━ 미송금자 정보 ━━━━━━]";
  $msg[] = "```";
  foreach($order_list as $k => $v){
    $price = number_format($v['price']);
    if(in_array($name,$_POST['names'])){
      $msg[] = "{$name} - {$menu} - {$price} 원";
    }
  }
  $msg[] = "";
  $msg[] = "{$name} - {$bank} {$order_payment['account_number']}";
  $msg[] = "```";
````

## 성과? 결과

온라인으로 메뉴를 주문하다 보니 채널에서 "같이 먹어도 될까요?" 등 `불필요한 커뮤니케이션이 존재하지 않다 보니 신입사원들도 부담 없이 참여`했다.  
점심시간 동안 `다양한 직군들과 커뮤니케이션`하는 문화가 구성되었으며, 약 20% 이상의 직원이 함께했다.
