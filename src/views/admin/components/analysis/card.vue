<template>
    <Row :gutter="16">
        <Col :span="6" v-for="item in cardList" :key="item.title">
        <Card :title="item.title" size="small">
            <template #extra>
                <Tag :color="item.color">{{ item.action }}</Tag>
            </template>
            <CountTo :value="item.value" :total="item.total" :img="item.img"></CountTo>
        </Card>
        </Col>
    </Row>

</template>

<script setup lang="ts">
import { Row, Col, Card, Tag } from "ant-design-vue"
import CountTo from "./countTo.vue"
import img1 from "@/assets/icons/visit-count.svg"
import img2 from "@/assets/icons/total-sales.svg"
import img3 from "@/assets/icons/transaction.svg"
import img4 from "@/assets/icons/download-count.svg"
import { ref } from "vue"

const cardList = ref([
    {
        title: "访问数",
        img: "visit-count.svg",
        value: 2000,
        total: 120000,
        color: 'green',
        action: '周',
    },
    {
        title: "用户数",
        img: "total-sales.svg",
        count: 953,
        value: 20000,
        total: 500000,
        color: 'blue',
        action: '周',
    },
    {
        title: "数据库",
        img: "transaction.svg",
        value: 8000,
        total: 120000,
        color: 'orange',
        action: '个',
    },
    {
        title: "网络",
        img: "download-count.svg",
        value: 5000,
        total: 50000,
        color: 'purple',
        action: 'kb',
    }
])

</script>


<style scoped lang="less">
// :global(.ant-card-head) {
//     height: 40px !important;
// }
</style>