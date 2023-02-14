## Getting Started

### 1. 프로젝트 빌드하는 방법

```bash
npm run dev
npm run start
```

- npm run dev : 개발 모드에서 앱 실행
- npm start : 프로덕션 모드(배포모드)에서 앱 실행 (npm run start 사용하려면 먼저 npm build 실행 후 최적화 진행 후 실행해야함)

### 2. Cypress 빌드하는 방법

```bash
npm run cypress
```

- e2e 폴더 들어가기
- 1-getting-started 폴더 들어가기
- 원하는 파일 만들고 테스트 코드 작성
- npm run cypress

### 폴더 구조

Next.js 13 버전에 따라서 app 구조로 유지
pages 폴더를 app 컴포넌트 내부에 둠으로써 view, component 분리
(추후에 변경해도 상관없음)

### ESlint , Prettier

규칙을 어느정도 빡빡하지 않고 느슨하게 다시 정하고 rule 추가해야할 듯 함
(현재 간단하게 설정하였음)
