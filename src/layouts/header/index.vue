<template>
    <LayoutHeader class="h-12 bg-white
    p-0">
        <div class="w-full h-12 leading-12 text-lg flex">
            <div>
                <MenuFoldOutlined class="px-2" @click="handleIcon" v-if="!app.collapsed" />
                <MenuUnfoldOutlined class="px-2" @click="handleIcon" v-else />
            </div>
            <Breadcrumb class="flex-auto"></Breadcrumb>
            <UserInfo></UserInfo>

        </div>
        <!-- <div class="h-8 leading-8 border-gary border-1 flex">
            <RouterTag></RouterTag>
        </div> -->
    </LayoutHeader>
</template>

<script setup lang="ts">
import { LayoutHeader } from "ant-design-vue"
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue"
import Breadcrumb from "./breadcrumb.vue"
import UserInfo from "./userInfo.vue"
import { useAppStore } from "@/store/modules/app"
const app = useAppStore()

const handleIcon = () => {
    app.setCollapsed()
}

</script>

<style scoped>

</style>