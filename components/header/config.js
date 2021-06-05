/*
 * @Author: your name
 * @Date: 2021-05-25 17:08:29
 * @LastEditTime: 2021-06-05 14:39:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\components\nav\config.js
 */
/**
 * @description: 长度请不要超过5个
 */
const navConfig = [
    {
        name: "index",
        title: "首页",
        icon:"home",
        children: []
    },
    {
        name: "notes",
        title: "学习笔记",
        icon:"chrome",
        children: [
            { name: "notes-react", title: "React" },
            { name: "notes-typeScript", title: "TypeScript" },
            { name: "notes-vue", title: "VUE" },
            { name: "notes-javaScript", title: "JavaScript" },
            { name: "notes-html", title: "HTML" },
            { name: "notes-css", title: "CSS" }
        ]
    },
    {
        name: "interview",
        title: "面试宝典",
        icon:"book",
        children: []
    },
    {
        name: "moodQuotes",
        title: "闲情语录",
        icon:"reddit-circle",
        children: []
    },
    {
        name: "collection",
        title: "收藏",
        icon:"star",
        children: []
    }
]
module.exports = navConfig