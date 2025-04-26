# GrowFit

## Table of Contents
- [소개](#소개)
- [기술 스택](#기술-스택)
- [폴더 구조](#폴더-구조)
- [기능](#기능)
- [설치 방법](#설치-방법)
- [사용 방법](#사용-방법)
- [기여](#기여)
- [라이센스](#라이센스)

## 소개
프로젝트에 대한 조금 더 자세한 소개 (왜 만들었는지, 어떤 문제를 해결하는지)

## 기술 스택
- Next.js
- TypeScript
- Zustand
- Tanstack Query

## 폴더구조
```
src/
├── app/                           # 앱의 주요 라우팅 및 페이지 관리
│   ├── (auth)/                    # 로그인, 회원가입 등 인증 관련 라우트 그룹
│   ├── (goal)/                    # 목표 설정과 관련된 라우트 그룹
│   ├── (mypage)/                  # 마이페이지와 관련된 라우트 그룹
│   ├── api/                       # 서버 API와 통신하는 라우트들
│   ├── error.tsx                  # 전역 에러 페이지
│   ├── favicon.ico                # 사이트 파비콘
│   ├── layout.tsx                 # 전역 레이아웃 관리
│   ├── loading.tsx                # 전역 로딩 페이지
│   └── page.tsx                   # 홈페이지
├── assets/                        # 이미지, 폰트, 아이콘 등 정적 리소스
├── components/                    # UI 컴포넌트
│   ├── common/                    # 공통적으로 사용되는 UI 컴포넌트
│   │   └── button/                # 버튼 컴포넌트
│   │       ├── button.module.scss # 버튼 스타일
│   │       ├── button.stories.tsx # 버튼 스토리북
│   │       └── index.tsx          # 버튼 컴포넌트
│   ├── features/                  # 특정 기능과 관련된 컴포넌트
│   └── layout/                    # 레이아웃 관련 컴포넌트 (헤더, 푸터 등)
├── hooks/                         # 커스텀 훅
├── lib/                           # 라이브러리 관련 코드
│   ├── constants/                 # 상수 관리 (불변 값)
│   └── utils/                     # 범용 유틸리티 함수
├── queries/                       # React Query 쿼리 함수
├── stores/                        # 상태 관리 (예: Zustand, Redux 등)
├── stories/                       # 스토리북 관련 파일들
├── styles/                        # 전역 스타일 설정 (CSS, SCSS, Tailwind 등)
└── types/                         # 타입스크립트 타입 정의 파일들
```