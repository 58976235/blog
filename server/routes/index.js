/*
 * @Author: your name
 * @Date: 2021-06-02 10:52:32
 * @LastEditTime: 2021-06-04 14:12:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\server\routes\index.js
 */
const express = require('express');
const router = express.Router();
const basicData = require("../controllers/basicDataController")

/* 获取服务器列表 */
router.get('/getTodayLoginsNumbe', basicData.getTodayLoginsNumbe);

router.get('/getComment', basicData.getComment);
router.get('/getNawArticle', basicData.getNawArticle);
router.get('/role', basicData.getRole);
router.get('/getBlogInfo', basicData.getBlogInfo);

module.exports = router;
