# NestJS

- Node.JS의 프레임 워크.
- EXPRESS 위에서 작동한다.
- EXPRESS 대신 Fastify를 사용할 수 있고 2배 빠르다.
- 우리가 선호하는 아키텍처와 구조를 제공한다.

## NodeJS와 NestJS

node.js는 아무런 규칙이 없어 사용자가 하고 싶은 대로 아무거나 할 수 있다. 예를들면, url, controller, middleware 등등을 아무데나 둘 수 있다.
반면 NestJS같은 프레임워크는 그런 점에서 정해진 규칙이 있고 이를 잘 지키면 쉽게 빠르게 서버를 만들 수 있다.

## 강의 내용

NestJS로 REST API를 만들고 테스트 한다..

### insomnia

https://insomnia.rest/
Rest client. 이걸로 우리의 엔드포인트를 테스트할 것.

### NestJS 설치

`npm i -g @nestjs/cli`
설치 후 터미널에서 `nest` 입력하면 사용할 수 있는 명령어를 보여준다.

---

controller : express의 router 같은 것. URL가져오고 함수를 실행. request를 받고, query나 body 등을 넘기는 역할.
CLI 입력 : `nest generate controller` || `nest g co` => 이름을 입력하면 컨트롤러와 spec( 테스트 파일 )이 생성된다.

Decorator에서 필요한 parameter를 request하지 않으면 NestJS는 아무것도 return하지 않는다.

---

Single-responsibility principle : 하나의 module, class, function이 하나의 기능은 꼭 책임져야 한다.
Service : 로직을 관리하는 역할.

CLI 입력 : `nest generate service` || `nest g s`
express.js에서 하듯 수동으로 import하지 않는다.

---

데이터 전송 객체 Data Transfer Object.
유효성 검사를 하기 위한 type을 부여하기 위해 service와 controller에서 DTO를 만든다.
이것만 있으면 유효성 검사가 되진 않는다. PIPE( 미들웨어 같은 거다. )가 필요하다.
main.ts에 설정함. `app.useGlobalPipes( new ValidationPipe())`
`npm i class-validator class-transformer` : DTO에 사용하는 라이브러리.
`npm i @nestjs/mapped-trypes` : 타입을 변환시키고 사용하게 한다. nestjs에서 제작.

---

app.module은 AppController와 AppProvider만 가지고 있어야 한다.
Movies의 모듈과 컨트롤러는 movies.module로 옮긴다.
CLI 입력 : `nest generate module` || `nest g mo`

그럼 AppController와 Provider는 언제 쓰나?
CLI 입력 : `nest generate controller` || `nest g co`
이름을 app로 하면 만들어짐.

---

### 테스트

.spac.ts 파일은 테스트를 포함한 파일이다. 유닛테스트가 목적이다.
spac파일에는 beforeEach가 기본으로 있다. 그리고 afterAll은 테스트 후 DB를 모두 지워줄 수 있다.

유닛 테스트 : 펑션 하나를 테스트.
e2e( end - to - end ): 모든 시스템을 테스트.
