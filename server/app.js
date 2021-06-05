/*
 * @Author: your name
 * @Date: 2021-06-02 10:52:27
 * @LastEditTime: 2021-06-03 16:49:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\server\app.js
 */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const config = require('./config');

const indexRouter = require('./routes/index');
const backStage = require('./routes/backStage')

const app = express();

/* 跨域 */
app.use(cors());

const http = require('http');
const server = http.createServer(app);

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* 访问路由,对应rotes文件夹下的文件 */
app.use('/', indexRouter);
/* 后台管理 */
app.use('/auth', backStage);


/* 服务 端口号 */
server.listen(config.listen);