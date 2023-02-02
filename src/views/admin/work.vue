<template>

    <div>
        <Title></Title>
        <div class="m-4">
            <Row :gutter="16">
                <Col :span="16">
                <Info></Info>
                </Col>
                <Col :span="8">
                <Nav></Nav>
                </Col>
            </Row>
        </div>
    </div>

</template>

<script setup lang="ts">
import { Row, Col } from "ant-design-vue"
import Title from "./components/work/title.vue"
import Info from "./components/work/info.vue"
import Nav from "./components/work/nav.vue"
</script>

<style scoped>

</style>