<template>
    <LayoutSider v-model:collapsed="app.collapsed" :trigger="null" collapsible width="210px" collapsed-width="50">
        <div class="h-12 bg-[#001529] flex">
            <img src="@/assets/images/logo.png" alt="logo" class="w-8 h-8 m-2">
            <span class="text-lg font-extrabold leading-12 text-white px-2" v-if="!app.collapsed">Zjs-7579</span>
        </div>
        <Menu></Menu>
    </LayoutSider>

</template>

<script setup lang="ts">
import { LayoutSider } from "ant-design-vue"
import Menu from "../menu/index.vue"
//import { storeToRefs } from "pinia"
import { useAppStore } from "../../store/modules/app"
const app = useAppStore()

//let { collapsed } = storeToRefs(global)

//console.log(global.collapsed)
</script>

<style scoped lang="less">

</style>