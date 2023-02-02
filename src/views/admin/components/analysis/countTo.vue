<template>

    <div class="flex text-3xl leading-16">
        <div class="flex-1 indent-xs">{{ props.value }}</div>
        <div>
            <img :src="`../src/assets/icons/${img}`" alt="" class="w-10 h-10  m-3" srcset="" />
        </div>
    </div>
    <div class="flex mt-4">
        <div class="flex-1 indent-xs"><span>总数</span></div>
        <div class="mx-5"><span>{{ props.total }}</span></div>
    </div>


</template>

<script setup lang="ts">
import { any } from 'vue-types';



const props = defineProps({
    value: { type: Number }, img: { type: String }, total: { type: Number }
})
//const img = `@/assets/icons/${props.img}.svg`


</script>

<style scoped>

</style>