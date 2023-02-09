# TO-DO-LIST-with-DRAG

<img width="100%" src="https://user-images.githubusercontent.com/77138259/217217037-fdd194bf-bec2-4371-99c9-97d7f4cee4d5.png" />

<a href="https://trello-clone-eta-nine.vercel.app/">클릭! 나만의 To Do List 만들러 가기</a>

- Trello의 일부 기능을 클론한 프로젝트입니다.
- react-beautiful-dnd 라이브러리를 사용하여 drag 기능을 구현했습니다.
- javascript의 오류 체크 및 자동완성 등을 위해 typescript를 적용했습니다.
- Board의 기본 값은 To Do, Doing, Done이며 유저의 니즈에 따라 추가 보드를 생성할 수 있는 것을 목표로 합니다.

## 주요 기능
- input란에 유저의 To Do를 작성(Card 생성)
- Mouse Drag를 통한 Card => 순번 변경 및 Board 간 이동
- 전역 상태 관리를 위한 localStorage 사용
- 앱 하단 휴지통에 Card를 이동하면 해당 Card 삭제 기능 구현
