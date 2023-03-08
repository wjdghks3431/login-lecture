"use strict";

class UserStorage{
    static #users = {
    //static :정적 변수로 설정하여 UserStorage에 있는 users에 접근 가능하다.
    //#--- 숨긴 변수로 설정으로 외부에서 데이터를 함부로 가져오지 못하게 만든다
        id: ["kim", "나개발", "김팀장"],
        psword: ["1234", "1234", "123456"],
        name: ["kim", "lee", "jeong"]
    };
    
    static getUsers(...fields){
        //...변수명 파라미터로 넘긴 데이터가 넘어가게 된다.
    const users = this.#users;
    const newUsers = fields.reduce((newUsers,field) => {
        if (users.hasOwnProperty(field)) {
            newUsers[field] = users[field];
        }
        return newUsers;
    },{});
    return newUsers;
    }

    static getUserInfo (id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKey = Object.keys(users); // => [id,psword,name]
        const userInfo = usersKey .reduce((newUser,info)=> {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        console.log(users);


    }
}

module.exports = UserStorage;