export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  stack: string[];
  bullets: string[];
}

export const experience: Experience[] = [
  {
    company: "캐노피",
    role: "Product Developer",
    period: "2025.04 — present",
    location: "Seoul",
    stack: ["React Native", "Next.js", "TypeScript", "Tailwind"],
    bullets: [
      "모바일 앱 신규 개발 및 iOS/Android 출시, WebView-Native 브릿지 설계, 소셜 로그인 4종 SDK 연동",
      "B2B/D2C 서비스, 마케팅 웹사이트, 파트너 포털, 어드민 총 5개 앱 설계 및 개발",
      "개인고객 서비스 전체 플로우 설계 및 론칭 (온보딩 → 건강보험 인증 → CMS 자동이체 → 인출 → 상환)",
      "멀티 테넌트 아키텍처 설계, 대교 파일럿 프로젝트 온보딩/복지몰/임금채권 시스템 리드",
      "UI 패키지 구축 (Typography, Card, BottomSheet) 및 Storybook 문서화, 홈 슬롯 시스템",
      "신분증 OCR 시스템 개발 (Claude Vision 서버 처리), GEO 최적화 (노션 FAQ 자동 생성 + JSON-LD)",
      "Amplitude·AppsFlyer 도입, 이벤트 택소노미 설계, 이벤트 스펙 자동 생성 시스템 구축",
      "시드 스타트업 초기 멤버로 프로덕트 설계부터 100+ 릴리즈 배포까지 전 과정 주도",
    ],
  },
  {
    company: "무신사",
    role: "Frontend Developer",
    period: "2022.09 — 2025.03",
    location: "Seoul",
    stack: ["React", "Electron", "TypeScript"],
    bullets: [
      "파트너 어드민 및 파트너 앱 프론트 초기 설계 및 개발",
      "WMS, OMS 서비스 개발 및 유지보수",
      "운영효율화 설계 및 개발",
      "데이터 분석 및 대시보드 도입, 데이터 기반 기능 개선 (GA, Amplitude, Datadog)",
      "POS 클라이언트 Electron 개발, KIS / Nice 연동",
      "선물하기 회원/비회원 주문서 개편, 선물 홈·선물함 신규 개발, 1:1 문의·리뷰 개선",
      "프론트엔드 파트장으로 설계 및 코드 리뷰 주도",
    ],
  },
  {
    company: "스타일쉐어",
    role: "Frontend Developer",
    period: "2020.04 — 2022.08",
    location: "Seoul",
    stack: ["React", "Next.js"],
    bullets: [
      "스타일쉐어 Web / Mobile / Webview 개발",
      "검색, 상품, 주문서, 선물 요청하기 등 커머스 B2C 개발",
      "사내 / 파트너 어드민 B2B 개발",
      "정산, 통계, 스타일쉐어 아카이브 TF 참여",
      "커머스 신사업 MVP 개발",
    ],
  },
  {
    company: "두나무",
    role: "Web Developer",
    period: "2019.07 — 2020.04",
    location: "Seoul",
    stack: ["React", "Ruby on Rails"],
    bullets: [
      "증권방송 서비스 동영상 플레이어 및 채팅 개발",
      "다음 금융 모바일 프론트 유지보수",
      "업비트 관리자 페이지 유지보수",
      "차트 서비스 관리자 페이지 개발",
    ],
  },
  {
    company: "플레이오토",
    role: "Web Developer",
    period: "2017.06 — 2019.07",
    location: "Seoul",
    stack: ["AngularJS", "Node.js", "React", "Redux", "Puppeteer"],
    bullets: [
      "쇼핑몰 관리 솔루션 Frontend / Backend 개발",
      "쇼핑몰 관리 자동화 엔진 개발",
      "티켓 관리 솔루션 Frontend 개발",
      "상품, 주문, 문의 수집 API 구현",
    ],
  },
  {
    company: "후퍼소프트",
    role: "Web Developer",
    period: "2016.08 — 2017.06",
    location: "Seoul",
    stack: ["PHP (Laravel)"],
    bullets: [
      "해피엔딩, LiveSEM, 쿱스코리아 등 12개 이상 프로젝트 참여",
    ],
  },
  {
    company: "아키텍트그룹",
    role: "Technical Support",
    period: "2015.08 — 2016.04",
    location: "Seoul",
    stack: ["JavaScript"],
    bullets: [
      "ALM(JIRA, codeBeamer) 기술지원 및 HighChart Plugin 개발",
      "외부 세미나 강의 및 QA, 기술 지원",
    ],
  },
];
