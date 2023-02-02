<template>

    <Row :gutter="16" class="mt-4">
        <Col :span="8">
        <Card title="转化率" size="default">
            <div ref="radarRef" class="h-350px"></div>
        </Card>
        </Col>
        <Col :span="8">
        <Card title="访问来源" size="default">
            <div ref="DoughnutPieRef" class="h-350px"></div>
        </Card>
        </Col>
        <Col :span="8">
        <Card title="成交占比" size="default">
            <div ref="NightingalePieRef" class="h-350px"></div>
        </Card>
        </Col>
    </Row>

</template>

<script setup lang="ts">
import { Row, Col, Card } from "ant-design-vue"
import { ref, onMounted } from "vue";
import { InitCharts } from "@/utils/echarts"
import { radar, DoughnutPie, NightingalePie } from "./classCharts"
let radarRef = ref(null)
let DoughnutPieRef = ref(null)
let NightingalePieRef = ref(null)

onMounted(() => {
    InitCharts(radarRef.value, radar)
    InitCharts(DoughnutPieRef.value, DoughnutPie)
    InitCharts(NightingalePieRef.value, NightingalePie)
})
</script>

<style scoped lang="less">

</style>