<template>

    <!-- <h1 class="indent-sm text-35px py-4 font-bold">二维码登录</h1> -->
    <FromTitle :title="'二维码登录'" />
    <img src="@/assets/svg/illustration.svg" alt="">

    <Divider class="enter-x">
        <span class="text-sm text-gray-400"> 扫码后点击"确认"，即可完成登录</span>
    </Divider>
    <Button size="large" block class="mt-4 enter-x" @click="handleBackLogin">
        返回
    </Button>
</template>

<script setup lang="ts">
import FromTitle from "./fromTitle.vue"
import { Button, Divider } from 'ant-design-vue';
import { useAppStore } from "@/store/modules/app"
const app = useAppStore()

const handleBackLogin = () => {
    app.setLoginType('user')
}

</script>

<style scoped lang="less">

</style>