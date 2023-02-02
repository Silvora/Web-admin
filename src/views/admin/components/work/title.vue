<template>

    <PageHeader class="bg-white h-120px py-4 px-6">
        <div class="flex">
            <Avatar src="https://joeschmoe.io/api/v1/random" :size="72" class="mx-auto block" />
            <div class="ml-6 flex flex-col justify-center mt-0 ">
                <h1 class="text-lg ">早安, 11111, 开始您一天的工作吧！</h1>
                <span class="text-secondary"> 今日晴，20℃ - 32℃！ </span>
            </div>
            <div class="flex flex-1 justify-end mt-4">
                <div class="flex flex-col justify-center text-center">
                    <span class="text-secondary text-gray-400"> 待办 </span>
                    <span class="text-2xl">2/10</span>
                </div>

                <div class="flex flex-col justify-center text-center mx-12">
                    <span class="text-secondary text-gray-400"> 项目 </span>
                    <span class="text-2xl">8</span>
                </div>
                <div class="flex flex-col justify-center text-center mr-4">
                    <span class="text-secondary text-gray-400"> 团队 </span>
                    <span class="text-2xl">300</span>
                </div>
            </div>
        </div>
    </PageHeader>

</template>

<script setup lang="ts">
import { PageHeader } from "ant-design-vue"
import { Avatar } from 'ant-design-vue';

</script>

<style scoped lang="less">

</style>