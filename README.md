# ✈️ The Roam Report

> 여행 이야기와 사진을 모아 보여주는 **여행 블로그 웹사이트**
> Figma 디자인 시안을 바탕으로 **HTML · CSS · JavaScript를 혼자 직접 구현한 첫 반응형 웹사이트**예요.
> 시안을 그대로 옮기는 데서 그치지 않고, 디자인과 기능 일부를 직접 바꾸고 더해서 완성했어요.

<br>

## 📄 페이지 구성

| 페이지 | 파일 | 내용 |
|---|---|---|
| 🏠 Home | [`index.html`](./index.html) | 메인 소개, 흐르는 배너, 추천 글, 최신 스토리 카드 |
| 📰 Articles | [`articles.html`](./articles.html) | 전체 여행 스토리 목록 |
| 🙋 About | [`about.html`](./about.html) | 소개 및 다가오는 여행 일정 |

<br>

## ✨ 구현 기능

- **반응형 레이아웃** — 화면 크기에 맞춰 배치 변경 (`responsive.css`)
- **무한 흐르는 배너** — `TRAVEL MORE ✳ LIVE SLOW ✳ EXPLORE THE WORLD ✳`
- **스토리 카드 자동 생성** — 데이터 배열 + `<template>`로 카드 반복 출력 (`main.js`, `articles.js`)
- **맨 위로 가기 버튼** — 스크롤을 내리면 나타나고, 드래그로 위치도 옮길 수 있음 (`topBtn.js`) → [아래 설명](#-시안에서-직접-바꾼-점)

<br>

## 🔧 시안에서 직접 바꾼 점

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
