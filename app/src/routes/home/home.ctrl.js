"use strict";

const User = require('../../models/User');

const output = {
    index: (req,res)=>{
        res.render("home/index");
    },
    
    login : (req,res)=>{
        res.render("home/login");
    },
    register: (req,res)=>{
        res.render("home/register");
    }
};


const process={
    login: (req, res) => { 
        const user = new User(req.body);
        const response = user.login();
        console.log(response);
    },
    register: (req, res) => { 
        const user = new User(req.body);
        const response = user.register();
        console.log(response);
    },


//     login: (req,res) =>{
//         const id = req.body.id,
//             psword = req.body.psword;

//     const users = UserStorage.getUsers("id","psword");
        
//         const response = {};
//         if (users.id.includes(id)){
//             const idx = users.id.indexOf(id);
//         if (users.psword[idx] === psword) {
//             response.success = true;
//             return res.json(response);
//         }
//     }

//         response.success= false;
//         response.msg="로그인에 실패하셨습니다.";
//         return res.json(response);
//     },
};

//모듈을 바깥으로 빠지게 함
module.exports = {
    output,
    process,
};

// odject에서는 원래 {key : value} 인데 key값만 넣으면  value 값도 key값으로 자동 저장됨