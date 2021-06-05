/*
 * @Author: your name
 * @Date: 2021-06-03 17:34:45
 * @LastEditTime: 2021-06-03 17:38:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\server\public\javascripts\unit.js
 */
const responseBody = {
    message: '',
    timestamp: 0,
    result: null,
    code: 0
}

const builder = (data, message, code = 0, headers = {}) => {
    responseBody.result = data
    if (message !== undefined && message !== null) {
        responseBody.message = message
    }
    if (code !== undefined && code !== 0) {
        responseBody.code = code
        responseBody._status = code
    }
    if (headers !== null && typeof headers === 'object' && Object.keys(headers).length > 0) {
        responseBody._headers = headers
    }
    responseBody.timestamp = new Date().getTime()
    return responseBody
}

const getQueryParameters = (options) => {
    const url = options.url
    const search = url.split('?')[1]
    if (!search) {
        return {}
    }
    return JSON.parse('{"' + decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') + '"}')
}

const getBody = (options) => {
    return options.body && JSON.parse(options.body)
}

module.exports = {
    getBody,
    getQueryParameters,
    builder
}