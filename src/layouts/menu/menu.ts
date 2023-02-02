//import {AppstoreOutlined,SettingOutlined,ScheduleFilled} from "@ant-design/icons-vue"
import * as Icons from "@ant-design/icons-vue"
const menus: any = [
    {
        key:"admin",
        title:"首页",
        icon: Icons["AppstoreOutlined"],
        children:[
            {
                key:"admin_1",
                title:"分析台",
                path:"/admin/analysis",
            },
            {
                key:"admin_2",
                title:"工作台",
                path:"/admin/work",
            },

        ],
    },
    {
        key:"www",
        title:"官网系统",
        icon:Icons["HomeOutlined"],
        children:[
            {
                key:"www_1",
                title:"账号管理",
                path:"/www/account",
            },
            {
                key:"www_2",
                title:"角色管理",
                path:"/www/role",
            },

        ]
    },
    {
        key:"blog",
        title:"博客系统",
        icon:Icons["ContainerOutlined"],
        children:[
            {
                key:"blog_1",
                title:"分类管理",
                path:"/blog/class",
            },
            {
                key:"blog_2",
                title:"博客管理",
                path:"/blog/blog",
            },
            {
                key:"blog_3",
                title:"添加博客",
                path:"/blog/addBlog",
            },

        ]
    },
    {
        key:"system",
        title:"系统管理",
        icon:Icons["SettingOutlined"],
        children:[
            {
                key:"system_1",
                title:"账号管理",
                path:"/system/account",
            },
            {
                key:"system_2",
                title:"角色管理",
                path:"/system/role",
            },

        ]
    },
    
    // {
    //     key:"about",
    //     title:"关于",
    //     icon:Icons["ScheduleFilled"],
    //     path:"/about",
    // }  
]

export default menus;
