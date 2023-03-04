"use strict";


const output = {
    index: (req,res)=>{
        res.render("home/index");
    },
    
    login : (req,res)=>{
        res.render("home/login");
    },
};

const users = {
    id : ["kim","hong","lee"],
    psword :[ "1234","2345","3456"],
};

const process={
    login: (req,res) =>{
        console.log(req.body);
        // const id = req.body.id,
        //     psword = req.body.psword;
        
        // if (users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if(users.psword[idx] === psword){
        //         return req.json({
        //             success: true,
        //         });
        //     }
        // }
        // return res.json({
        //     success: false,
        //     msg:"로그인에 실패하셨습니다.",
        // });
    },
};

//모듈을 바깥으로 빠지게 함
module.exports = {
    output,
    process,
};

// odject에서는 원래 {key : value} 인데 key값만 넣으면  value 값도 key값으로 자동 저장됨