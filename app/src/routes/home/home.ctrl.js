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
    login: async (req, res) => { 
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    register: async (req, res) => { 
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },

};

//모듈을 바깥으로 빠지게 함
module.exports = {
    output,
    process,
};

// odject에서는 원래 {key : value} 인데 key값만 넣으면  value 값도 key값으로 자동 저장됨