# Summary
React summary

## 환경설정
react 개발을 위한 기본 환경설정

### 개발환경 설정
1. nodejs 설치 (*version 14 이상*)   
    [install nodejs](http://nodejs.org/ko/download/releases/)
2. npm, typescript 설정   
    npm `npm init -y`
    typescript `npx tsc --init`
3. CRP 이용하여 typescript 사용하는 프로젝트 생성   
    `npx create-react-app . --template typescript`
4. 프로젝트 시작   
    `npm start`

## CRA(create-react-app)
react 프로젝트를 생성하고, 필요한 모듈들을 설치하여 개발할 수 있는 환경을 만들어준다.   
`npx create-react-app [app-name]`
> 나는 typescript를 사용하므로 관련 옵션을 추가하여 실행했다.   
> `npx create-react-app [app-name] --template typescript`

### 생성된 기본 프로젝트 구조
|   |   |
|---|:---:|
|app-name|  |
|&nbsp;&nbsp;&nbsp;├ README.md| |
|&nbsp;&nbsp;&nbsp;├ node_modules|  |
|&nbsp;&nbsp;&nbsp;├ package.json|(1)|
|&nbsp;&nbsp;&nbsp;├ package-lock.json| |
|&nbsp;&nbsp;&nbsp;├ .gitignore|    |
|&nbsp;&nbsp;&nbsp;├ public|(2)|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├ favocon.ico| |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├ index.html|(3)|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└ manifest.json|   |
|&nbsp;&nbsp;&nbsp;├ src|(4)|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├ App.css| |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├ App.js| |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├ index.css| |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├ index.js| |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├ logo.svg| |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└ serviceWorker.js| |

1. `package.json` : app에 사용되는 모듈 및 app 관련 정보
2. `public` : app에 사용되는 정적 파일들(image, css, js, ...)
3. `index.html` : SPA(Single Page Application)의 특성에 따라 app의 각 코드들을 이 html에 그린다.
4. `src` : app의 모든 소스   