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

    #### Day 2 (날짜)
- **작업 내용**:
    - 새로운 습관을 입력받는 'HabitForm.jsx' 컴포넌트 생성 (AI 활용)
- **Gemini CLI 사용 프롬프트 (예정)**:
    - `"Create a React functional component 'HabitForm.jsx' for 'src/components' using Tailwind. It needs an input field (type text) and a submit button ('Add Habit'). Use React's useState hook to manage the input value. When submitted, the form should call a (not-yet-implemented) 'addHabit' prop function with the new habit text."`
- **결과 및 수정사항**:
- **학습 내용**:
- **결과 및 수정사항**:
    - `HabitForm.jsx`가 프롬프트대로 `useState`를 포함하여 잘 생성됨.
    - `App.jsx`에 폼을 추가하고, 임시 `handleAddHabit` 함수를 연결하여 브라우저 콘솔에서 데이터 전달을 확인함.
- **학습 내용**:
    - AI에게 프롬프트로 prop 함수의 이름(`addHabit`)과 내부 로직(`useState`, `onSubmit`)을 명시하니, 거의 수정 없이 바로 사용 가능한 컴포넌트가 생성됨.

    #### Day 3 (날짜)
- **작업 내용**:
    - `App.jsx`에서 `useState`로 습관 목록 상태 관리 (State-lifting).
    - `HabitForm`이 새 습관을 상태에 추가(Create)하도록 로직 구현.
    - `HabitList`가 더미 데이터 대신 실제 습관 목록(Read)을 표시하도록 수정.
- **Gemini CLI 사용 프롬프트 (예정)**:
    - `"Refactor my 'src/App.jsx' file. I want to manage a list of habits using 'useState'. The 'useState' default value should be an array of objects like [{ id: 1, text: 'Read a book' }]. Modify the 'handleAddHabit' function to add a new habit object (with a unique id) to this state array. Pass the 'habits' state to 'HabitList' component as a prop."`
- **결과 및 수정사항**:
- **학습 내용**:
- **결과 및 수정사항**:
    - `gemini -p "..."` 프롬프트로 `App.jsx` 리팩토링 성공. `useState`로 상태 관리를 상위로 올림(state lifting).
    - `HabitList.jsx`도 AI의 도움을 받아 prop을 받도록 수정.
    - 폼(Create)과 목록(Read)이 `App.jsx`의 상태(`habits`)를 통해 성공적으로 연결됨.
- **학습 내용**:
    - AI 프롬프트를 통해 기존 파일(`App.jsx`) 전체를 리팩토링하는 것이 가능함을 확인.
    - React의 단방향 데이터 흐름(props 전달)과 상태 끌어올리기(state lifting)를 구현함.

    #### Day 4 (날짜)
- **작업 내용**:
    - `HabitList`의 각 항목에 '삭제' 버튼 추가 (AI 활용).
    - `App.jsx`에 `handleDeleteHabit` 함수 생성 (AI 활용).
    - '삭제' 버튼 클릭 시 해당 습관이 목록에서 제거되도록 구현 (D of CRUD).
- **Gemini CLI 사용 프롬프트 (예정)**:
    - `"Refactor 'src/App.jsx': Add a new function 'handleDeleteHabit(id)' that removes a habit from the 'habits' state array using the habit's id. Pass this function down to 'HabitList'."`
    - `"Refactor 'src/components/HabitList.jsx': It now receives 'handleDeleteHabit' prop. Inside the map function, add a 'Delete' button (Tailwind: bg-red-500, text-white) next to each habit text. When clicked, this button should call 'handleDeleteHabit(habit.id)'."`
- **결과 및 수정사항**:
- **학습 내용**:
- **결과 및 수정사항**:
    - Gemini CLI를 사용해 `App.jsx`에 `handleDeleteHabit` 함수를 성공적으로 추가함. (AI-refactored)
    - `HabitList.jsx`에도 'Delete' 버튼을 추가하고 `handleDeleteHabit` prop과 연결함. (AI-refactored)
    - 브라우저에서 삭제 기능이 정상 작동하는 것을 확인함 (CRUD의 D 완료).
- **학습 내용**:
    - AI 프롬프트로 기존 컴포넌트에 새 함수(prop)를 전달하고, 자식 컴포넌트에서 이를 `onClick` 이벤트에 연결하는 과정을 효율적으로 처리함.

    #### Day 5 (날짜)
- **작업 내용**:
    - `App.jsx` 리팩토링: `LocalStorage`와 `useEffect`를 사용해 습관 목록 영구 저장.
    - (1) 앱 로드 시 `LocalStorage`에서 데이터 불러오기.
    - (2) `habits` 상태 변경 시 `LocalStorage`에 자동 저장하기.
