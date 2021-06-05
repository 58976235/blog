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
/* 获取成员列表 */
router.get("/getMemberList", backStage.getMemberList)
/* 添加成员 */
router.post("/addMember", backStage.addMember)
/* 删除成员 */
router.get("/deleteMember", backStage.deleteMember)
/* 修改成员角色 */
router.post("/changePermission", backStage.changePermission)
/* 修改成员密码 */
router.post("/changePass", backStage.changePass)

/* 获取动态路由 */
router.get("/getRouter", backStage.getRouter)

/* 新增角色 */
router.post("/addRole", backStage.addRole)

/* 查询角色 */
router.get("/getRoles", backStage.getRoles)
/* 修改角色 */
router.post("/updateRole", backStage.updateRole)
/* 删除角色 */
router.get("/deleteRole", backStage.deleteRole)
/* 获取区服 */
router.get("/getAreaServer", backStage.getAreaServer)

module.exports = router;
