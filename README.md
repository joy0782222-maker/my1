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
- **맨 위로 가기 버튼** — 스크롤을 내리면 나타나고, 드래그로 위치도 옮길 수 있음 (`topBtn.js`)

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
