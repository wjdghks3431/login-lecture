"use strict";

const express = require("express");
const router = express.Router();

//경로 설정
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.index);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);


module.exports = router;
