<template>

    <h1 class="indent-sm text-35px py-4 font-bold">{{ props.title }}</h1>

</template>

<script setup lang="ts">
import { string } from 'vue-types';


const props = defineProps({ title: { type: String } })

</script>

<style scoped lang="less">

</style>