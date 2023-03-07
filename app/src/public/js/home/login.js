// "use strict";

// //DOMException(문서 객체 모델 :인터페이스)
// //태그랑 아이디 같게 하면 안됨 #-- id로 부여된 이름을 가져온다
// const id = document.querySelector("#id");
// const password = document.querySelector("#psword");
// const loginBtn = document.querySelector("button");

// loginBtn.addEventListener("click",login);

//  //오브젝트를 만들어 아이디와 패스워드 값을 저장
// function login() {
//     const rew = {
//         id : id.value,
//         psword : password.value,
//     };
//     //위 데이터를 서버에 전달 방법 = fetch 경로 설정하기 API
//     //fetch(경로, 오브젝트 데이터) json 데이터 타입으로 전달 => 일반 문자열로 나옴
//     fetch("/login", {
//         method: "POST",
//         headers: {
//             "Content-Type" : "appliction/json",
//         },
//         body: JSON.stringify(rew),
//     });
//     // .then((res) => res.json())
//     // .then(console.log);

// }

//Promise
//res.json()의 반환값은 promise이다. 기본 res의 반환 값은 Response스트림인대, .json()APTJEMFMF XHDGO Response 스트림을 읽을 수있다.
//Response는 데이터가 모두 받아진 상태가 아니다. .json()으로  Response스트림을 가져와 완료될 ㄱ때까지 읽는다. 다 읽은 body의 텍스트를 Promise형탸로 반환한다


"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        psword: psword.value,
    };

    fetch("/login", {
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