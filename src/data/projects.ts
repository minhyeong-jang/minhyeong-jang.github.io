export interface Project {
  id: string;
  name: string;
  period: string;
  desc: string;
  stack: string[];
  type: "side" | "freelance";
  hasDetail: boolean;
  detailUrl?: string;
  thumbnail?: string;
}

export const sideProjects: Project[] = [
  {
    id: "akkida",
    name: "아끼다(Akkida)",
    period: "2026.05 — current",
    desc: "20대가 놓치고 있는 혜택을 영수증 스타일로 큐레이션하는 서비스. 카드 캐시백, 청년 지원금, 대학생 할인 등을 3초 만에 발견",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Turborepo"],
    type: "side",
    hasDetail: true,
    detailUrl: "/2026/05/01/project-akkida",
  },
  {
    id: "naran",
    name: "Naran(나란)",
    period: "2026.02 — current",
    desc: "모임 후 복잡한 정산을 간편하게 처리하는 더치페이 계산기. 참여자별 금액 입력과 송금 안내까지 한 번에 해결",
    stack: ["React"],
    type: "side",
    hasDetail: false,
  },
  {
    id: "notion-widgets",
    name: "Notion Widgets",
    period: "2026.03 — current",
    desc: "가입 없이 URL 쿼리 파라미터만으로 위젯을 커스터마이즈하여 Notion에 바로 임베드할 수 있는 서비스. URL이 설정의 Single Source of Truth 역할을 하여 공유만으로 동일한 위젯을 재현 가능",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Turborepo"],
    type: "side",
    hasDetail: true,
    detailUrl: "/2026/03/03/project-notion-widgets",
  },
  {
    id: "kakao-together-extension",
    name: "카카오같이가치 크롬 익스텐션",
    period: "2026.02",
    desc: "카카오 사회공헌 플랫폼의 좋아요/댓글 기부 참여를 자동화하는 크롬 익스텐션. Manifest V3 환경에서 declarativeNetRequest API로 CORS 문제를 해결",
    stack: ["Chrome Extension", "React", "Vite"],
    type: "side",
    hasDetail: true,
    detailUrl: "/2026/02/22/project-kakao-together-extension",
  },
  {
    id: "groupware-login-plugin",
    name: "그룹웨어 로그인 플러그인",
    period: "2022.03",
    desc: "그룹웨어 QR코드 2차 인증을 자동화하는 크롬 익스텐션. 비개발자도 원클릭으로 인증할 수 있도록 구현하여 사내 생산성 향상에 기여",
    stack: ["Chrome Extension", "JavaScript"],
    type: "side",
    hasDetail: true,
    detailUrl: "/2022/03/11/project-ss-groupware-extension",
  },
  {
    id: "groupware-web",
    name: "그룹웨어 간편화 웹페이지",
    period: "2022.00",
    desc: "회사 합병 후 복잡해진 출퇴근/법인카드 등록 프로세스를 모바일에서 간편하게 처리할 수 있도록 구축. AWS Lightsail에 배포하여 사내 서비스로 운영",
    stack: ["Next.js", "Node.js", "AWS Lightsail"],
    type: "side",
    hasDetail: true,
    detailUrl: "/2022/01/02/project-ss-groupware",
  },
  {
    id: "dutch-pay",
    name: "Dutch Pay",
    period: "2021.03 — 2024.01",
    desc: "모임 후 복잡한 정산을 간편하게 처리하는 더치페이 계산기. 참여자별 금액 입력과 송금 안내까지 한 번에 해결",
    stack: ["React"],
    type: "side",
    hasDetail: false,
  },
  {
    id: "interv",
    name: "Interv",
    period: "2021.00",
    desc: "면접 준비를 위한 질문 관리 및 모의 면접 서비스. 직무별 예상 질문을 정리하고 답변을 연습할 수 있는 웹 앱",
    stack: ["React"],
    type: "side",
    hasDetail: false,
  },
  {
    id: "doriri-blog",
    name: "Doriri Blog",
    period: "2017.12 — current",
    desc: "개인 기술 블로그. 카카오 기술 블로그를 참고해 Jekyll로 구축하고, 2026년 Astro로 전면 마이그레이션. 현재 AI 기반 자동화 중",
    stack: ["Astro", "React", "Tailwind CSS", "GitHub Pages"],
    type: "side",
    hasDetail: true,
    detailUrl: "/2017/12/05/project-doriri-blog",
    thumbnail: "/favicon.svg",
  },
  {
    id: "lunch-menu",
    name: "점심 메뉴 사이트",
    period: "2017.11",
    desc: "사내 점심 배달 주문을 웹으로 전환한 서비스. 메뉴 스크래핑으로 DB를 구축하고, 주문/결제자 지정/정산 기능까지 구현하여 사내 배달 문화를 개선",
    stack: ["PHP", "Jandi Webhook"],
    type: "side",
    hasDetail: true,
    detailUrl: "/2017/11/10/project-lunchbox-jandi",
  },
];

export const freelanceProjects: Project[] = [
  {
    id: "artist-fan-sns",
    name: "아티스트-팬 소통 SNS",
    period: "2024.06 — 2025.12",
    desc: "아티스트와 팬 간 실시간 소통이 가능한 SNS 서비스. 피드, DM, 알림 등 소셜 기능을 풀스택으로 구축",
    stack: ["Next.js", "Node.js"],
    type: "freelance",
    hasDetail: false,
  },
  {
    id: "time-management-app",
    name: "시간관리 앱",
    period: "—",
    desc: "일정 및 시간 추적 앱의 웹뷰 연동 개발 및 서비스 유지보수. 네이티브-웹 간 브릿지 통신 처리",
    stack: ["Next.js", "React Native"],
    type: "freelance",
    hasDetail: false,
  },
  {
    id: "nurse-sns-community",
    name: "간호사 SNS 커뮤니티",
    period: "—",
    desc: "간호사 대상 정보 공유 및 네트워킹 커뮤니티 서비스. 게시판, 프로필, 알림 기능 유지보수",
    stack: ["React", "React Native"],
    type: "freelance",
    hasDetail: false,
  },
  {
    id: "x-gen-commerce",
    name: "X세대 커머스 플랫폼",
    period: "—",
    desc: "중장년층 타겟 커머스 서비스의 웹앱 유지보수. Capacitor 기반 하이브리드 앱으로 네이티브 배포",
    stack: ["React", "Capacitor"],
    type: "freelance",
    hasDetail: false,
  },
  {
    id: "remote-education",
    name: "학생 원격교육 서비스",
    period: "—",
    desc: "학생 대상 원격 수업 플랫폼의 프론트엔드 유지보수. 실시간 강의, 과제 제출, 출석 관리 기능",
    stack: ["React", "React Native"],
    type: "freelance",
    hasDetail: false,
  },
  {
    id: "covid-emotion-sns",
    name: "코로나 감정 공유 SNS",
    period: "—",
    desc: "코로나 시기 사람들의 일상과 감정을 기록하고 공유하는 SNS 서비스. 피드 및 감정 태깅 기능을 구축",
    stack: ["React", "Node.js"],
    type: "freelance",
    hasDetail: false,
  },
];
