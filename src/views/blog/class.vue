<template>



    <div class="blog_table bg-white m-4 h-auto">
        <Card :tab-list="tabListNoTitle" :active-tab-key="noTitleKey" @tabChange="key => onTabChange(key)">
            <p v-if="noTitleKey === '标签管理'">
            <Table :data-source="dataSourceTag" @onDelete="onDelete"></Table>
            </p>
            <p v-else-if="noTitleKey === '分类管理'">
            <Table :data-source="dataSourceClass" @onDelete="onDelete"></Table>
            </p>
            <template #tabBarExtraContent>
                <Button type="primary" @click="() => { visible = true }">添加</Button>
            </template>
        </Card>

        <Modal v-model:visible="visible" :title="noTitleKey" @ok="handleOk">
            <Input v-model:value="addName" addon-before="名称:" size="large" allow-clear />
        </Modal>
    </div>

</template>

<script setup lang="ts">
import { Card, Button, Modal, Input } from "ant-design-vue"
import { reactive, ref, onMounted } from "vue"
import Table from "./components/table.vue"
import { GetTag, AddTag, DelTag, GetClass, AddClass, DelClass } from "@/api/blog"
import dayjs from "dayjs";
const visible = ref<boolean>(false);
const addName = ref("")
const dataSourceTag = ref<{
    key: number; name: string; cerate: string;
}[]>([])
const dataSourceClass = ref<{
    key: number; name: string; cerate: string;
}[]>([])


const InitData = () => {
    GetTag().then((result: any) => {
        console.log(result)
        result.data.forEach((item: any) => { item["key"] = item.id; dataSourceTag.value.push(item) })
        //console.log(dataSource.value)
    }).catch((err: any) => {
        console.log(err)
    });

    GetClass().then((result: any) => {
        console.log(result)
        result.data.forEach((item: any) => { item["key"] = item.id; dataSourceClass.value.push(item) })
        //console.log(dataSource.value)
    }).catch((err: any) => {
        console.log(err)
    });
}

onMounted(() => {
    InitData()
})

const tabListNoTitle = [
    {
        key: '标签管理',
        tab: '标签管理',
    },
    {
        key: '分类管理',
        tab: '分类管理',
    }
];

const noTitleKey = ref('标签管理');

const onTabChange = (value: string) => {

    noTitleKey.value = value;
};


const onDelete = (key: any) => {

    if (noTitleKey.value == "标签管理") {
        DelTag({ id: key }).then((result) => {
            console.log(result)
            dataSourceTag.value = dataSourceTag.value.filter(item => item.key !== key);

        }).catch((err) => {
            console.log(err)
        });
    }

    if (noTitleKey.value == "分类管理") {
        DelClass({ id: key }).then((result) => {
            console.log(result)
            dataSourceClass.value = dataSourceClass.value.filter(item => item.key !== key);

        }).catch((err) => {
            console.log(err)
        });
    }



};


const handleOk = () => {
    if (addName.value == "") {
        console.log("first")
        return
    }

    if (noTitleKey.value == "标签管理") {
        AddTag({ name: addName.value }).then((result: any) => {
            // console.log(result)
            let obj = {
                key: result.id,
                id: result.id,
                name: addName.value,
                cerate: dayjs().format("YYYY-MM-DD HH:mm:ss"),
            }
            dataSourceTag.value.push(obj)
            //InitData()

        }).catch((err) => {
            console.log(err)
        });
    }

    if (noTitleKey.value == "分类管理") {
        AddClass({ name: addName.value }).then((result: any) => {
            // console.log(result)
            let obj = {
                key: result.id,
                id: result.id,
                name: addName.value,
                cerate: dayjs().format("YYYY-MM-DD HH:mm:ss"),
            }
            dataSourceClass.value.push(obj)
            //InitData()

        }).catch((err) => {
            console.log(err)
        });
    }
    visible.value = false;
}
</script>

<style scoped lang="less">
:global(.blog_table .ant-tabs-nav) {
    border: none;
    height: 48px;
}

:global(.blog_table .ant-tabs-nav-list) {
    height: 45px;
}



.blog_table {
    height: calc(100vh - 112px);
}

.highlight {
    background-color: rgb(255, 192, 105);
    padding: 0px;
}
</style>