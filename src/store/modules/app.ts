import {defineStore} from "pinia"
import { ref } from "vue"

export const useAppStore = defineStore("app",()=>{

    let collapsed = ref(false)
    let loginType = ref("user")
    const setCollapsed=()=>{
        collapsed.value = !collapsed.value
    }
    const setLoginType=(state:string)=>{
        loginType.value = state
    }

    return {collapsed,setCollapsed,loginType,setLoginType}
    // state: () => {
    //     return {
    //         collapsed:false,
    //     }
    // },
    // actions:{
    //     setCollapsed(){
    //         this.collapsed = !this.collapsed
    //     }
    // }
})

