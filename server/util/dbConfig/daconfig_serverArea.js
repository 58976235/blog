const mysql = require("mysql2")
const config = require("../../config")
const parseTime = require('../../public/javascripts/parseTime')
const { log_out } = require('../../public/javascripts/log_out')
let pool = mysql.createPool(config.DBserverArea)
module.exports = {
    sqlConnect: function (sql, sqlArr, callBack) {

        pool.getConnection((err, conn) => {
            if (err) {
                let nowTime = parseTime.gettime()
                log_out.print("./error.log",nowTime + " : " + err)
                return;
            }
            /* 事件驱动回调 */
            conn.query(sql, sqlArr, (err, data) => {
                if (err) {
                    let nowTime = parseTime.gettime()
                    log_out.print("./error.log", nowTime + " : " + err)
                } else {
                    callBack(data)
                }
            });

            conn.release();
        })
    }
}