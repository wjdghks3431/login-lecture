// // http(내장모듈)를 이용한 서버 열기
// const http = require("http");
// const app = http.createServer((req,res) => {
//     //한글화 작업
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//     //console.log(req.url);  => url값을 받 못해서 접속이 안됨
//     if (req.url === '/'){
//         res.end("여기는 루트입니다");
//     }else if (req.url === '/login'){
//         res.end("여기는 로그인 화면입니다")
//     }
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버입니다.");

// });

///////////////////////////////////////////////////////////////////////////////////////////////
//express를 이용한 서버 열기

"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();



// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views",'./src/views');//view 엔지 세팅(폴더)
app.set("view engine", "ejs"); // view 엔진으로 ejs활용 html 해석
app.use(express.static(`${__dirname}/src/public`));
//express메서등 중에서 stacid 메서드에 정적 경로 디렉토리 네임 src pubilc 정적 경로로 추가함
//디렉토리 네임의 위치를 변환함 src/public경로로 변환

app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/",home); // use - > 미들웨어를 등록해주는 메서드.


module.exports = app;