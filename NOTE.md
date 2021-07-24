# NestJS

- Node.JS의 프레임 워크.
- EXPRESS 위에서 작동한다.
- 우리가 선호하는 아키텍처와 구조를 제공한다.

## NodeJS와 NestJS

node.js는 아무런 규칙이 없어 사용자가 하고 싶은 대로 아무거나 할 수 있다. 예를들면, url, controller, middleware 등등을 아무데나 둘 수 있다.
반면 NestJS같은 프레임워크는 그런 점에서 정해진 규칙이 있고 이를 잘 지키면 쉽게 빠르게 서버를 만들 수 있다.

## 강의 내용

## NestJS로 REST API를 만들고 테스트 한다..

## insomnia

https://insomnia.rest/
Rest client. 이걸로 우리의 엔드포인트를 테스트할 것.

## NestJS 설치

`npm i -g @nestjs/cli`
설치 후 터미널에서 `nest` 입력하면 사용할 수 있는 명령어를 보여준다.

---

controller : express의 router 같은 것. URL가져오고 함수를 실행. request를 받고, query나 body 등을 넘기는 역할.
CLI 입력 : nest generate controller || nest g co => 이름을 입력하면 컨트롤러와 spec( 테스트 파일 )이 생성된다.

Decorator에서 필요한 parameter를 request하지 않으면 NestJS는 아무것도 returng하지 않는다.

---

Single-responsibility principle : 하나의 module, class, function이 하나의 기능은 꼭 책임져야 한다.
Service : 로직을 관리하는 역할.

CLI 입력 : nest generate service || nest g s