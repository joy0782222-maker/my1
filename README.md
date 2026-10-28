# ✈️ The Roam Report

> 여행 이야기와 사진을 모아 보여주는 **여행 블로그 웹사이트**
> 혼자 처음 만든 **반응형 웹사이트**예요.
> 화면 디자인은 [Figma 시안](https://sable-boil-40643239.figma.site/)을 참고했고, **코드는 HTML · CSS · JavaScript 전부 직접 작성**했어요.
> 시안을 그대로 옮기는 데서 그치지 않고, 디자인과 기능 일부를 직접 바꾸고 더해서 완성했어요.

<br>

## 📄 페이지 구성

| 페이지 | 파일 | 내용 |
|---|---|---|
| 🏠 Home | [`index.html`](./index.html) | 메인 소개, 흐르는 배너, 추천 글, 최신 스토리 카드, 다가오는 여행 일정 |
| 📰 Articles | [`articles.html`](./articles.html) | 전체 여행 스토리 목록 |
| 🙋 About | [`about.html`](./about.html) | 자기소개(About me)와 연락처(Contact) |

<br>

## ✨ 구현 기능

- **반응형 레이아웃** — 화면 크기에 맞춰 배치 변경 (`responsive.css`)
- **무한 흐르는 배너** — `TRAVEL MORE ✳ LIVE SLOW ✳ EXPLORE THE WORLD ✳`
- **스토리 카드 자동 생성** — 데이터 배열 + `<template>`로 카드 반복 출력 (`main.js`, `articles.js`) → [아래 설명](#-직접-고민하고-구현한-점)
- **맨 위로 가기 버튼** — 스크롤을 내리면 나타나고, 드래그로 위치도 옮길 수 있음 (`topBtn.js`) → [아래 설명](#-직접-고민하고-구현한-점)

<br>

## 🔧 직접 고민하고 구현한 점

### ⬆️ 맨 위로 가기 버튼 추가 (시안에 없던 기능)

**왜 넣었나**
메뉴(nav)가 페이지 맨 위에만 있어서, 아래로 많이 내려간 뒤에는 다시 올라가기가 불편하다고 느꼈어요.

**고민한 점**
버튼을 한 자리에 고정해두면
- 왼손 / 오른손 등 사용자가 주로 쓰는 손에 따라 누르기 불편할 수 있고
- 콘텐츠를 볼 때 버튼이 화면을 가려서 걸리적거릴 수 있다고 생각했어요.

**그래서 이렇게 만들었어요**
- 🫧 **반투명 + 블러 처리** — 평소에는 콘텐츠를 가리지 않도록 은은하게, 마우스를 올리면 선명하게
- ✋ **드래그로 위치 이동** — 사용자가 원하는 곳으로 직접 옮길 수 있게
- 🖱️ **드래그와 클릭 구분** — 옮기려고 끌었을 때는 맨 위로 이동하지 않도록 처리
- 📐 **화면 밖으로 안 나가게** — 창 크기가 바뀌어도 버튼이 화면 안에 머물도록 처리
- 👇 **스크롤 600px 이상 내려가면 등장** — 맨 위에 있을 때는 숨김

<br>

### 🗂️ 스토리 카드 자동 생성

**왜 이렇게 만들었나**
같은 모양의 카드를 HTML에 여러 번 복사해 붙이면, 글이 늘어날수록 코드가 길어지고 수정할 때마다 전부 고쳐야 해서 번거로워요.

**그래서 이렇게 만들었어요**
- 📋 글 정보(사진 · 날짜 · 제목 · 링크)를 **JS 배열 데이터**로 따로 관리
- 🧩 HTML에는 카드 **틀(`<template>`) 하나**만 두고
- 🔁 `forEach`로 배열을 돌면서 틀을 복사해 내용을 채워 화면에 출력
- ➕ 새 글을 추가할 때는 **배열에 한 줄만 넣으면** 카드가 자동으로 생겨요

```js
const stories = [
  { image: "...", date: "October 10, 2025", title: "Finding Stillness in the Hills of San Cristóbal", href: "#" },
  // 여기에 한 줄 추가하면 카드도 하나 추가!
];
```

<br>

### 🎨 디자인 직접 바꾼 부분

**🦶 푸터 — 호버 & 애니메이션 추가**
- 정보 링크: 마우스를 올리면 살짝 커지고 굵어지게
- SNS 아이콘: 마우스를 올리면 위로 튀어오르며 살짝 기울고 커지게
- 아이콘 뒤에 동그란 배경을 살짝 어긋나게 깔아서 입체감 주기

**🖼️ Upcoming itinerary — 반응형에서도 이미지 유지**
- 시안에서는 화면이 작아지면 이미지가 사라졌는데
- 모바일에서 텍스트만 있으면 허전해 보이고, 이미지가 있어야 더 예쁘고 꽉 차 보인다고 생각했어요
- 원래 있던 이미지를 굳이 없앨 필요가 없어서 **없애지 않고 글 아래로 내려서** 보이게 바꿨어요

**✉️ About — 이메일 링크 강조**
- 연락하는 게 이 페이지의 핵심 행동이라 눈에 더 잘 띄게
- 굵게 + 밑줄 처리하고, 마우스를 올리면 색이 바뀌도록

<br>

## 🛠️ 사용 기술

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

<br>

## 📂 폴더 구조

```
my1/
├─ index.html / articles.html / about.html
├─ css/     → main, 페이지별 스타일, responsive, reset, topBtn
├─ js/      → main, articles, about, topBtn
├─ img/     → 배경 사진, 아이콘
└─ fonts/   → 웹폰트
```
