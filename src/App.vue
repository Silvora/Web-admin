<template>
  <ConfigProvider :locale="locale">
    <RouterView></RouterView>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from "ant-design-vue"
import { setLangue } from "./utils/i18n"


const locale = setLangue('zh');
</script>

<style scoped>

</style>
