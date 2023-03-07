"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confrm-psword"),
    registerBtn = document.querySelector("#button");


registerBtn.addEventListener("click", register);

function register(){
    const req = {
        id: id.value,
        name:name.value,
        psword: psword.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
})
    .catch((err) => {
        console.error("로그인 중 에러 발생");
    });
}