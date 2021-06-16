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
    let getNameCallBack = (err, data) => {
        if (err) {
            let nowTime = parseTime.gettime()
            log_out.print("./error.log", nowTime + " : " + err)
        } else {
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

/* 获取成员列表 */
getMemberList = (req, res) => {
    //校验token 500014为token过期
    let userInfo = TOKEN.validationToken(req.headers['x-token']);
    if (!userInfo) {
        res.send({ code: 50014, message: "身份过期,请重新登陆" })
        return
    }

    let Sqle = "select id,userName,role from tbAdminUser LIMIT ?,?";
    let limit = req.query.limit * 1;
    let page = (req.query.page - 1) * limit
    let SqlArr = [page, limit];
    let CallBack = (err, data) => {
        if (err) {
            let nowTime = parseTime.gettime()
            log_out.print("./error.log", nowTime + " : " + err)
        } else {
            let Sql = "select COUNT(*) as total from tbAdminUser";
            let SqlArr = [];
            let dataList = data;
            let CallBack = (err, data) => {
                if (err) {
                    let nowTime = parseTime.gettime()
                    log_out.print("./error.log", nowTime + " : " + err)
                } else {

                    let nowTime = parseTime.gettime()
                    log_out.print("./info.log", nowTime + " 获取成员列表成功: " + JSON.stringify(dataList))
                    res.send({
                        code: 20000,
                        data: {
                            items: dataList,
                            total: data[0].total
                        }
                    })
                }
            }
            dbconfig.sqlConnect(Sql, SqlArr, CallBack);
        }
    }
    dbconfig.sqlConnect(Sqle, SqlArr, CallBack);
}
/* 创建成员 */
addMember = (req, res) => {
    //校验token 500014为token过期
    let userInfo = TOKEN.validationToken(req.headers['x-token']);
    if (!userInfo) {
        res.send({ code: 50014, message: "身份过期,请重新登陆" })
        return
    }
    let createMemberInfo = TOKEN.validationToken(req.body.msg);
    let userName = createMemberInfo.userName;
    let passWord = createMemberInfo.pass;
    let role = createMemberInfo.role;
    let Sql = "select * from tbAdminUser where userName=?"
    let SqlArr = [userName]
    let CallBack = (err, data) => {
        if (err) {
            let nowTime = parseTime.gettime()
            log_out.print("./error.log", nowTime + " : " + err)
        } else {
            if (data.length > 0) {
                res.send({
                    code: 20000,
                    msgCode: false,
                    msg: "用户名已存在"
                })
            } else {
                let Sql = 'INSERT into tbAdminUser (userName,passWord,role) VALUES(?,?,?)';

                let SqlArr = [userName, passWord, role];
                let CallBack = (err, data) => {
                    if (err) {
                        let nowTime = parseTime.gettime()
                        log_out.print("./error.log", nowTime + " : " + err)
                    } else {
                        let nowTime = parseTime.gettime()
                        log_out.print("./info.log", nowTime + "创建成员成功")
                        res.send({
                            code: 20000,
                            msgCode: true
                        })
                    }
                }
                dbconfig.sqlConnect(Sql, SqlArr, CallBack)
            }
        }
    }
    dbconfig.sqlConnect(Sql, SqlArr, CallBack)
}
/* 删除成员 */
deleteMember = (req, res) => {
    //校验token 500014为token过期
    let userInfo = TOKEN.validationToken(req.headers['x-token']);
    if (!userInfo) {
        res.send({ code: 50014, message: "身份过期,请重新登陆" })
        return
    }

    let Sql = `delete from tbAdminUser where id=?`;
    let SqlArr = [req.query.id];
    let CallBack = (err, data) => {
        if (err) {
            let nowTime = parseTime.gettime()
            log_out.print("./error.log", nowTime + " : " + err)
        } else {

            let nowTime = parseTime.gettime()
            log_out.print("./info.log", nowTime + " 删除成员成功")
            res.send({
                code: 20000
            })
        }
    }
    dbconfig.sqlConnect(Sql, SqlArr, CallBack);
}
/* 修改成员角色 */
changePermission = (req, res) => {
    //校验token 500014为token过期
    let userInfo = TOKEN.validationToken(req.headers['x-token']);
    if (!userInfo) {
        res.send({ code: 50014, message: "身份过期,请重新登陆" })
        return
    }
    let id = req.body.id
    let roler = req.body.roler
    let Sql = "UPDATE tbAdminUser set role=? where id=?"
    let SqlArr = [roler, id];
    let CallBack = (err, data) => {
        if (err) {
            let nowTime = parseTime.gettime()
            log_out.print("./error.log", nowTime + " : " + err)
        } else {

            let nowTime = parseTime.gettime()
            log_out.print("./info.log", nowTime + " 修改成员成功")
            res.send({
                code: 20000
            })
        }
    }
    dbconfig.sqlConnect(Sql, SqlArr, CallBack);
}
/* 修改成员密码*/
changePass = (req, res) => {
    //校验token 500014为token过期
    let userInfo = TOKEN.validationToken(req.headers['x-token']);
    if (!userInfo) {
        res.send({ code: 50014, message: "身份过期,请重新登陆" })
        return
    }
    let createMemberInfo = TOKEN.validationToken(req.body.msg);
    let passWord = createMemberInfo.pass;
    let id = createMemberInfo.id;
    let Sql = "UPDATE tbAdminUser set passWord=? where id=?"
    let SqlArr = [passWord, id];
    let CallBack = (err, data) => {
        if (err) {
            let nowTime = parseTime.gettime()
            log_out.print("./error.log", nowTime + " : " + err)
        } else {
            let nowTime = parseTime.gettime()
            log_out.print("./info.log", nowTime + " 修改成员密码成功")
            res.send({
                code: 20000
            })
        }
    }
    dbconfig.sqlConnect(Sql, SqlArr, CallBack);
}

/* 获取动态路由 */
getRouter = (req, res) => {
    //校验token 500014为token过期
    let userInfo = TOKEN.validationToken(req.headers['x-token']);
    if (!userInfo) {
        res.send({ code: 50014, message: "身份过期,请重新登陆" })
        return
    }
    let Sql = "select router from tbRouter";
    let SqlArr = [];
    let CallBack = (err, data) => {
        if (err) {
            let nowTime = parseTime.gettime()
            log_out.print("./error.log", nowTime + " : " + err)
        } else {
            let router = JSON.parse(data[0].router)

            let nowTime = parseTime.gettime()
            log_out.print("./info.log", nowTime + " 获取动态路由成功: " + data[0].router)
            res.send({
                code: 20000,
                data: router
            })
        }
    }
    dbconfig.sqlConnect(Sql, SqlArr, CallBack);
}
/* 新增角色 */
addRole = (req, res) => {
    //校验token 500014为token过期
    let userInfo = TOKEN.validationToken(req.headers['x-token']);
    if (!userInfo) {
        res.send({ code: 50014, message: "身份过期,请重新登陆" })
        return
    }
    let Sql = "select `key` from tbAdminRole where id=(select MAX(id) from tbAdminRole)"
    let SqlArr = [];
    let CallBack = (err, data) => {
        if (err) {
            let nowTime = parseTime.gettime()
            log_out.print("./error.log", nowTime + " : " + err)
        } else {
            let name = req.body.name
            let description = req.body.description
            let key = req.body.key
            let routes = req.body.routes
            if (data[0]) {
                key = data[0].key + 1
            } else {
                key = 1000
            }
            let Sql = "INSERT into tbAdminRole (`name`,description,`key`,routes) VALUES(?,?,?,?)";
            let SqlArr = [name, description, key, routes];
            let CallBack = (err, data) => {
                if (err) {
                    let nowTime = parseTime.gettime()
                    log_out.print("./error.log", nowTime + " : " + err)
                } else {
                    let nowTime = parseTime.gettime()
                    log_out.print("./info.log", nowTime + " 新增角色成功")
                    res.send({
                        code: 20000,
                        data: {
                            key: key
                        }
                    })
                }
            }
            dbconfig.sqlConnect(Sql, SqlArr, CallBack);
        }
    }
    dbconfig.sqlConnect(Sql, SqlArr, CallBack);


}
/* 获取角色列表 */
getRoles = (req, res) => {
    //校验token 500014为token过期
    let userInfo = TOKEN.validationToken(req.headers['x-token']);
    if (!userInfo) {
        res.send({ code: 50014, message: "身份过期,请重新登陆" })
        return
    }
    let Sql = "select * from tbAdminRole LIMIT ?,?";
    let limit = req.query.limit * 1;
    let page = (req.query.page - 1) * limit
    let SqlArr = [page, limit];
    let CallBack = (err, data) => {
        if (err) {
            let nowTime = parseTime.gettime()
            log_out.print("./error.log", nowTime + " : " + err)
        } else {

            let nowTime = parseTime.gettime()
            log_out.print("./info.log", nowTime + " 获取角色列表成功" + JSON.stringify(data))
            res.send({
                code: 20000,
                data: data
            })
        }
    }
    dbconfig.sqlConnect(Sql, SqlArr, CallBack);
}
/* 修改角色 */
updateRole = (req, res) => {
    //校验token 500014为token过期
    let userInfo = TOKEN.validationToken(req.headers['x-token']);
    if (!userInfo) {
        res.send({ code: 50014, message: "身份过期,请重新登陆" })
        return
    }
    let name = req.body.name
    let description = req.body.description
    let routes = req.body.routes
    let id = req.body.id
    let Sql = "UPDATE tbAdminRole set `name`=?,description=?,routes=? where id=?";
    let SqlArr = [name, description, routes, id];
    let CallBack = (err, data) => {
        if (err) {
            let nowTime = parseTime.gettime()
            log_out.print("./error.log", nowTime + " : " + err)
        } else {
            let nowTime = parseTime.gettime()
            log_out.print("./info.log", nowTime + " 修改角色成功")
            res.send({
                code: 20000,
                data: { status: "success" }
            })
        }
    }
    dbconfig.sqlConnect(Sql, SqlArr, CallBack);

}
/* 删除角色 */
deleteRole = (req, res) => {
    //校验token 500014为token过期
    let userInfo = TOKEN.validationToken(req.headers['x-token']);
    if (!userInfo) {
        res.send({ code: 50014, message: "身份过期,请重新登陆" })
        return
    }

    let Sql = "delete from tbAdminRole where `key`=?";
    let SqlArr = [req.query.key];
    let CallBack = (err, data) => {
        if (err) {
            let nowTime = parseTime.gettime()
            log_out.print("./error.log", nowTime + " : " + err)
        } else {
            let nowTime = parseTime.gettime()
            log_out.print("./info.log", nowTime + " 删除角色成功")
            res.send({
                code: 20000,
                data: { status: "success" }
            })
        }
    }
    dbconfig.sqlConnect(Sql, SqlArr, CallBack);
}

getAreaServer = (req, res) => {
    //校验token 500014为token过期
    let userInfo = TOKEN.validationToken(req.headers['x-token']);
    if (!userInfo) {
        res.send({ code: 50014, message: "身份过期,请重新登陆" })
        return
    }
    let Sql = `
        SELECT "OA服" as \`table\`,bar_id as id,bar_name as label,ZoneNod.node_name as childLabel,ZoneNod.node_id as childId,serverInted.server_inted as childOptional,ZoneNod.zoneareaid FROM ${config.areaList.oa.tabBar} tabBar left join ${config.areaList.oa.Node} ZoneNod on ZoneNod.entry_id = tabBar.bar_id left join \`Server\` serverInted on serverInted.zoneareaid = ZoneNod.zoneareaid
UNION all
SELECT "渠道服" as \`table\`,bar_id as id,bar_name as label,ZoneNod.node_name as childLabel,ZoneNod.node_id as childId,serverInted.server_inted as childOptional,ZoneNod.zoneareaid FROM ${config.areaList.list1.tabBar} tabBar left join ${config.areaList.list1.Node} ZoneNod on ZoneNod.entry_id = tabBar.bar_id left join \`Server\` serverInted on serverInted.zoneareaid = ZoneNod.zoneareaid
UNION all
SELECT "买量服" as \`table\`,bar_id as id,bar_name as label,ZoneNod.node_name as childLabel,ZoneNod.node_id as childId,serverInted.server_inted as childOptional,ZoneNod.zoneareaid FROM ${config.areaList.list2.tabBar} tabBar left join ${config.areaList.list2.Node} ZoneNod on ZoneNod.entry_id = tabBar.bar_id left join \`Server\` serverInted on serverInted.zoneareaid = ZoneNod.zoneareaid
    `;
    let SqlArr = [];
    let CallBack = (err, data) => {
        if (err) {
            let nowTime = parseTime.gettime()
            log_out.print("./error.log", nowTime + " : " + err)
        } else {
            let dataList = data
            let resultData = []
            let resultList = []
            for (let i = 0; i < data.length; i++) {
                let childList = []
                for (let j = 0; j < dataList.length; j++) {
                    if (data[i].id == dataList[j].id && data[i].table == dataList[j].table) {
                        let childNode = {
                            id: dataList[j].zoneareaid,
                            parentId: dataList[j].id,
                            label: dataList[j].zoneareaid + " - " + dataList[j].childLabel,
                            disabled: dataList[j].childOptional == 1 ? false : true
                        }
                        if (childNode.id != null) {
                            childList.push(childNode)
                        }
                    }
                }
                let num = resultData.length - 1

                if (num >= 0) {
                    if (data[i].id != resultData[num].id || data[i].table != resultData[num].parentLabel) {
                        let node = {
                            id: data[i].id,
                            parentLabel: data[i].table,
                            label: data[i].label,
                            children: childList
                        }
                        resultData.push(node)
                    }
                } else {
                    let node = {
                        id: data[i].id,
                        parentLabel: data[i].table,
                        label: data[i].label,
                        children: childList
                    }
                    resultData.push(node)
                }
            }
            let list1Node = []
            let list2Node = []
            let list3Node = []
            resultData.forEach(item => {
                if (item.children.length > 1) {
                    let startId = item.children[0].id.toString();
                    let endId = item.children[item.children.length - 1].id.toString();
                    let start = startId.substr(startId.length - 3);
                    let end = endId.substr(endId.length - 3);
                    item.label = item.label + `：[ ${start}-${end} ]`;
                } else {
                    item.label = item.label;
                }

                switch (item.parentLabel) {
                    case '渠道服':
                        list1Node.push(item)
                        break;
                    case '买量服':
                        list2Node.push(item)
                        break;
                    case 'OA服':
                        list3Node.push(item)
                        break;
                }
            })
            resultList = [
                { label: "OA服", id: 10001, children: list3Node },
                { label: "渠道服", id: 10002, children: list1Node },
                { label: "买量服", id: 10003, children: list2Node }
            ]
            let nowTime = parseTime.gettime()
            log_out.print("./info.log", nowTime + " 获取区服成功: " + JSON.stringify(resultList))
            res.send({
                code: 20000,
                msgCode: 1,
                data: resultList
            })
        }
    }
    daconfig_serverArea.sqlConnect(Sql, SqlArr, CallBack);
}
module.exports = {
    getRouter,
    addRole,
    getRoles,
    updateRole,
    deleteRole,
    login,
    logout,
    info,
    getMemberList,
    addMember,
    deleteMember,
    changePermission,
    changePass,
    getAreaServer
}