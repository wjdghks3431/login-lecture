"use strict";

const index = (req,res)=>{
    res.render("home/index");
};

const login = (req,res)=>{
    res.render("home/login");
};

//모듈을 바깥으로 빠지게 함
module.exports = {
    index,
    login,
};

// odject에서는 원래 {key : value} 인데 key값만 넣으면  value 값도 key값으로 자동 저장됨