"use strict";

//DOMException(문서 객체 모델 :인터페이스)
//태그랑 아이디 같게 하면 안됨 #-- id로 부여된 이름을 가져온다
const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click",login);

function login(){
    const req ={
        id : id.value,
        password : password.value,
    };
    console.log(req);

}

