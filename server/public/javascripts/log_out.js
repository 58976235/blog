const fs = require('fs');

class GenerateLog {
    constructor() {
        this.options = {
            flags: 'a', // 
            encoding: 'utf8', // utf8编码
        }
        this.isResetR={
            './error.log':false,
            './info.log':false
        }
    }
    print(pathStr, info) {
        let stderr = fs.createWriteStream(pathStr, this.options)
        let _log_Out = new console.Console(stderr);
        let __this=this
        try {
            fs.accessSync(pathStr, fs.F_OK);
        } catch (e) {
            _log_Out.log(info)
            return '文件不存在';
        }
        fs.stat(pathStr, function (error, stats) {
            if (error) {
                return "file size error";
            } else {
                if (stats.size > 10485760) {
                    __this.isResetR[pathStr]=true
                    console.log('日志文件大于10MB，已清除');
                    let infoStr=`--------日志文件大于10MB，已清除--------\r\n${info}`
                    fs.writeFile(pathStr, infoStr, function (err) {
                        if (err) {
                            console.log(err);
                        }
                    });
                } else {
                    if(__this.isResetR[pathStr]){
                        __this.isResetR[pathStr]=false
                        _log_Out.log("\r\n"+info)
                    }else{
                        _log_Out.log(info)
                    }
                }
            }
        })
    }
}

let log_out = new GenerateLog()
// 创建log_out
module.exports = {
    log_out
}