- **Gemini CLI 사용 프롬프트 (예정)**:
    - `"Refactor 'src/App.jsx'. I want to persist the 'habits' state to LocalStorage. 1. When the component mounts, load the habits from localStorage (key: 'habits'). Use 'useState' initial value to lazy load from localStorage or set to an empty array. 2. Use 'useEffect' to save the 'habits' state to localStorage (key: 'habits') whenever the 'habits' array changes. Keep all other functions (handleAdd, handleDelete) working."`
- **결과 및 수정사항**:
- **학습 내용**:
- **결과 및 수정사항**:
    - `App.jsx`가 `useEffect`와 `localStorage`를 사용하도록 성공적으로 리팩토링됨. (AI-refactored)
    - `useState`의 초기값으로 `localStorage.getItem`을 사용하고, `useEffect`의 의존성 배열(`[habits]`)을 사용해 `localStorage.setItem`이 올바르게 동작함.
    - 브라우저 새로고침 시 데이터가 유지되는 것을 확인함 (데이터 저장 요구사항 충족).
- **학습 내용**:
    - `useEffect` 훅을 사용하여 React 컴포넌트의 라이프사이클(마운트 시)과 상태 변경(업데이트 시)에 맞춰 `LocalStorage` 같은 Side Effect를 처리하는 방법을 배움.
    - `JSON.stringify`와 `JSON.parse`의 필요성을 확인함.

    #### Day 6 (날짜)
- **작업 내용**:
    - '수정(Edit)' 기능 구현 (U of CRUD).
    - 각 습관 항목에 'Edit' 버튼 추가.
    - 'Edit' 버튼 클릭 시, 텍스트를 입력 폼으로 변경.
    - (심화) 또는, 'Edit' 버튼 클릭 시 `HabitForm`을 재사용하여 수정 모드로 변경.
    - `App.jsx`에 `handleUpdateHabit` 함수 추가.
- **Gemini CLI 사용 프롬프트 (예정)**:
    - (가장 간단한 방법으로 `prompt()`를 사용해 보겠습니다)
    - `"Refactor 'src/App.jsx': Add a new function 'handleUpdateHabit(id, newText)' that updates the habit text for the given id in the 'habits' state. Pass this function to 'HabitList'."`
    - `"Refactor 'src/components/HabitList.jsx': It now receives 'handleUpdateHabit' prop. Add an 'Edit' button (Tailwind: bg-yellow-500) next to the 'Delete' button. When 'Edit' is clicked, use the browser's 'prompt()' to get new text (defaulting to 'habit.text'). If the user enters new text, call 'handleUpdateHabit(habit.id, newText)'."`
- **결과 및 수정사항**:
- **학습 내용**:
- **결과 및 수정사항**:
    - `App.jsx`에 `handleUpdateHabit` 함수를 성공적으로 추가함. (AI-refactored)
    - `HabitList.jsx`에 'Edit' 버튼을 추가하고 `window.prompt`를 이용해 수정 로직을 구현함. (AI-refactored)
    - 브라우저에서 수정 및 새로고침 테스트 완료 (CRUD의 U 및 데이터 저장 확인).
- **학습 내용**:
    - `window.prompt`를 사용해 간단하게 사용자 입력을 받아 Update 기능을 구현하는 방법을 배움.
    - CRUD 4가지 기능과 LocalStorage 연동이 모두 완료됨.

    #### Day 7 (날짜)
- **작업 내용**:
    - 반응형 웹 디자인 적용 (모바일/데스크톱 호환).
    - `App.jsx`의 메인 컨테이너에 `max-width` 적용 (모바일에서는 꽉 차게, 데스크톱에서는 중앙 정렬).
    - `HabitList.jsx`의 버튼들이 모바일 화면에서 너무 커지지 않게 조정.
- **Gemini CLI 사용 프롬프트 (예정)**:
    - `"Refactor 'src/App.jsx': Apply responsive design using Tailwind. The main <div> should be full width on mobile (default) but have a 'max-w-lg' (max-width large) and 'mx-auto' (margin auto) on medium screens ('md:') and up. Keep the 'p-4'."`
    - `"Refactor 'src/components/HabitForm.jsx': Make the input and button stack vertically on mobile (default) but appear side-by-side ('flex-row') on small screens ('sm:') and up. The button should have a width of 'w-full' on mobile and 'w-auto' on 'sm:'."`
- **결과 및 수정사항**:
- **학습 내용**:
- **결과 및 수정사항**:
    - `App.jsx`와 `HabitForm.jsx`에 Tailwind CSS의 반응형 클래스(`md:`, `sm:`)를 AI 프롬프트로 성공적으로 적용함. (AI-refactored)
    - 브라우저 개발자 도구의 모바일 뷰로 테스트 완료. (반응형 웹 디자인 요구사항 충족)
- **학습 내용**:
    - Tailwind CSS의 'mobile-first' 접근 방식(기본이 모바일, `sm:` 이상이 데스크톱)을 이해함.
    - AI 프롬프트로 복잡한 반응형 레이아웃(flex-col -> sm:flex-row)을 생성할 수 있음을 확인.