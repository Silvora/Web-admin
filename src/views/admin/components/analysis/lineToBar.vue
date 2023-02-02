<template>
    <Card class="w-auto mt-4" :tab-list="tabListNoTitle" :active-tab-key="noTitleKey"
        @tabChange="key => onTabChange(key, 'noTitleKey')">
        <!-- <p>流量趋势</p>
        <p>访问量</p> -->
        <p v-if="noTitleKey === 'flow'">
            <Echart :option="line"></Echart>
        </p>
        <p v-else-if="noTitleKey === 'visits'">
            <Echart :option="bar"></Echart>
        </p>
        <!-- <p v-else>project content</p> -->
    </Card>
</template>

<script setup lang="ts">
import { Card } from "ant-design-vue"
import { ref } from "vue";
import Echart from "./echart.vue"
import { line, bar } from "./echarts"
const noTitleKey = ref('flow');
const tabListNoTitle = [
    {
        key: 'flow',
        tab: '流量趋势',
    },
    {
        key: 'visits',
        tab: '访问量',
    }
];
const onTabChange = (value: string, type: string) => {

    noTitleKey.value = value;
};

</script>

<style scoped lang="less">
:global(.content .ant-tabs-nav) {
    border: none;
    height: 48px;
}

:global(.content .ant-tabs-nav-list) {
    height: 45px;
}
</style>