<template>

    <div ref="chartRef" class="w-auto h-310px" id="echarts"></div>

</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { InitCharts } from "@/utils/echarts"
const chartRef = ref(null)
const props = defineProps({ option: { type: Object } })
onMounted(() => {


    InitCharts(chartRef.value, props.option)
})

</script>

<style scoped>

</style>