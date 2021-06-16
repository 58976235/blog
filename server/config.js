/*
 * @Author: your name
 * @Date: 2021-06-02 10:52:27
 * @LastEditTime: 2021-06-03 20:09:40
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \myblog\server\config.js
 */
var config = {
    //数据库配置
    DBserverArea: {
        host: '192.168.0.252',
        port: '3306',
        user: 'root',
        password: "root",
        database: "deployment"
    },

    DBanalysis: {
        host: '192.168.0.233',
        port: '3306',
        user: 'root',
        password: "root",
        database: "Analysis"
    },

    DBadmin: {   //后台管理数据库 --后台登录,日志,动态路由
        host: 'localhost',  //192.168.0.221
        port: '3306',
        user: 'root',
        password: "LUOHAN1996",  //root
        database: "blog"
    },
    //监听端口
    listen: 3021,

    //token过期时间,过期后需要重新登陆  秒
    toKenTime: 60 * 60 * 24 * 1,

    //每日在线表  如 DailyLogin0101 只需填 DailyLogin 即可
    tableName: 'DailyLogin',

    areaList: {     //服务器列表
        oa: {          //oa服
            tabBar: "DirTabBarQA",
            Node: "DirZoneNodeQA"
        },
        list1: {      //渠道服
            tabBar: "DirTabBar01",
            Node: "DirZoneNode01"
        },
        list2: {       //买量服
            tabBar: "DirTabBar02",
            Node: "DirZoneNode02"
        }
    },
}

module.exports = config;