<template>

    <Space :size="0">
        <div class="iconInfo" @click="showModal">
            <SearchOutlined />
        </div>
        <div class="iconInfo">
            <BellOutlined />
        </div>
        <div class="iconInfo" @click="toggle">
            <FullscreenOutlined v-if="!isFullscreen" />
            <FullscreenExitOutlined v-else />
        </div>
        <div class="iconInfo">
            <TranslationOutlined />
        </div>
        <Dropdown placement="bottomRight">
            <div class="avatarInfo">
                <Avatar size="small">
                    <template #icon>
                        <UserOutlined />
                    </template>
                </Avatar>
                <span class="userName">Admin</span>
            </div>
            <template #overlay>
                <Menu>
                    <MenuItem>
                    <LockOutlined />
                    锁定屏幕
                    </MenuItem>
                    <MenuItem>
                    <PoweroffOutlined />
                    退出系统
                    </MenuItem>
                </Menu>
            </template>


        </Dropdown>
        <div class="iconInfo">
            <SettingOutlined />
        </div>
    </Space>
    <Modal :dialogStyle="{ backgroundColor: 'green' }" :body-style="{
        borderRadius: '8px',
        padding: '16px',
    }" :closable="false" v-model:visible="visible" @ok="handleOk">
        <Input class="" size="large" ref="inputRef" allow-clear placeholder="搜索">
        <template #prefix>
            <SearchOutlined />
        </template>
        </Input>
        <div class="w-auto h-32 text-center leading-32 mt-4 text-gray-400">
            暂无搜索结果
        </div>

        <template #footer>
            <div class="flex items-center">
                <EnterOutlined class=" bg-gray-100 p-1"
                    style="box-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff, 0 1px 2px 1px rgb(30 35 90 / 40%);" />
                <span class="text-xs px-2 pl-1">确认</span>
                <ArrowUpOutlined class=" bg-gray-100 p-1"
                    style="box-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff, 0 1px 2px 1px rgb(30 35 90 / 40%);" />
                <ArrowDownOutlined class=" bg-gray-100 p-1 ml-2"
                    style="box-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff, 0 1px 2px 1px rgb(30 35 90 / 40%);" />
                <span class="text-xs px-2 pl-1">切换</span>

                <span class=" bg-gray-100 p-1 ml-2"
                    style="box-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff, 0 1px 2px 1px rgb(30 35 90 / 40%);font-size: 12px;transform: scale(0.8);">ESC</span>
                <span class="text-xs px-2 pl-1">关闭</span>
            </div>
        </template>
    </Modal>
</template>

<script setup lang="ts">
import { Space, Avatar, Dropdown, Menu, MenuItem, Modal, Input } from "ant-design-vue"
import { SearchOutlined, BellOutlined, FullscreenOutlined, TranslationOutlined, SettingOutlined, UserOutlined, PoweroffOutlined, LockOutlined, FullscreenExitOutlined, EnterOutlined, ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons-vue"
import { useFullscreen } from '@vueuse/core'
import { ref } from "vue";


let app = document.getElementById("app")

const { isFullscreen, enter, exit, toggle } = useFullscreen(app)

const visible = ref<boolean>(false);
const showModal = () => {
    visible.value = true;
};

const handleOk = (e: MouseEvent) => {
    console.log(e);
    visible.value = false;
};
</script>

<style scoped lang="less">
:global(.ant-modal-content) {
    border-radius: 8px;
}

:global(.ant-modal-content .ant-input-affix-wrapper-lg) {
    font-size: 18px;
    border-radius: 8px;
}


.iconInfo {
    width: 36px;
    text-align: center;

    &:hover {
        background-color: #ccc;
    }
}

.avatarInfo {
    padding: 0 12px;

    &:hover {
        background-color: #ccc;
    }

    .userName {
        font-size: 14px;
        padding-left: 8px;
    }
}

.footerIcon {
    background-color: rgba(243, 244, 246, .1)
}
</style>