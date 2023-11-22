# 구글 메인 페이지 클론코딩

## 개요

- Styled-Component의 학습을 위해 Chrome 브라우저의 Google 페이지 클론 코딩
- 개발 기간 (2023.03 ~ 2023.03)

## 사용 기술

- React.js
- Styled-Component
- Recoil
- ES6+
- Vercel

## 구현 기능

### Modal 구현
- Modal을 직접 구현하며 부모 DOM으로 이벤트가 버블링됨을 막기 위해 stopPropagation 사용
- "바로가기 추가" 버튼 클릭 시 해당 Modal을 root 기준으로 배치하게 하기 위한 createPortal 사용

### Styled-Component 동적 사용
- Modal 컴포넌트의 display 값을 변수로 동적 컨트롤하게 하기 위해 Styled-Component에 props로 변수 전달
