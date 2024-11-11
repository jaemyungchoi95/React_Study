console.log("안녕 Node.js") // 바로 실행시키려면 node index.js 와 같은 명령어로 즉시 실행이 가능하다.
// 만약 경로를 옮겼을 경우 node ./src/index.js 와 같이 경로를 같이 입력해야 한다.
// 위와 같은 과정을 생략할 수 있는데, package.json에 script의 "test" "start": "node src/index.js" 를 추가해준다.
// 그렇게되면 npm run start 명령어를 통해 src 폴더 내부의 index.js를 편하게 실행할 수 있다.

// 모듈 시스템이란? 모듈을 다루는 시스템을 말한다.
// 만약, 간단한 온라인 쇼핑몰을 만들고자 한다면 그 코드를 한 파일에만 작성하게 되면 유지보수가 매우 힘들것이다.
// 그렇게 된다면 버그수정이나 기능추가 등의 작업을 진행할때 너무 많은양의 코드 속에서 해당 부분을 찾기도 쉽지 않다.
// 그래서 여러가지 기능을 구현해야 할때는, 기능별로 파일을 나누어 구현한다. => 이러한 형태를 모듈이라고 한다.

// 모듈 시스템 : 모듈을 생성하고, 불러오고, 사용하는 등의 모듈을 다루는 다양한 기능을 제공하는 시스템을 말한다.

// CJS(Common JS 모듈 시스템)을 이용하여 먼저 실습을 해볼 것이다.

// const moduleData = require("./math") <= 이렇게 사용할 수도 있지만 바로 구조분해할당을 통해 쓸 수도 있다.
// console.log(moduleData.add(1,2))
// console.log(moduleData.sub(1,2))
// const { add, sub } = require("./math");
// console.log(add(1,2))
// console.log(sub(1,2))

// 두번째로 ES Module시스템을 사용해볼 것이다.
// 이것을 사용하려면 package.json에서 설정을 따로 해주어야 한다. 가장 하단에 "type": "module" 입력해주면 된다.
// 만약, CJS와 같이 이용하고자 설정하고 npm run start를 하면 오류가 발생하게 된다.
// 기본적으로 CJS와 ESM을 동시에 사용하지 못하게 설계되어있기 때문이다.
// 오류 내용 : ReferenceError: require is not defined in ES module scope, you can use import instead

// 반드시 경로를 지정할때 파일의 확장자까지 써줘야 한다.
// import mul from "./math.js";
// import { add, sub } from "./math.js"; <= 이런식으로 나눠서 쓸 수도 있고 아래와 같이 합쳐서 쓸 수도 있다.

// import mul, { add, sub } from "./math.js";

// console.log(add(1, 2));
// console.log(sub(1, 2))
// console.log(mul(3, 3))

// Node.js의 라이브러리 사용하기
// 라이브러리란? 프로그램을 개발할 때 필요한 다양한 기능들을 미리 만들어 모듈화 해놓은 것
// 예시 : 날짜 라이브러리, 수학 라이브러리, 그래픽 라이브러리

// 구글에서 npmjs를 검색하면 npmjs.com 에 들어갈 수 있다. 이 사이트에 Node.js의 거의 모든 라이브러리가 등록되어있다.
// math.js의 경우와 다르게, 라이브러리를 불러오는 경우 from 뒤에 라이브러리의 이름만 명시하면 된다.

// 만약 node_modules와 package-lock.json 이 지워지게 되면 실제로 라이브러리의 코드들을 보관하는 폴더가 없어졌기 때문에
// 사용하지 못하게 되지만 package.json의 정보만 잘 가지고 있어도 해당하는 라이브러리를 다시 설치할 수 있다.
// npm i 혹은 npm install 명령어만 터미널에 입력하면 dependencies의 정보만 가지고도 모든 패키지를 다시 설치할 수 있다.
// 이러한 이유로 누군가에게 Node.js 패키지를 압축하여 누군가에게 공유할때 node_modules 폴더는 구지 포함하지 않아도 된다.

import randomColor from "randomcolor";

const color = randomColor();
console.log(color)

