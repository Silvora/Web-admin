<template>

    <Layout>
        <Sider></Sider>
        <Layout>
            <Header></Header>
            <Content></Content>
        </Layout>
    </Layout>


</template>

<script setup lang="ts">
import { Layout } from "ant-design-vue"
import Sider from "./sider/index.vue"
import Header from "./header/index.vue"
import Content from "./content/index.vue"

</script>

<style scoped lang="less">
.layout {
    width: 100%;
    height: 100vh;
    display: flex;
}
</style>