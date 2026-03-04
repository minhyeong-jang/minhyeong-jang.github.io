---
layout: index
author: minhyeong.jang
---

<style>
/* Fix: Tailwind preflight disabled - need border base reset */
.font-sans *, .font-sans ::before, .font-sans ::after {
  border-style: solid;
  border-width: 0;
  border-color: #e5e7eb;
}
/* Fix: Override parent .reponsive-content element styles */
#post-content .reponsive-content .font-sans ul,
#post-content .reponsive-content .font-sans ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
#post-content .reponsive-content .font-sans li {
  padding: 0;
  list-style: none;
}
#post-content .reponsive-content .font-sans p {
  margin: 0;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  letter-spacing: normal;
}
#post-content .reponsive-content .font-sans a {
  font-weight: inherit;
  text-decoration: none;
  color: inherit;
}
/* Custom bullet */
.bullet { position: relative; padding-left: 16px; }
.bullet::before { content: ""; position: absolute; left: 0; top: 12px; width: 5px; height: 5px; border-radius: 50%; background: #d1d5db; }
</style>

<div class="font-sans">

<h1 class="text-[32px] font-bold text-gray-900 mb-2">장민형 <span class="text-xl font-normal text-gray-400 ml-1.5">Doriri</span></h1>

<div class="mb-14">
<p class="text-[16px] leading-7 text-gray-500 mb-1.5">안녕하세요, 프로덕트 개발자 장민형입니다.</p>
<p class="text-[16px] leading-7 text-gray-500 mb-1.5">프로덕트를 개발하면서 기획부터 QA까지 <span class="text-point font-semibold">함께 참여하고 문제를 해결하는 팀 문화</span>를 선호하고 있습니다.<br>오너십을 가지고 <span class="text-point font-semibold">문제나 개선사항을 스스로 제시하고 개선하는 분들</span>과 함께 일하고 싶습니다.</p>
<p class="text-[16px] leading-7 text-gray-500">회사의 성장에 보람을 느끼며 팀원들과 함께 나아가려고 합니다.</p>
</div>

<div class="text-[15px] font-bold uppercase tracking-widest text-point border-b-2 border-point inline-block pb-2 mb-6">Experience</div>

<div class="divide-y divide-gray-100">

<div class="flex flex-col md:flex-row py-6">
<div class="md:w-[210px] md:shrink-0 md:pr-6 mb-3 md:mb-0">
<span class="block text-xl font-bold text-gray-900 mb-0.5">캐노피</span>
<span class="block text-[15px] text-gray-500">Product Developer</span>
<span class="block text-sm text-gray-400 mt-0.5">2025.04 ~ current</span>
</div>
<div class="flex-1 min-w-0">
<ul class="space-y-2">
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">React</span>시드 스타트업 초기 멤버로 프로덕트 설계 및 개발</li>
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">Data</span>데이터 수집 및 문제 분석, 해결 방안 제시</li>
</ul>
</div>
</div>

<div class="flex flex-col md:flex-row py-6">
<div class="md:w-[210px] md:shrink-0 md:pr-6 mb-3 md:mb-0">
<span class="block text-xl font-bold text-gray-900 mb-0.5">무신사</span>
<span class="block text-[15px] text-gray-500">Frontend Developer</span>
<span class="block text-sm text-gray-400 mt-0.5">2022.09 ~ 2025.03</span>
</div>
<div class="flex-1 min-w-0">
<ul class="space-y-2">
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">React</span>파트너 어드민 및 파트너 앱 프론트 초기 설계 및 개발</li>
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">React</span>WMS, OMS 서비스 개발 및 유지보수</li>
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">React</span>운영효율화 설계 및 개발</li>
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">Data</span>데이터 분석 및 대시보드 도입, 데이터 기반 기능 개선 (GA, Amplitude, Datadog)</li>
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">Electron</span>POS 클라이언트 Electron 개발, KIS / Nice 연동</li>
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">29CM</span>선물하기 회원/비회원 주문서 개편, 선물 홈·선물함 신규 개발, 1:1 문의·리뷰 개선</li>
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">Lead</span>프론트엔드 파트장으로 설계 및 코드 리뷰 주도</li>
</ul>
</div>
</div>

<div class="flex flex-col md:flex-row py-6">
<div class="md:w-[210px] md:shrink-0 md:pr-6 mb-3 md:mb-0">
<span class="block text-xl font-bold text-gray-900 mb-0.5">스타일쉐어</span>
<span class="block text-[15px] text-gray-500">Frontend Developer</span>
<span class="block text-sm text-gray-400 mt-0.5">2020.4 ~ 2022.8</span>
</div>
<div class="flex-1 min-w-0">
<ul class="space-y-2">
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">React</span><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">Next.js</span>스타일쉐어 Web / Mobile / Webview 개발</li>
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">React</span>검색, 상품, 주문서, 선물 요청하기 등 커머스 B2C 개발</li>
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">React</span>사내 / 파트너 어드민 B2B 개발</li>
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">React</span>정산, 통계, 스타일쉐어 아카이브 TF 참여</li>
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">React</span>커머스 신사업 MVP 개발</li>
</ul>
</div>
</div>

<div class="flex flex-col md:flex-row py-6">
<div class="md:w-[210px] md:shrink-0 md:pr-6 mb-3 md:mb-0">
<span class="block text-xl font-bold text-gray-900 mb-0.5">두나무</span>
<span class="block text-[15px] text-gray-500">Web Developer</span>
<span class="block text-sm text-gray-400 mt-0.5">2019.7 ~ 2020.4</span>
</div>
<div class="flex-1 min-w-0">
<ul class="space-y-2">
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">React</span>증권방송 서비스 동영상 플레이어 및 채팅 개발</li>
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">React</span>다음 금융 모바일 프론트 유지보수</li>
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">React</span>업비트 관리자 페이지 유지보수</li>
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">Ruby on Rails</span>차트 서비스 관리자 페이지 개발</li>
</ul>
</div>
</div>

<div class="flex flex-col md:flex-row py-6">
<div class="md:w-[210px] md:shrink-0 md:pr-6 mb-3 md:mb-0">
<span class="block text-xl font-bold text-gray-900 mb-0.5">플레이오토</span>
<span class="block text-[15px] text-gray-500">Web Developer</span>
<span class="block text-sm text-gray-400 mt-0.5">2017.6 ~ 2019.7</span>
</div>
<div class="flex-1 min-w-0">
<ul class="space-y-2">
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">AngularJS</span><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">Node.js</span>쇼핑몰 관리 솔루션 Frontend / Backend 개발</li>
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">Node.js</span><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">Puppeteer</span>쇼핑몰 관리 자동화 엔진 개발</li>
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">React</span><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">Redux</span>티켓 관리 솔루션 Frontend 개발</li>
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">Node.js</span>상품, 주문, 문의 수집 API 구현</li>
</ul>
</div>
</div>

<div class="flex flex-col md:flex-row py-6">
<div class="md:w-[210px] md:shrink-0 md:pr-6 mb-3 md:mb-0">
<span class="block text-xl font-bold text-gray-900 mb-0.5">후퍼소프트</span>
<span class="block text-[15px] text-gray-500">Web Developer</span>
<span class="block text-sm text-gray-400 mt-0.5">2016.8 ~ 2017.6</span>
</div>
<div class="flex-1 min-w-0">
<ul class="space-y-2">
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">PHP (Laravel)</span>해피엔딩, LiveSEM, 쿱스코리아 등 12개 이상 프로젝트 참여</li>
</ul>
</div>
</div>

<div class="flex flex-col md:flex-row py-6">
<div class="md:w-[210px] md:shrink-0 md:pr-6 mb-3 md:mb-0">
<span class="block text-xl font-bold text-gray-900 mb-0.5">아키텍트그룹</span>
<span class="block text-[15px] text-gray-500">Technical Support</span>
<span class="block text-sm text-gray-400 mt-0.5">2015.8 ~ 2016.4</span>
</div>
<div class="flex-1 min-w-0">
<ul class="space-y-2">
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">JavaScript</span>ALM(JIRA, codeBeamer) 기술지원 및 HighChart Plugin 개발</li>
<li class="bullet text-base leading-7 text-gray-600"><span class="inline-block text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded mr-1.5 align-baseline">Support</span>외부 세미나 강의 및 QA, 기술 지원</li>
</ul>
</div>
</div>

</div>

<div class="mt-14">
<div class="text-[15px] font-bold uppercase tracking-widest text-point border-b-2 border-point inline-block pb-2 mb-6">Projects</div>
</div>

<div class="text-sm font-bold text-gray-500 uppercase tracking-wider mb-5">Side Projects</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">

<div class="border border-gray-200 rounded-lg p-6">
<div class="text-[19px] font-bold text-gray-900">Naran(나란)</div>
<div class="text-[13px] text-gray-400 mt-1 mb-3">2026.02 ~ current</div>
<p class="text-[15px] leading-8 text-gray-500">모임 후 복잡한 정산을 간편하게 처리하는 더치페이 계산기. 참여자별 금액 입력과 송금 안내까지 한 번에 해결</p>
<div class="flex flex-wrap gap-1.5 mt-6">
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">React</span>
</div>
</div>

<a href="{{ site.baseurl }}/2026/03/03/project-notion-widgets" class="block border border-gray-200 rounded-lg p-6 hover:border-point/40 transition-colors">
<div class="flex items-center justify-between">
<span class="block text-[19px] font-bold text-gray-900">Notion Widgets</span>
<svg class="w-4 h-4 text-point/50 shrink-0 ml-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"/></svg>
</div>
<div class="text-[13px] text-gray-400 mt-1 mb-3">2026.03 ~ current</div>
<p class="text-[15px] leading-8 text-gray-500">가입 없이 URL 쿼리 파라미터만으로 위젯을 커스터마이즈하여 Notion에 바로 임베드할 수 있는 서비스. URL이 설정의 Single Source of Truth 역할을 하여 공유만으로 동일한 위젯을 재현 가능</p>
<div class="flex flex-wrap gap-1.5 mt-6">
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">Next.js</span>
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">TypeScript</span>
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">Tailwind CSS</span>
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">Turborepo</span>
</div>
</a>

<a href="{{ site.baseurl }}/2026/02/22/project-kakao-together-extension" class="block border border-gray-200 rounded-lg p-6 hover:border-point/40 transition-colors">
<div class="flex items-center justify-between">
<span class="block text-[19px] font-bold text-gray-900">카카오같이가치 크롬 익스텐션</span>
<svg class="w-4 h-4 text-point/50 shrink-0 ml-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"/></svg>
</div>
<div class="text-[13px] text-gray-400 mt-1 mb-3">2026.02</div>
<p class="text-[15px] leading-8 text-gray-500">카카오 사회공헌 플랫폼의 좋아요/댓글 기부 참여를 자동화하는 크롬 익스텐션. Manifest V3 환경에서 declarativeNetRequest API로 CORS 문제를 해결</p>
<div class="flex flex-wrap gap-1.5 mt-6">
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">Chrome Extension</span>
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">React</span>
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">Vite</span>
</div>
</a>

<a href="{{ site.baseurl }}/2022/03/11/project-ss-groupware-extension" class="block border border-gray-200 rounded-lg p-6 hover:border-point/40 transition-colors">
<div class="flex items-center justify-between">
<span class="block text-[19px] font-bold text-gray-900">그룹웨어 로그인 플러그인</span>
<svg class="w-4 h-4 text-point/50 shrink-0 ml-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"/></svg>
</div>
<div class="text-[13px] text-gray-400 mt-1 mb-3">2022.03</div>
<p class="text-[15px] leading-8 text-gray-500">그룹웨어 QR코드 2차 인증을 자동화하는 크롬 익스텐션. 비개발자도 원클릭으로 인증할 수 있도록 구현하여 사내 생산성 향상에 기여</p>
<div class="flex flex-wrap gap-1.5 mt-6">
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">Chrome Extension</span>
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">JavaScript</span>
</div>
</a>

<a href="{{ site.baseurl }}/2022/01/02/project-ss-groupware" class="block border border-gray-200 rounded-lg p-6 hover:border-point/40 transition-colors">
<div class="flex items-center justify-between">
<span class="block text-[19px] font-bold text-gray-900">그룹웨어 간편화 웹페이지</span>
<svg class="w-4 h-4 text-point/50 shrink-0 ml-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"/></svg>
</div>
<div class="text-[13px] text-gray-400 mt-1 mb-3">2022.00</div>
<p class="text-[15px] leading-8 text-gray-500">회사 합병 후 복잡해진 출퇴근/법인카드 등록 프로세스를 모바일에서 간편하게 처리할 수 있도록 구축. AWS Lightsail에 배포하여 사내 서비스로 운영</p>
<div class="flex flex-wrap gap-1.5 mt-6">
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">Next.js</span>
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">Node.js</span>
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">AWS Lightsail</span>
</div>
</a>

<div class="border border-gray-200 rounded-lg p-6">
<div class="text-[19px] font-bold text-gray-900">Dutch Pay</div>
<div class="text-[13px] text-gray-400 mt-1 mb-3">2021.03 ~ 2024.01</div>
<p class="text-[15px] leading-8 text-gray-500">모임 후 복잡한 정산을 간편하게 처리하는 더치페이 계산기. 참여자별 금액 입력과 송금 안내까지 한 번에 해결</p>
<div class="flex flex-wrap gap-1.5 mt-6">
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">React</span>
</div>
</div>

<div class="border border-gray-200 rounded-lg p-6">
<div class="text-[19px] font-bold text-gray-900">Interv</div>
<div class="text-[13px] text-gray-400 mt-1 mb-3">2021.00</div>
<p class="text-[15px] leading-8 text-gray-500">면접 준비를 위한 질문 관리 및 모의 면접 서비스. 직무별 예상 질문을 정리하고 답변을 연습할 수 있는 웹 앱</p>
<div class="flex flex-wrap gap-1.5 mt-6">
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">React</span>
</div>
</div>

<div class="border border-gray-200 rounded-lg p-6">
<div class="text-[19px] font-bold text-gray-900">Doriri Blog</div>
<div class="text-[13px] text-gray-400 mt-1 mb-3">2019.00 ~ current</div>
<p class="text-[15px] leading-8 text-gray-500">Jekyll 기반 기술 블로그. 카카오 기술 블로그를 참고하여 직접 설계 및 구축하고, 서버 비용 없이 GitHub Pages로 운영 중</p>
<div class="flex flex-wrap gap-1.5 mt-6">
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">Jekyll</span>
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">GitHub Pages</span>
</div>
</div>

<a href="{{ site.baseurl }}/2017/11/10/project-lunchbox-jandi" class="block border border-gray-200 rounded-lg p-6 hover:border-point/40 transition-colors">
<div class="flex items-center justify-between">
<span class="block text-[19px] font-bold text-gray-900">점심 메뉴 사이트</span>
<svg class="w-4 h-4 text-point/50 shrink-0 ml-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"/></svg>
</div>
<div class="text-[13px] text-gray-400 mt-1 mb-3">2017.11</div>
<p class="text-[15px] leading-8 text-gray-500">사내 점심 배달 주문을 웹으로 전환한 서비스. 메뉴 스크래핑으로 DB를 구축하고, 주문/결제자 지정/정산 기능까지 구현하여 사내 배달 문화를 개선</p>
<div class="flex flex-wrap gap-1.5 mt-6">
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">PHP</span>
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">Jandi Webhook</span>
</div>
</a>

</div>

<div class="text-sm font-bold text-gray-500 uppercase tracking-wider mb-5">Freelance & Part-time</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-5">

<div class="border border-gray-200 rounded-lg p-6">
<div class="text-[19px] font-bold text-gray-900">아티스트-팬 소통 SNS</div>
<div class="text-[13px] text-gray-400 mt-1 mb-3">2024.06 ~ 2025.12</div>
<p class="text-[15px] leading-8 text-gray-500">아티스트와 팬 간 실시간 소통이 가능한 SNS 서비스. 피드, DM, 알림 등 소셜 기능을 풀스택으로 구축</p>
<div class="flex flex-wrap gap-1.5 mt-6">
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">Next.js</span>
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">Node.js</span>
</div>
</div>

<div class="border border-gray-200 rounded-lg p-6">
<div class="text-[19px] font-bold text-gray-900">시간관리 앱</div>
<div class="text-[13px] text-gray-400 mt-1 mb-3">0000.00</div>
<p class="text-[15px] leading-8 text-gray-500">일정 및 시간 추적 앱의 웹뷰 연동 개발 및 서비스 유지보수. 네이티브-웹 간 브릿지 통신 처리</p>
<div class="flex flex-wrap gap-1.5 mt-6">
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">Next.js</span>
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">React Native</span>
</div>
</div>

<div class="border border-gray-200 rounded-lg p-6">
<div class="text-[19px] font-bold text-gray-900">간호사 SNS 커뮤니티</div>
<div class="text-[13px] text-gray-400 mt-1 mb-3">0000.00</div>
<p class="text-[15px] leading-8 text-gray-500">간호사 대상 정보 공유 및 네트워킹 커뮤니티 서비스. 게시판, 프로필, 알림 기능 유지보수</p>
<div class="flex flex-wrap gap-1.5 mt-6">
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">React</span>
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">React Native</span>
</div>
</div>

<div class="border border-gray-200 rounded-lg p-6">
<div class="text-[19px] font-bold text-gray-900">X세대 커머스 플랫폼</div>
<div class="text-[13px] text-gray-400 mt-1 mb-3">0000.00</div>
<p class="text-[15px] leading-8 text-gray-500">중장년층 타겟 커머스 서비스의 웹앱 유지보수. Capacitor 기반 하이브리드 앱으로 네이티브 배포</p>
<div class="flex flex-wrap gap-1.5 mt-6">
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">React</span>
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">Capacitor</span>
</div>
</div>

<div class="border border-gray-200 rounded-lg p-6">
<div class="text-[19px] font-bold text-gray-900">학생 원격교육 서비스</div>
<div class="text-[13px] text-gray-400 mt-1 mb-3">0000.00</div>
<p class="text-[15px] leading-8 text-gray-500">학생 대상 원격 수업 플랫폼의 프론트엔드 유지보수. 실시간 강의, 과제 제출, 출석 관리 기능</p>
<div class="flex flex-wrap gap-1.5 mt-6">
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">React</span>
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">React Native</span>
</div>
</div>

<div class="border border-gray-200 rounded-lg p-6">
<div class="text-[19px] font-bold text-gray-900">코로나 감정 공유 SNS</div>
<div class="text-[13px] text-gray-400 mt-1 mb-3">0000.00</div>
<p class="text-[15px] leading-8 text-gray-500">코로나 시기 사람들의 일상과 감정을 기록하고 공유하는 SNS 서비스. 피드 및 감정 태깅 기능을 구축</p>
<div class="flex flex-wrap gap-1.5 mt-6">
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">React</span>
<span class="text-sm font-semibold text-point bg-point/10 px-2 py-0.5 rounded">Node.js</span>
</div>
</div>

</div>

</div>
