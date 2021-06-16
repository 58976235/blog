const dbconfig = require('../util/dbConfig/dbconfig_admin');
const daconfig_serverArea = require('../util/dbConfig/daconfig_serverArea');
const TOKEN = require('../util/token/token');
const config = require('../config');
const parseTime = require('../public/javascripts/parseTime')
const { builder } = require('../public/javascripts/unit')
const { log_out } = require('../public/javascripts/log_out')
const md5 = require('md5')

/* 后台管理 */

/* 登录 */
login = (req, res) => {
    let getNameSqle = "select * from user where userName=?";
    let getNameSqlArr = [req.body.username];
    let getNameCallBack = (data) => {
        if (data.length) {
            if (md5(data[0].passWord) == req.body.password) {
                let userList = new Object()
                for (let item in data[0]) {
                    userList[item] = data[0][item]
                }
                let nowTime = parseTime.gettime()
                log_out.print("./info.log", nowTime + " 登录成功")
                let token = TOKEN.getToken(userList)
                res.send(
                    builder({
                        'token': token
                    }, '', 200, { 'Custom-Header': data[0].id }))
            } else {
                res.send(builder({ isLogin: true }, '密码错误', 401))
            }
        } else {
            res.send(builder({ isLogin: true }, '账户错误', 401))
        }
    }
    dbconfig.sqlConnect(getNameSqle, getNameSqlArr, getNameCallBack);
}

/* 退出 */
logout = (req, res) => {
    let userInfo = TOKEN.validationToken(req.body.token);
    res.send({
        code: 20000
    })
}

/* 获取用户信息 */
info = (req, res) => {
    let userInfo = TOKEN.validationToken(req.headers['access-token']);
    if (!userInfo) {
        //token过期
        res.send({ code: 50014, message: "身份过期,请重新登陆" })
        return
    } else {
        res.send(builder(userInfo))
    }
}

module.exports = {
    login,
    logout,
    info
}