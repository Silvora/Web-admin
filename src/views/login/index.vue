<template>
    <div class="login">
        <div class="left">
            <div>
                <img src="@/assets/svg/login-box-bg.svg" alt="">
                <p>欢迎使用管理系统</p>
            </div>
        </div>
        <div class="right">
            <div class="loginFrom">
                <LoginFrom v-if="app.loginType == 'user'" />
                <QrCodeFrom v-if="app.loginType == 'qr'" />
                <PhoneFrom v-if="app.loginType == 'phone'" />
                <RegisterFrom v-if="app.loginType == 'register'" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LoginFrom from "./loginFrom.vue"
import QrCodeFrom from "./qrCodeFrom.vue"
import PhoneFrom from "./phoneFrom.vue"
import RegisterFrom from "./registerFrom.vue"
import { useAppStore } from "@/store/modules/app"

const app = useAppStore()

//const type = ref(app.loginType)




</script>

<style scoped lang="less">
.login {
    width: 100%;
    height: 100vh;
    display: flex;

    // background-image: url("@/assets/svg/login-bg.svg");
    // background-repeat: no-repeat;
    // background-size: auto 100%;
    // background-attachment: fixed;
    // background-color: #464646;
    &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin-left: -48%;
        background-image: url("@/assets/svg/login-bg.svg");
        background-position: 100%;
        background-repeat: no-repeat;
        background-size: auto 100%;
        content: '';
    }

    .left {
        flex: 1;
        z-index: 99;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            display: block;
            width: 60%;
            margin: auto 20%;

        }

        p {
            padding: 16px 0;
            font-size: 30px;
            text-align: center;
            color: white;
        }

        // background-image: url("@/assets/svg/login-bg.svg");
        // background-repeat: no-repeat;
        // //background-size: contain
        // background-size: 100% 100%;
        // background-attachment: fixed;
    }

    .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .loginFrom {
            width: 60%;
        }
    }
}
</style>