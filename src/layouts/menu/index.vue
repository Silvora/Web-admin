<template>


    <Menu theme="dark" mode="inline" v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" class="menu">



        <template v-for="item in menus">
            <template v-if="item.children">
                <SubMenu :key="item.key">
                    <template #title>
                        <component :is="item.icon"></component>
                        <span>{{ item.title }}</span>
                    </template>
                    <template v-for="res in item.children">
                        <router-link :to="res.path">
                            <MenuItem style="height: 48px;" :key="res.key">{{ res.title }}
                            </MenuItem>
                        </router-link>
                    </template>

                </SubMenu>
            </template>
            <template v-else>
                <router-link :to="item.path">
                    <MenuItem :key="item.key">
                    <template #icon>
                        <component :is="item.icon"></component>
                    </template>
                    {{ item.title }}
                    </MenuItem>
                </router-link>
            </template>
        </template>


    </Menu>

</template>

<script setup lang="ts">
// import {
//     HomeOutlined,
//     SettingFilled,
//     SmileOutlined,
//     SyncOutlined,
//     LoadingOutlined,
//     AppstoreOutlined, SettingOutlined, ScheduleFilled
// } from "@ant-design/icons-vue"
import { Menu, SubMenu, MenuItem } from "ant-design-vue"
import { ref } from "vue";
import menus from "./menu";

const openKeys = ref(['admin'])
const selectedKeys = ref(['admin_1']);
// const handleClick = (item: any, key: any, selectedKeys: any) => {
//     console.log(item, key, selectedKeys)
// };
// const handleSelect = (item: any, key: any, selectedKeys: any) => {
//     console.log(item, key, selectedKeys)
// }

// const onOpenChange = (openKeys: string[]) => {
//     //let a = openKeys.shift()
//     console.log(openKeys)
//     let len = openKeys.length
//     if (len > 1) {
//         openKey.value[0] = openKeys[len - 1]
//     } else {
//         openKey.value = []
//     }

// };

</script>

<style scoped lang="less">
:global(.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title) {
    height: 48px;
    line-height: 48px;
}

.menu {
    width: 210px;
    //height: 80vh;
    height: calc(100vh - 48px);
    //background-color: red;
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 3px;
        //display: none;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(144, 147, 153, 0.3);
        border-radius: 20px;
        transition: background-color .3s;
    }

}
</style>