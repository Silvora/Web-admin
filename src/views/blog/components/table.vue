<template>

    <Table :dataSource="dataSource" :columns="columns" :scroll="{ y: 450 }" size="small">

        <!-- <template #headerCell="{ column }">
    <template v-if="column.key === 'name'">
        <span style="color: #1890ff">Name</span>
    </template>
</template> -->

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
            <template v-if="column.dataIndex === 'action'">
                <Popconfirm v-if="dataSource?.length" @confirm="Delete(record.key)">
                    <template #title>
                        <p>是否删除 <span class="text-red-700 font-bold">{{ record.name }}</span></p>
                    </template>
                    <Button type="primary" danger size="small">删除</Button>
                </Popconfirm>
            </template>
        </template>

    </Table>

</template>

<script setup lang="ts">
import { Divider, Table, Input, Button, Popconfirm } from "ant-design-vue"
import { reactive, ref } from "vue"
import { SearchOutlined } from "@ant-design/icons-vue"

const { dataSource } = defineProps({ dataSource: { type: Array } })
const emit = defineEmits(['onDelete'])

const searchInput = ref()
const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
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

    emit("onDelete", key)
};

</script>

<style scoped lang="less">
.highlight {
    background-color: #0960bd;
    color: #fff;
    padding: 0px;
}
</style>