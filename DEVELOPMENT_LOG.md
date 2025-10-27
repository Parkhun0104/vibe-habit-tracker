# 개발 일지

## 프로젝트 개요
- **프로젝트명**: Vibe Habit Tracker
- **개발 기간**: [오늘 날짜] ~ [마감 날짜]
- **목표**: Gemini CLI를 활용한 개인 맞춤형 습관 트래커 웹 앱 개발

## 개발 과정

### Week 1

#### Day 1 (오늘 날짜 입력)
- **작업 내용**:
    1. 프로젝트 기획 및 GitHub, Gemini CLI 초기 설정
    2. React + Tailwind CSS 환경 구축
    3. '습관 목록'을 표시할 기본 UI 컴포넌트 생성 (AI 활용)
- **Gemini CLI 사용 프롬프트 (예정)**:
    - `"Create a React functional component 'HabitList.jsx' using Tailwind CSS. It should display a list of dummy habits (e.g., 'Read a book', 'Exercise'). The component should have a title 'My Habits' in large font."`
- **결과 및 수정사항**:
    - (이 부분은 2번 항목을 실행한 *후에* 채워주세요.)
- **학습 내용**:
    - (이 부분은 2번 항목을 실행한 *후에* 채워주세요.)
    - **결과 및 수정사항**:
    - `HabitList.jsx`가 예상대로 생성됨. `App.jsx`에 수동으로 import하여 적용함.
    - 실행 중 `PostCSS` 관련 오류 발생. `npm install -D @tailwindcss/postcss`를 설치하고 `postcss.config.cjs` 파일에 `@tailwindcss/postcss`를 명시적으로 등록하여 해결함. (AI-assisted debugging)
- **학습 내용**:
    - 최신 Tailwind CSS는 PostCSS 플러그인으로 `@tailwindcss/postcss` 패키지를 명시적으로 요구함을 배움.