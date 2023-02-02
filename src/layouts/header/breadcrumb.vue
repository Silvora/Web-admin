<template>

    <Breadcrumb class="leading-12 px-4">
        <template v-for="route in routerTag" :key="route.name">
            <template v-if="route.children.length > 0">
                <BreadcrumbItem href="">
                    <span>{{ route.meta.title }}</span>
                    <template #overlay>
                        <Menu>
                            <template v-for="item in route.children" :key="item.name">
                                <router-link :to="item.path">
                                    <MenuItem>
                                    <span>{{ item.meta.title }}</span>
                                    </MenuItem>
                                </router-link>
                            </template>
                        </Menu>
                    </template>
                </BreadcrumbItem>
            </template>
            <template v-else>
                <BreadcrumbItem :to="route.path">
                    {{ route.meta.title }}
                </BreadcrumbItem>
            </template>
        </template>
        <!-- <BreadcrumbItem href="">
            <span>{{ perRoute }}</span>
            <template #overlay>
                <Menu>
                    <MenuItem>
                    <span>sss</span>
                    </MenuItem>
                    <MenuItem>
                    <span>sssss</span>
                    </MenuItem>
                </Menu>
            </template>
        </BreadcrumbItem>
        <BreadcrumbItem>{{ currRoute }}</BreadcrumbItem> -->
    </Breadcrumb>

</template>

<script setup lang="ts">
import { Breadcrumb, BreadcrumbItem, Menu, MenuItem } from "ant-design-vue"
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
const route = useRoute()

const routerTag = ref()
//const router = useRouter()
//console.log(route.matched)
//const route = useRoute()
//currRoute.value = route.meta.title
// watch(() => route, (newRouter, oldRouter) => {
//     console.log("-------->", newRouter.matched, oldRouter)
// }, { deep: true })
watchEffect(() => {
    routerTag.value = route.matched
})

</script>

<style scoped>

</style>