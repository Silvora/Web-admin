<template>

    <Card title="快捷导航">
        <CardGrid v-for="item in navItems" :key="item.title">
            <!-- <template #icon>
                <component :is="item.icon"></component>
            </template> -->

            <!-- <Icons>
                <template #component>
                    <div>
                        {{ item.icon }}
                    </div>
                </template>
            </Icons> -->

            <span class="flex flex-col items-center">
                <div :style="{ color: item.color, fontSize: '20px' }">
                    <component :is="item.icon">
                    </component>
                </div>


                <span class="text-md mt-2 truncate">{{ item.title }}</span>
            </span>
        </CardGrid>
    </Card>

    <Card class="mt-4">
        <img class="h-50 mx-auto" src="@/assets/svg/illustration.svg" />
    </Card>

    <Card title="统计" class="mt-4">
        <div ref="StatisticsRef" class="h-400px"></div>
    </Card>

</template>

<script setup lang="ts">
import { Card, CardGrid } from "ant-design-vue"
import Icons from "@ant-design/icons-vue"
import { navItems, radar } from "./data"
import { ref, onMounted } from "vue";
import { InitCharts } from "@/utils/echarts"
const StatisticsRef = ref(null)
onMounted(() => {
    InitCharts(StatisticsRef.value, radar)
})
</script>

<style scoped lang="less">

</style>