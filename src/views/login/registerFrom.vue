<template>


    <FromTitle :title="'注册'" />

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