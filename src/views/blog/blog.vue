<template>

    <div class="blog_log m-4">
        <Table :dataSource="dataSource" :columns="columns" :scroll="{ y: 850 }" size="small">

            <template #customFilterDropdown="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }">
                <div style="padding: 8px">
                    <Input ref="searchInput" placeholder="搜索" :value="selectedKeys[0]"
                        style="width: 188px; margin-bottom: 8px; display: block"
                        @change="(e: any) => setSelectedKeys(e.target.value ? [e.target.value] : [])"
                        @pressEnter="handleSearch(selectedKeys, confirm, column.dataIndex)" />
                    <Button type="primary" size="small" style="width: 90px; margin-right: 8px"
                        @click="handleSearch(selectedKeys, confirm, column.dataIndex)">
                        <template #icon>
                            <SearchOutlined />
                        </template>
                        搜索
                    </Button>
                    <Button size="small" style="width: 90px" @click="handleReset(clearFilters)">
                        重置
                    </Button>
                </div>
            </template>
            <template #customFilterIcon="{ filtered }">
                <SearchOutlined :style="{ color: filtered ? '#108ee9' : undefined }" />
            </template>

            <template #bodyCell="{ column, text, record }">
                <span v-if="state.searchText && state.searchedColumn === column.dataIndex">
                    <template
                        v-for="(f, i) in text.toString().split(new RegExp(`(?<=${state.searchText})|(?=${state.searchText})`, 'i'))">
                        <mark v-if="f.toLowerCase() === state.searchText.toLowerCase()" :key="i" class="highlight">
                            {{ f }}
                        </mark>
                        <template v-else>{{ f }}</template>
                    </template>
                </span>

                <template v-if="column.dataIndex === 'title'">
                    <Tooltip placement="topLeft">
                        <template #title>{{ record.title }}</template>
                        {{ record.title }}
                    </Tooltip>

                </template>

                <template v-else-if="column.dataIndex === 'tag'">
                    <Tag v-for="(item, i) in record.tag" :key="i" color="#0960bd">{{ item }}</Tag>
                </template>


                <template v-else-if="column.dataIndex === 'action'">
                    <Button type="primary" size="small">编辑</Button>
                    <Popconfirm v-if="dataSource?.length" @confirm="Delete(record.key)">
                        <template #title>
                            <p>是否删除 <span class="text-red-700 font-bold">{{ record.title }}</span></p>
                        </template>

                        <Button type="primary" danger size="small" class="ml-2">删除</Button>
                    </Popconfirm>
                </template>
            </template>

        </Table>

    </div>
</template>

<script setup lang="ts">
import { Divider, Table, Input, Button, Popconfirm, Tag, Tooltip } from "ant-design-vue"
import { reactive, ref, onMounted } from "vue"
import { SearchOutlined } from "@ant-design/icons-vue"
import { GetMarkdown, GetClass, DelMarkdown } from "@/api/blog"
//const { dataSource } = defineProps({ dataSource: { type: Array } })
//const emit = defineEmits(['onDelete'])
const dataSource = ref<any>([])
const searchInput = ref()
const dataClass = ref<any>([])
const columns = [
    {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
        ellipsis: true,
        customFilterDropdown: true,
        onFilter: (value: any, record: any) => record.name.toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible: any) => {
            if (visible) {
                setTimeout(() => {
                    searchInput.value.focus();
                }, 100);
            }
        },
    },
    {
        title: '分类',
        dataIndex: 'class',
        key: 'class',
        filters: dataClass.value,
        onFilter: (value: string, record: any) => record.class.indexOf(value) === 0,

    },
    {
        title: '标签',
        dataIndex: 'tag',
        key: 'tag',

    },
    {
        title: '创建时间',
        dataIndex: 'cerate',
        key: 'cerate',
    },
    {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
    },
]

onMounted(() => {
    GetMarkdown().then((result) => {
        console.log(result)
        result.data.forEach((item: any) => {
            item["key"] = item.uid
            item["tag"] = JSON.parse(item["tag"])
            dataSource.value.push(item)
            // console.log(item)
        })
    }).catch((err) => {
        console.log(err)
    });
    GetClass().then((result) => {
        result.data.forEach((item: any) => {
            let obj = {
                text: item.name,
                value: item.name,
            }
            dataClass.value.push(obj)
            // console.log(item)
        })
    }).catch((err) => {
        console.log(err)
    });
})

const state = reactive({
    searchText: '',
    searchedColumn: '',
});

const handleSearch = (selectedKeys: any, confirm: any, dataIndex: any) => {
    confirm();
    state.searchText = selectedKeys[0];
    state.searchedColumn = dataIndex;
};

const handleReset = (clearFilters: any) => {
    clearFilters({ confirm: true });
    state.searchText = '';
};

const Delete = (key: any) => {

    DelMarkdown({ uid: key }).then((result) => {

        console.log(result)

        dataSource.value = dataSource.value.filter((item: any) => item.key !== key);
    }).catch((err) => {
        console.log(err)
    });
    //emit("onDelete", key)

};

</script>

<style scoped lang="less">
.blog_log {
    height: calc(100vh - 115px);
    background-color: #fff;
}

.highlight {
    background-color: #0960bd;
    color: #fff;
    padding: 0px;
}
</style>