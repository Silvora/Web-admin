<template>

    <!-- :rules="getFormRules"  -->
    <!-- v-show="getShow" -->
    <!-- <h1 class="indent-sm text-35px py-4 font-bold">登录</h1> -->
    <FromTitle :title="'登录'" />
    <Form class="p-4 enter-x" :model="formData" ref="formRef" @keypress.enter="handleLogin">
        <FormItem name="account" class="enter-x">
            <Input size="large" v-model:value="formData.account" placeholder="账号" class="fix-auto-fill" />
        </FormItem>
        <FormItem name="password" class="enter-x">
            <InputPassword size="large" visibilityToggle v-model:value="formData.password" placeholder="密码"
                class="fix-auto-fill" />
        </FormItem>

        <Row class="enter-x">
            <Col :span="12">
            <FormItem>
                <!-- No logic, you need to deal with it yourself -->
                <!-- v-model:checked="rememberMe"  -->
                <Checkbox size="small" v-model:checked="rememberMe">
                    记住账号
                </Checkbox>
            </FormItem>
            </Col>
            <Col :span="12">
            <FormItem :style="{ 'text-align': 'right' }">
                <!-- No logic, you need to deal with it yourself -->
                <Button type="link" size="small">
                    忘记密码
                </Button>
            </FormItem>
            </Col>
        </Row>

        <FormItem class="enter-x">
            <Button type="primary" size="large" block>
                登录
            </Button>

            <!-- <Button size="large" class="mt-4 enter-x" block @click="handleRegister">
        {{ t('sys.login.registerButton') }}
      </Button> -->
        </FormItem>
        <Row class="enter-x">
            <Col :md="8" :xs="24">
            <Button block @click="setLoginType('phone')">
                手机登录
            </Button>
            </Col>
            <Col :md="8" :xs="24" class="!my-2 !md:my-0 xs:mx-0 md:mx-2">
            <Button block @click="setLoginType('qr')">
                二维码登录
            </Button>
            </Col>
            <Col :md="6" :xs="24">
            <Button block @click="setLoginType('register')">
                注册
            </Button>
            </Col>
        </Row>

        <Divider class="enter-x"><span class="text-sm text-gray-400">其他登录方式</span></Divider>

        <div class="flex justify-evenly enter-x">
            <GithubFilled />
            <WechatFilled />
            <AlipayCircleFilled />
            <GoogleCircleFilled />
            <TwitterCircleFilled />
        </div>
    </Form>

</template>

<script setup lang="ts">
import FromTitle from "./fromTitle.vue"
import { Checkbox, Form, Input, Row, Col, Button, Divider, FormItem, InputPassword } from 'ant-design-vue';
import {
    GithubFilled,
    WechatFilled,
    AlipayCircleFilled,
    GoogleCircleFilled,
    TwitterCircleFilled,
} from '@ant-design/icons-vue';
import { useAppStore } from "@/store/modules/app"
import { ref, reactive } from 'vue';
const app = useAppStore()

const formRef = ref();
const rememberMe = ref(false);

const formData = reactive({
    account: '',
    password: '',
});

const handleLogin = () => {
    console.log("object");
}

const setLoginType = (type: string) => {
    app.setLoginType(type)
}
</script>

<style scoped lang="less">

</style>