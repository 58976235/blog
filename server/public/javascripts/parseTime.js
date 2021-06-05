module.exports = {
    timeToSeconds,
    timeToDay,
    timestamp,
    timeSeriess,
    getMonthDay,
    gettime
}
function gettime() {
    var today = new Date();
    var y = today.getFullYear();
    var m = today.getMonth();
    var d = today.getDate();
    var h = today.getHours();
    var i = today.getMinutes();
    var s = today.getSeconds();// 在小于10的数字钱前加一个‘0’
    m = m + 1;
    d = checkTime(d);
    m = checkTime(m);
    i = checkTime(i);
    s = checkTime(s);
    return `${y}-${m}-${d} ${h}:${i}:${s}`
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
/* 时间格式转化  2021-3-11 10:0:0*/
function timeToSeconds(value) {
    var da = new Date(value.replace("/Date(", "").replace(")/", "").split("+")[0]);
    return da.getFullYear() + "-" + monthDayFormat((da.getMonth() + 1)) + "-" + monthDayFormat(da.getDate()) + " " + monthDayFormat(da.getHours()) + ":" + monthDayFormat(da.getMinutes()) + ":" + monthDayFormat(da.getSeconds());
}
/* 时间格式转化  2021-3-11*/
function timeToDay(value) {
    var da = new Date(value.replace("/Date(", "").replace(")/", "").split("+")[0]);
    return da.getFullYear() + "-" + (da.getMonth() + 1) + "-" + da.getDate();
}
/* 时间转10位时间戳 */
function timestamp(value) {
    let time = new Date(value)
    return parseInt(time.getTime(time) / 1000)
}

/* 时间格式转化  20210311*/
function timeSeriess(value) {
    let month = monthDayFormat(value.getMonth() + 1)
    let day = monthDayFormat(value.getDate())
    return value.getFullYear() + month + day;
}

function getMonthDay(value) {
    let month = monthDayFormat(value.getMonth() + 1)
    let day = monthDayFormat(value.getDate())
    return month + day;
}

function monthDayFormat(value) {
    let length = value.toString().length
    if (length == 1) {
        return "0" + value
    } else {
        return value
    }

}