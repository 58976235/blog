/*
 * @Author: your name
 * @Date: 2021-06-02 10:52:32
 * @LastEditTime: 2021-06-03 16:49:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\server\routes\backStage.js
 */
const express = require('express');
const router = express.Router();
const backStage = require("../controllers/backStage")
/* 后台管理 */


/* 登录 */
router.post("/login", backStage.login)
/* 退出 */
router.post("/logout", backStage.logout)
/* 获取登录用户信息 */
router.get("/info", backStage.info)

module.exports = router;
