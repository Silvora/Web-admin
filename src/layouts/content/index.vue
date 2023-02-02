<template>

    <main class="main" ref="mainRef">

        <!-- <Tabs v-model:activeKey="activeKey" hide-add type="editable-card" :tabBarGutter="8"
            :tabBarStyle="{ padding: '0 0.5rem', backgroundColor: '#fff' }" @edit="onEdit" @change="handleTabsItem">

            <TabPane v-for="item in panes" :key="item.key" :tab="item.title" :closable="item.closable">tag</TabPane>

            <template #rightExtra>
                <div class="flex border-t-dark-200">
                    <div class="routerIcon">
                        <RedoOutlined />
                    </div>
                    <div class="routerIcon">
                        <DownOutlined />
                    </div>
                    <div class="routerIcon">
                        <CompressOutlined />
                    </div>
                </div>
            </template>

        </Tabs> -->
        <Tabs v-model:activeKey="activeKey" hide-add type="editable-card" @edit="onEdit" @change="handleTabsItem"
            :tab-bar-gutter="6" :tab-bar-style="{ padding: '0 0 0 0.5rem' }">
            <TabPane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
            </TabPane>
            <template #rightExtra>
                <div class="flex border-t-dark-200">
                    <div class="routerIcon">
                        <RedoOutlined />
                    </div>
                    <div class="routerIcon">
                        <DownOutlined />
                    </div>
                    <div class="routerIcon" @click="toggle">
                        <CompressOutlined />
                    </div>
                </div>
            </template>
        </Tabs>

        <div class="content">

            <RouterView v-slot="{ Component }">
                <Transition name="slide-fade">

                    <KeepAlive include="Admin">
                        <component :is="Component"></component>
                    </KeepAlive>

                </Transition>

            </RouterView>

        </div>

    </main>

</template>

<script setup lang="ts">
import { Tabs, TabPane } from "ant-design-vue"
import { RedoOutlined, DownOutlined, CompressOutlined } from "@ant-design/icons-vue"
import { ref, watch, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useFullscreen } from '@vueuse/core'

const mainRef = ref(null)

const { isFullscreen, enter, exit, toggle } = useFullscreen(mainRef)

let fullHeight = ref(isFullscreen ? '80px' : '32px')

const route = useRoute()
const router = useRouter()

const panes = ref([
    {
        key: "Analysis",
        title: "分析台",
        path: "/admin/analysis",
        closable: false
    }
]);

const activeKey = ref(panes.value[0].key)

const remove = (targetKey: string) => {
    let lastIndex = 0;
    panes.value.forEach((pane, i) => {
        if (pane.key == targetKey) {
            lastIndex = i - 1;
        }
    });

    panes.value = panes.value.filter(pane => pane.key != targetKey);

    if (panes.value.length && activeKey.value == targetKey) {
        if (lastIndex >= 0) {
            activeKey.value = panes.value[lastIndex].key;
            handleTabsItem(panes.value[lastIndex].key)

        } else {
            activeKey.value = panes.value[0].key;
            handleTabsItem(panes.value[0].key)

        }

    }

};

const onEdit = (targetKey: string) => {


    remove(targetKey);

};

const handleTabsItem = (activeKey: string) => {
    //console.log(activeKey)
    panes.value.forEach((item: any) => {
        if (item.key == activeKey) {
            router.push(item.path)
        }
    })
}

watch(route, () => {

    if (panes.value.find((item: any) => item.key == route.name)) {
        activeKey.value = String(route.name)
    } else {
        let data: any = {
            key: route.name,
            title: route.meta.title,
            path: route.path,
        }
        panes.value.push(data)
        activeKey.value = String(route.name)
    }

}, { deep: true })



</script>

<style scoped lang="less">
:global(.ant-tabs-nav) {
    height: 32px;
    background-color: #fff;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}

:global(.ant-tabs-nav-list) {
    //width: 100%;
    // margin: 0 5rem;
    background-color: #fff;
    height: 26px;
    top: 2px //padding: 0 1.5rem;
}

:global(.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab-active) {
    background-color: #0960bd;
}

:global(.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab-active .ant-tabs-tab-btn) {
    color: white;
}

:global(.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab-active .ant-tabs-tab-remove) {
    color: #fafafa;
}

:global(.ant-tabs-tab-remove) {
    color: white;
    //display: none;
}

:global(.ant-tabs-top > .ant-tabs-nav) {
    margin: 0;
}



.main {
    width: 100%;
    height: calc(100vh - 48px);
    //height: 100vh;
    // overflow: hidden;
    // overflow-y: auto;
    //background-color: green;


    .content {
        //background-color: #fff;
        width: 100%;
        //height: calc(100vh - 82px); // height: calc(100vh - v-bind(fullHeight));
        background-color: #e5e7eb;
        height: calc(100% - 32px);

        overflow: hidden;
        overflow-y: auto;

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

    .routerIcon {
        width: 32px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border-left: 1px solid #ccc;
    }
}

.slide-fade-enter-active {
    transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}
</style>