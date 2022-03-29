---
layout: post
tags: [develop, dev-etc]
image: /covers/jekyll.png
title: Jekyll + Google Analytics 연동하기
author: minhyeong.jang
date: 2019-12-19 16:39
etc: jekyll
---

Google에서 제공하는 Google Analytics라는 툴을 사용하여 웹 로그를 분석할 수 있습니다.

Google Analytics는 앱 또는 웹의 이용자를 분석하여 통계로 제공해주고 있으며, 예로들어 방문 페이지, 이탈률, 세션 시간 등이 있습니다. 또한 Google Ads, Google Search Console 등 관련 서비스와 통합하여 확인할 수 있습니다.

## Google Analytics 설정

우선 [Google Analytics](https://analytics.google.com/)에 접속하여서 계정을 생성합니다.

계정은 여러개 생성이 가능하며, '속성 및 앱'에 페이지 별로 생성이 가능합니다. 저는 Blog라는 계정 하위에 Tistory, Github Page의 링크를 별도로 등록했습니다.

등록이 완료되면 `추적 코드`가 나타나게 되며, 해당 페이지에서 `추적 ID, 태그(js)`를 제공하고 있습니다.

> `추적 코드` 탭이 나타나지 않는다면, `좌측 하단 관리 -> 속성 -> 추적정보 -> 추적코드`로 이동합니다.

## Jekyll 설정

위에서 나온 js를 복붙하셔도 상관 없지만, 저같은 경우에 `_config.yml`에 추적 ID 값을 넣었습니다.

```yml
google_analytics_id: 추적 ID
```

그리고 analytics 파일을 생성하여 Google Analytics에서 제공하는 js를 삽입하고 추적 ID 값을 불러옵니다.  
아래 코드는 추적 ID 값을 \_config에서 가져오도록 수정한 코드입니다.

```html
<!-- analytics.html -->
{{ "{% if site.google_analytics_id " }}%}
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id={{ '{{ site.google_analytics_id '}}}}"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "{{ '{{ site.google_analytics_id '}}}}");
</script>
{{ "{% endif " }}%}
```

### default 페이지에서 include를 진행합니다.

```html
<!DOCTYPE html>
<html lang="kr">
  <head>
    {{ "{% include head.html " }}%} {{ "{% include analytics.html " }}%}
  </head>

  <body>
    {{ "{{% include header.html " }}%}
    <div class="body-wrap">
      {{ "{% include navbar.html " }}%}
      <div id="content-wrap">{{ "{{ content "}}}}</div>
    </div>
  </body>
</html>
```

jekyll 배포 후, 추적 코드 탭에서 제공하는 `테스트 트래픽 전송`을 사용하여 연동이 됐는지 확인합니다.

> analytics.html을 head에 import한 이유는 나중에 Google Search Console에서 홈페이지 소유권 확인 용도로 head를 인식하기 때문입니다.
