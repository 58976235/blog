/*
 * @Author: your name
 * @Date: 2021-03-29 12:00:06
 * @LastEditTime: 2021-06-05 15:22:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node\controllers\basicDataController.js
 */
const daconfig_analysis = require('../util/dbConfig/daconfig_analysis');
const dbconfig = require('../util/dbConfig/dbconfig_admin');
const TOKEN = require('../util/token/token');
const { getMonthDay } = require('../public/javascripts/parseTime')
const config = require('../config');
const parseTime = require('../public/javascripts/parseTime')
const { builder,getQueryParameters } = require('../public/javascripts/unit')
const { log_out } = require('../public/javascripts/log_out')
const totalCount = 5701
getComment=(req,res)=>{
    let arr=[
        {
            name:'飞翔的猪',
            content:'牛哇,666',
            tag:'论猪是否能上树',
            key:0
        },
        {
            name:'吃鸡蛋的鸡',
            content:'收藏了收藏了',
            tag:'鸡性的扭曲',
            key:1
        },
        {
            name:'飞翔的猪',
            content:'牛哇,666',
            tag:'论猪是否能上树',
            key:2
        },
        {
            name:'吃鸡蛋的鸡',
            content:'收藏了收藏了',
            tag:'鸡性的扭曲',
            key:3
        },
        {
            name:'飞翔的猪',
            content:'牛哇,666',
            tag:'论猪是否能上树',
            key:4
        },
        {
            name:'飞翔的猪',
            content:'牛哇,666',
            tag:'论猪是否能上树',
            key:5
        }
    ]
    res.send(arr)
}

getNawArticle=(req,res)=>{
    let arr=[
        {
            img:'https://static.wujiabk.com/images/cover/7f64df974492c8dd8768a21ea0fe1a3e_jsencrypt.jpg',
            content:'dasd asd sd撒大声地ad阿萨德萨达阿萨德阿萨德萨达萨达阿萨德奥术大师大叔大婶多啊实打实打算阿萨德打算啊',
            tag:'javaScript',
            look:1202,
            comment:12,
            key:0
        },
        {
            img:'https://static.wujiabk.com/images/cover/83e6fc0e91d5771d9590738273688ab8_node_upload.jpg',
            content:'dasd asd sd撒大声地ad阿萨德萨达阿萨德阿萨德萨达萨达阿萨德奥术大师大叔大婶多啊实打实打算阿萨德打算啊',
            tag:'node',
            look:1123,
            comment:1,
            key:1
        },
        {
            img:'https://static.wujiabk.com/images/d969869820099ea7f68005642f88617d_loadmore.jpg',
            content:'dsdasd d萨德奥术大师大sd sdasad d撒大声地阿萨德德打算啊',
            tag:'vue',
            look:1233,
            comment:122,
            key:2
        },
        {
            img:'https://static.wujiabk.com/images/cover/7f64df974492c8dd8768a21ea0fe1a3e_jsencrypt.jpg',
            content:'dasd asd sd撒大声地ad阿萨德萨达阿萨德阿萨德萨达萨达阿萨德奥术大师大叔大婶多啊实打实打算阿萨德打算啊',
            tag:'javaScript',
            look:1202,
            comment:12,
            key:3
        },
        {
            img:'https://static.wujiabk.com/images/cover/83e6fc0e91d5771d9590738273688ab8_node_upload.jpg',
            content:'dasd asd sd撒大声地ad阿萨德萨达阿萨德阿萨德萨达萨达阿萨德奥术大师大叔大婶多啊实打实打算阿萨德打算啊',
            tag:'node',
            look:1123,
            comment:1,
            key:4
        },
        {
            img:'https://static.wujiabk.com/images/d969869820099ea7f68005642f88617d_loadmore.jpg',
            content:'dsdasd d萨德奥术大师大sd sdasad d撒大声地阿萨德德打算啊',
            tag:'vue',
            look:1233,
            comment:122,
            key:5
        },
        {
            img:'https://static.wujiabk.com/images/cover/7f64df974492c8dd8768a21ea0fe1a3e_jsencrypt.jpg',
            content:'dasd asd sd撒大声地ad阿萨德萨达阿萨德阿萨德萨达萨达阿萨德奥术大师大叔大婶多啊实打实打算阿萨德打算啊',
            tag:'javaScript',
            look:1202,
            comment:12,
            key:6
        },
        {
            img:'https://static.wujiabk.com/images/cover/83e6fc0e91d5771d9590738273688ab8_node_upload.jpg',
            content:'dasd asd sd撒大声地ad阿萨德萨达阿萨德阿萨德萨达萨达阿萨德奥术大师大叔大婶多啊实打实打算阿萨德打算啊',
            tag:'node',
            look:1123,
            comment:1,
            key:7
        },
        {
            img:'https://static.wujiabk.com/images/d969869820099ea7f68005642f88617d_loadmore.jpg',
            content:'dsdasd d萨德奥术大师大sd sdasad d撒大声地阿萨德德打算啊',
            tag:'vue',
            look:1233,
            comment:122,
            key:8
        },
        {
            img:'https://static.wujiabk.com/images/d969869820099ea7f68005642f88617d_loadmore.jpg',
            content:'dsdasd d萨德奥术大师大sd sdasad d撒大声地阿萨德德打算啊',
            tag:'vue',
            look:1233,
            comment:122,
            key:9
        }
    ]
    res.send(arr)
}

