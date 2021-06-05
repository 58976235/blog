/*
 * @Author: your name
 * @Date: 2021-05-31 16:45:48
 * @LastEditTime: 2021-05-31 16:47:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\plugins\axios.js
 */
import siteConfig from '@/site-config';
export default function ({ $axios, redirect }) {
    $axios.onRequest(config => {
        config.baseURL=siteConfig.baseURL
    })

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            redirect('/400')
        }
    })
}