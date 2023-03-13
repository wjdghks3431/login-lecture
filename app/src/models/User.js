"use strict";

const { response } = require("express");
const UserStorage = require('./UserStorage');

class User{
    constructor(body){
        this.body = body;
    }


    async login() {
        const client = this.body;
        const { id, psword } = await UserStorage.getUserInfo(client.id);
        if (id) {
            if (id === client.id && psword === client.psword){
                return { success : true};
            }
            return {success : false, msg: "비밀번호가 틀렸습니다."};
        }
        return { success : false, msg: "존재하지 않는 아이디입니다."};
    }

    register(){
        const client = this.body;
        const reponse = UserStorage.save(client);
        return reponse;
    }
}

module.exports = User;


//Promise를 반환하기 때문에 .then()으로도 접근하여 데이터를 가져올 수 있습니다. 
//await을 사용해준 이유는 "가독성" 이다. fs(파일시스템)애서도 await으로 가져올 수 있다 본인의 개발 성향에 맞춰 하면 된다"