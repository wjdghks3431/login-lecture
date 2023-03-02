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
const app = express();


// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set("views",'./views');//view 엔지 세팅(폴더)
app.set("view engine", "ejs"); // view 엔진으로 ejs활용 html 해석


app.use("/",home); // use - > 미들웨어를 등록해주는 메서드.


module.exports = app;