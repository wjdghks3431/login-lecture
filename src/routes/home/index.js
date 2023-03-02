"use strict";

const express = require("express");
const router = express.Router();

//경로 설정
const ctrl = require("./home.ctrl");

router.get("/", ctrl.index);

// '/'는 필수로 입력 
router.get("/login", ctrl.login);

module.exports = router;
