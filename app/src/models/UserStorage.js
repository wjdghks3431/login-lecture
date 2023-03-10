"use strict";
// static #users = {
//     //static :정적 변수로 설정하여 UserStorage에 있는 users에 접근 가능하다.
//     //#--- 숨긴 변수로 설정으로 외부에서 데이터를 함부로 가져오지 못하게 만든다

//파일을 읽어들이기 위해
const fs = require("fs").promises;

class UserStorage{

    static #getUerInfo(data,id){
        const users = (JSON.parse(data));
        const idx = users.id.indexOf(id);
        const usersKey = Object.keys(users); // => [id,psword,name]
        const userInfo = usersKey .reduce((newUser,info)=> {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }
    

    static #getUsers(data,isAll, fields) {
        const users = JSON.parse(data);
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
        return newUsers;
        },{});
        return newUsers;
    }

    static getUsers(isAll, ...fields){
        
        //...변수명 파라미터로 넘긴 데이터가 넘어가게 된다. 
        return fs
        .readFile("./src/databases/users.json")
        .then((data) =>{
            return this.#getUsers(data,isAll,fields);
        })
        .catch(console.error);
    }


    static getUserInfo(id) {
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUerInfo(data, id);
        })
        .catch(console.error);
    }

    static async save(userInfo) {
        const users = await this.getUsers(true);
        if (users.id.includes(userInfo.id)) {
            throw "이미 존재하는 아이디 입니다.";
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile("./src/databases/users.json",  JSON.stringify(users));
        return { success: true };
    }
}

module.exports = UserStorage;