import {createRouter, createWebHistory} from "vue-router"

//import Index from "@/views/index/index.vue"

import Layout from "../layouts/index.vue"
const routes= [
    {
        path:"/admin",
        name:"Admin",
        meta:{title:"首页"},
        component:Layout,
        //redirect:"/system",
        children:[
            {
                path:"analysis",
                name:"Analysis",
                meta:{title:"分析台"},
                component: ()=>import("@/views/admin/analysis.vue")
            },
            {
                path:"work",
                name:"Work",
                meta:{title:"工作台"},
                component: ()=>import("@/views/admin/work.vue")
            }
        ]
    },
    {
        path:"/blog",
        name:"Blog",
        meta:{title:"博客系统"},
        component:Layout,
        //redirect:"/system",
        children:[
            {
                path:"class",
                name:"Class",
                meta:{title:"分类管理"},
                component: ()=>import("@/views/blog/class.vue")
            },
            {
                path:"blog",
                name:"Blog",
                meta:{title:"博客管理"},
                component: ()=>import("@/views/blog/blog.vue")
            },
            {
                path:"addBlog",
                name:"AddBlog",
                meta:{title:"添加博客"},
                component: ()=>import("@/views/blog/setBlog.vue")
            }
        ]
    },
    {
        path:"/system",
        name:"System",
        meta:{title:"系统管理"},
        component:Layout,
        //redirect:"/system",
        children:[
            {
                path:"account",
                name:"Account",
                meta:{title:"用户管理"},
                component: ()=>import("@/views/system/account.vue")
            },
            {
                path:"role",
                name:"Role",
                meta:{title:"角色管理"},
                component: ()=>import("@/views/system/role.vue")
            }
        ]
    },
    {
        path:"/login",
        name:"Login",
        component: () => import("@/views/login/index.vue"),
        children:[
            {
                path:"a",
                component: ()=>import("@/views/system/role.vue")
            },
            {
                path:"b",
                component: ()=>import("@/views/system/account.vue")
            }
        ]
    },
    {
        path:"/",
        redirect:"/admin/analysis",
    },
    
   
]



const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router