getRole=(req,res)=>{
    let results={
        'data': [{
          'id': 'admin',
          'name': '管理员',
          'describe': '拥有所有权限',
          'status': 1,
          'creatorId': 'system',
          'createTime': 1497160610259,
          'deleted': 0,
          'permissions': [{
            'roleId': 'admin',
            'permissionId': 'comment',
            'permissionName': '评论管理',
            'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
            'actionEntitySet': [{
              'action': 'add',
              'describe': '新增',
              'defaultCheck': false
            },
            {
              'action': 'query',
              'describe': '查询',
              'defaultCheck': false
            },
            {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            },
            {
              'action': 'edit',
              'describe': '修改',
              'defaultCheck': false
            },
            {
              'action': 'delete',
              'describe': '删除',
              'defaultCheck': false
            }],
            'actionList': ['delete', 'edit'],
            'dataAccess': null
          },
          {
            'roleId': 'admin',
            'permissionId': 'member',
            'permissionName': '会员管理',
            'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
            'actionEntitySet': [{
              'action': 'add',
              'describe': '新增',
              'defaultCheck': false
            },
            {
              'action': 'query',
              'describe': '查询',
              'defaultCheck': false
            },
            {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            },
            {
              'action': 'edit',
              'describe': '修改',
              'defaultCheck': false
            },
            {
              'action': 'delete',
              'describe': '删除',
              'defaultCheck': false
            }
            ],
            'actionList': ['query', 'get', 'edit', 'delete'],
            'dataAccess': null
          },
          {
            'roleId': 'admin',
            'permissionId': 'menu',
            'permissionName': '菜单管理',
            'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"}]',
            'actionEntitySet': [{
              'action': 'add',
              'describe': '新增',
              'defaultCheck': false
            },
            {
              'action': 'import',
              'describe': '导入',
              'defaultCheck': false
            },
            {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            },
            {
              'action': 'edit',
              'describe': '修改',
              'defaultCheck': false
            }
            ],
            'actionList': ['add', 'import'],
            'dataAccess': null
          },
          {
            'roleId': 'admin',
            'permissionId': 'order',
            'permissionName': '订单管理',
            'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
            'actionEntitySet': [{
              'action': 'add',
              'describe': '新增',
              'defaultCheck': false
            },
            {
              'action': 'query',
              'describe': '查询',
              'defaultCheck': false
            },
            {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            },
            {
              'action': 'edit',
              'describe': '修改',
              'defaultCheck': false
            },
            {
              'action': 'delete',
              'describe': '删除',
              'defaultCheck': false
            }
            ],
            'actionList': ['query', 'add', 'get'],
            'dataAccess': null
          },
          {
            'roleId': 'admin',
            'permissionId': 'permission',
            'permissionName': '权限管理',
            'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
            'actionEntitySet': [{
              'action': 'add',
              'describe': '新增',
              'defaultCheck': false
            },
            {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            },
            {
              'action': 'edit',
              'describe': '修改',
              'defaultCheck': false
            },
            {
              'action': 'delete',
              'describe': '删除',
              'defaultCheck': false
            }
            ],
            'actionList': ['add', 'get', 'edit', 'delete'],
            'dataAccess': null
          },
          {
            'roleId': 'admin',
            'permissionId': 'role',
            'permissionName': '角色管理',
            'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
            'actionEntitySet': [{
              'action': 'add',
              'describe': '新增',
              'defaultCheck': false
            },
            {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            },
            {
              'action': 'edit',
              'describe': '修改',
              'defaultCheck': false
            },
            {
              'action': 'delete',
              'describe': '删除',
              'defaultCheck': false
            }
            ],
            'actionList': null,
            'dataAccess': null
          },
          {
            'roleId': 'admin',
            'permissionId': 'test',
            'permissionName': '测试权限',
            'actions': '[]',
            'actionEntitySet': [],
            'actionList': null,
            'dataAccess': null
          },
          {
            'roleId': 'admin',
            'permissionId': 'user',
            'permissionName': '用户管理',
            'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
            'actionEntitySet': [{
              'action': 'add',
              'describe': '新增',
              'defaultCheck': false
            },
            {
              'action': 'import',
              'describe': '导入',
              'defaultCheck': false
            },
            {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            },
            {
              'action': 'edit',
              'describe': '修改',
              'defaultCheck': false
            },
            {
              'action': 'delete',
              'describe': '删除',
              'defaultCheck': false
            },
            {
              'action': 'export',
              'describe': '导出',
              'defaultCheck': false
            }
            ],
            'actionList': ['add', 'get'],
            'dataAccess': null
          }
          ]
        },
        {
          'id': 'svip',
          'name': 'SVIP',
          'describe': '超级会员',
          'status': 1,
          'creatorId': 'system',
          'createTime': 1532417744846,
          'deleted': 0,
          'permissions': [{
            'roleId': 'admin',
            'permissionId': 'comment',
            'permissionName': '评论管理',
            'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
            'actionEntitySet': [{
              'action': 'add',
              'describe': '新增',
              'defaultCheck': false
            },
            {
              'action': 'query',
              'describe': '查询',
              'defaultCheck': false
            },
            {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            },
            {
              'action': 'edit',
              'describe': '修改',
              'defaultCheck': false
            },
            {
              'action': 'delete',
              'describe': '删除',
              'defaultCheck': false
            }
            ],
            'actionList': ['add', 'get', 'delete'],
            'dataAccess': null
          },
          {
            'roleId': 'admin',
            'permissionId': 'member',
            'permissionName': '会员管理',
            'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
            'actionEntitySet': [{
              'action': 'add',
              'describe': '新增',
              'defaultCheck': false
            },
            {
              'action': 'query',
              'describe': '查询',
              'defaultCheck': false
            },
            {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            }
            ],
            'actionList': ['add', 'query', 'get'],
            'dataAccess': null
          },
          {
            'roleId': 'admin',
            'permissionId': 'menu',
            'permissionName': '菜单管理',
            'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"}]',
            'actionEntitySet': [{
              'action': 'add',
              'describe': '新增',
              'defaultCheck': false
            },
            {
              'action': 'import',
              'describe': '导入',
              'defaultCheck': false
            },
            {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            }
            ],
            'actionList': ['add', 'get'],
            'dataAccess': null
          },
          {
            'roleId': 'admin',
            'permissionId': 'order',
            'permissionName': '订单管理',
            'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
            'actionEntitySet': [{
              'action': 'add',
              'describe': '新增',
              'defaultCheck': false
            },
            {
              'action': 'query',
              'describe': '查询',
              'defaultCheck': false
            },
            {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            },
            {
              'action': 'edit',
              'describe': '修改',
              'defaultCheck': false
            }
            ],
            'actionList': ['add', 'query'],
            'dataAccess': null
          },
          {
            'roleId': 'admin',
            'permissionId': 'permission',
            'permissionName': '权限管理',
            'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
            'actionEntitySet': [{
              'action': 'add',
              'describe': '新增',
              'defaultCheck': false
            },
            {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            },
            {
              'action': 'edit',
              'describe': '修改',
              'defaultCheck': false
            }
            ],
            'actionList': ['add', 'get', 'edit'],
            'dataAccess': null
          },
          {
            'roleId': 'admin',
            'permissionId': 'role',
            'permissionName': '角色管理',
            'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
            'actionEntitySet': [{
              'action': 'add',
              'describe': '新增',
              'defaultCheck': false
            },
            {
              'action': 'edit',
              'describe': '修改',
              'defaultCheck': false
            },
            {
              'action': 'delete',
              'describe': '删除',
              'defaultCheck': false
            }
            ],
            'actionList': null,
            'dataAccess': null
          },
          {
            'roleId': 'admin',
            'permissionId': 'test',
            'permissionName': '测试权限',
            'actions': '[]',
            'actionEntitySet': [],
            'actionList': ['add', 'edit'],
            'dataAccess': null
          },
          {
            'roleId': 'admin',
            'permissionId': 'user',
            'permissionName': '用户管理',
            'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
            'actionEntitySet': [{
              'action': 'add',
              'describe': '新增',
              'defaultCheck': false
            },
            {
              'action': 'import',
              'describe': '导入',
              'defaultCheck': false
            },
            {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            },
            {
              'action': 'edit',
              'describe': '修改',
              'defaultCheck': false
            }
            ],
            'actionList': ['add'],
            'dataAccess': null
          }
          ]
        },
        {
          'id': 'user',
          'name': '普通会员',
          'describe': '普通用户，只能查询',
          'status': 1,
          'creatorId': 'system',
          'createTime': 1497160610259,
          'deleted': 0,
          'permissions': [{
            'roleId': 'user',
            'permissionId': 'comment',
            'permissionName': '评论管理',
            'actions': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
            'actionEntitySet': [{
              'action': 'query',
              'describe': '查询',
              'defaultCheck': false
            },
            {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            }
            ],
            'actionList': ['query'],
            'dataAccess': null
          },
    
          {
            'roleId': 'user',
            'permissionId': 'marketing',
            'permissionName': '营销管理',
            'actions': '[]',
            'actionEntitySet': [],
            'actionList': null,
            'dataAccess': null
          },
          {
            'roleId': 'user',
            'permissionId': 'member',
            'permissionName': '会员管理',
            'actions': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
            'actionEntitySet': [{
              'action': 'query',
              'describe': '查询',
              'defaultCheck': false
            },
            {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            }
            ],
            'actionList': null,
            'dataAccess': null
          },
          {
            'roleId': 'user',
            'permissionId': 'menu',
            'permissionName': '菜单管理',
            'actions': '[]',
            'actionEntitySet': [],
            'actionList': null,
            'dataAccess': null
          },
    
          {
            'roleId': 'user',
            'permissionId': 'order',
            'permissionName': '订单管理',
            'actions': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
            'actionEntitySet': [{
              'action': 'query',
              'describe': '查询',
              'defaultCheck': false
            },
            {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            }
            ],
            'actionList': null,
            'dataAccess': null
          },
          {
            'roleId': 'user',
            'permissionId': 'permission',
            'permissionName': '权限管理',
            'actions': '[]',
            'actionEntitySet': [],
            'actionList': null,
            'dataAccess': null
          },
          {
            'roleId': 'user',
            'permissionId': 'role',
            'permissionName': '角色管理',
            'actions': '[]',
            'actionEntitySet': [],
            'actionList': null,
            'dataAccess': null
          },
    
          {
            'roleId': 'user',
            'permissionId': 'test',
            'permissionName': '测试权限',
            'actions': '[]',
            'actionEntitySet': [],
            'actionList': null,
            'dataAccess': null
          },
          {
            'roleId': 'user',
            'permissionId': 'user',
            'permissionName': '用户管理',
            'actions': '[]',
            'actionEntitySet': [],
            'actionList': null,
            'dataAccess': null
          }
          ]
        }
        ],
        'pageSize': 10,
        'pageNo': 0,
        'totalPage': 1,
        'totalCount': 5
      }
     res.send(results)
}
getBlogInfo=(req,res)=>{
  let Sql = "select * from blog_admin where id=1";
  let SqlArr = [];
  let CallBack = (err, data) => {
      if (err) {
          let nowTime = parseTime.gettime()
          log_out.print("./error.log", nowTime + " : " + err)
      } else {
          res.send({
            code:200,
            data:data[0]
          })
      }
  }
  dbconfig.sqlConnect(Sql, SqlArr, CallBack);
}

getTodayLoginsNumbe = (req, res) => {
    let userInfo = TOKEN.validationToken(req.headers['x-token']);
    if (!userInfo) {
        res.send({ code: 50014, message: "身份过期,请重新登陆" })
        return
    }
    let nowTime = new Date()
    let monthDay = getMonthDay(nowTime)
    let table = config.tableName + monthDay
    let Sql = `SELECT COUNT(openid) as num FROM ${table}`;
    let SqlArr = [];
    let CallBack = (err, data) => {
        if (err) {
            let nowTime = parseTime.gettime()
            log_out.print("./error.log",nowTime + " : " + err)
        } else {
            let nowTime = parseTime.gettime()
            log_out.print("./info.log",nowTime + " 请求成功 "+JSON.stringify(data[0].num))
            res.send({
                code: 20000,
                data: {
                    msgCode: 1,
                    msg: data[0].num
                }
            })
        }
    }
    daconfig_analysis.sqlConnect(Sql, SqlArr, CallBack);
}

module.exports = {
    getTodayLoginsNumbe,
    getComment,
    getNawArticle,
    getRole,
    getBlogInfo
}