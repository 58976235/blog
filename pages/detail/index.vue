<!--
 * @Author: your name
 * @Date: 2021-10-19 09:22:09
 * @LastEditTime: 2021-10-19 11:41:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog/pages/detail/index.vue
-->

<template>
    <div> 
        <header class="box header">
            <a-skeleton avatar :loading='loading' :paragraph="{ rows: 4 }" />
            <div v-if="!loading" class="header-title">
                <a-avatar :size="80" slot="avatar" :src="photo" />
                <div class="title-box">
                    <h2 class="title">{{detail.title}}</h2>
                    <p><span style="color:#1890ff">{{detail.tag}}</span><span style="margin-left:16px">{{dateTime}}</span></p>
                    <p>
                        <span style="margin-right: 8px;">
                            <a-icon type="eye" style="font-size:16px;color:rgba(0, 0, 0, 0.65)" />
                            {{ detail.look }}
                        </span>
                        <span>
                            <a-icon type="message" />
                            {{ detail.comment }}
                        </span>
                    </p>
                </div>
            </div>
        </header>
        <div v-html="detail.content" class="box detail-box">
            {{detail.content}}
        </div>
        <div class="box comments">
            <h3>发表评论</h3>
            <div>
                <a-textarea placeholder="请输入评论内容" :auto-size="{ minRows: 5, maxRows: 5 }" allow-clear @change="onChange" />
                <div class="published">
                    <a-button type="primary">发表</a-button>
                </div>
            </div>
            <div class="published-box" v-show="published.isShow">
                <h3>回复评论</h3>
                <a-textarea placeholder="请输入评论内容" :auto-size="{ minRows: 3, maxRows: 3 }" allow-clear @change="onChange" />
                <div class="published">
                    <a-button type="primary">回复</a-button>
                </div>
            </div>
            <h3 style="margin-top:10px">评论列表</h3>
            <div>
                <div class="comments-box">
                    <div class="comments-content">
                        <a-avatar :size="32" slot="avatar" :src="photo" />
                        <div class="ml-16">
                            <h3>肥猪</h3>
                            <p>假装这是一段评论</p>
                        </div>
                        <button class="ml-16" @click="publishedFn">回复</button>
                    </div>
                    <div class="comments-reply-box">
                        <div>
                            <p><span>狗仔</span> 回复 <span>肥猪</span>：我是狗仔</p>
                            <button class="ml-16" @click="publishedFn('狗仔')">回复</button>
                        </div>
                        <div>
                            <p><span>肥猪</span> 回复 <span>狗仔</span>：狗仔狗仔，我是肥猪，哈哈哈哈</p>
                            <button class="ml-16" @click="publishedFn">回复</button>
                        </div>
                    </div>
                </div>
                <div class="comments-box">
                    <div class="comments-content">
                        <a-avatar :size="32" slot="avatar" :src="photo" />
                        <div class="ml-16">
                            <h3>肥猪</h3>
                            <p>假装这是一段评论</p>
                        </div>
                        <button class="ml-16" @click="publishedFn">回复</button>
                    </div>
                    <div class="comments-reply-box">
                        <div>
                            <p><span>狗仔</span> 回复 <span>肥猪</span>：我是狗仔</p>
                            <button class="ml-16" @click="publishedFn('狗仔')">回复</button>
                        </div>
                        <div>
                            <p><span>肥猪</span> 回复 <span>狗仔</span>：狗仔狗仔，我是肥猪，哈哈哈哈</p>
                            <button class="ml-16" @click="publishedFn">回复</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import photo from '@/static/images/photo.jpg'
export default {
    name:'detail',
    data(){
        return{
            detail:{},
            photo:photo,
            loading:true,
            published:{
                isShow:false
            }
        }
    },
    computed:{
        dateTime(){
            let date=new Date(this.detail.time)
            let year=date.getFullYear()
            let month=this.fillZero(Number(date.getMonth())+1)
            let day=this.fillZero(date.getDay())
            let hours=this.fillZero(date.getHours())
            let minutes=this.fillZero(date.getMinutes())
            let seconds=this.fillZero(date.getSeconds())
            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
        }
    },
    methods:{
        publishedFn(){
            this.published.isShow=!this.published.isShow
        },
        onChange(e) {
            console.log(e);
        },
        fillZero(num){
            let str=num.toString()
            if(str.length>1){
                return str
            }else{
                return '0'+str
            }
        },
        getData(){
            this.$axios.get("/getDetail",{params:this.$route.query}).then(res=>{
                this.detail=res.data.data[0]
                this.loading=false
            })
        }
    },
    watch:{
        '$route':'getData'
    },
    mounted(){
        this.getData()
    }
}
</script>
<style lang="scss" scoped>
.box{
    background-color: #fff;
    border-radius: 4px;
}
.header{
    padding: 10px;
    .header-title{
        display: flex;
        justify-content: flex-start;
        padding: 20px 20px 10px;
        .title-box{
            margin-left: 20px;
            h2{
                font-size: 24px;
                line-height: 30px;
            }
        }
    }
}
.detail-box{
    padding: 20px;
    margin-top: 20px;
}
.comments{
    padding: 20px;
    margin-top: 20px;
    .published{
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
    }
    .published-box{
        padding: 20px 60px 0;
    }
    .comments-box{
        &+.comments-box{
            margin-top: 40px;
        }
        .comments-content{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            p,h3{
                margin-bottom: 0;
            }
            button{
                &:hover{
                    cursor:pointer
                }
                background: #fff;
                border: none;
                outline: none;
            }
        }
        .comments-reply-box{
            >div{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding-left: 60px;
                margin-top: 10px;
                p{
                    margin-bottom: 0;
                    span{
                        font-weight: bold;
                    }
                }
                button{
                    &:hover{
                        cursor:pointer
                    }
                    background: #fff;
                    border: none;
                    outline: none;
                }
            }
        }
        
    }
}
.ml-16{
    margin-left: 16px;
}
</style>