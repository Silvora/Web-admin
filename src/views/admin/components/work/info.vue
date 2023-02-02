<template>

    <Card title="项目">
        <template #extra>更多</template>
        <CardGrid v-for="item in groupItems" :key="item.title" class="!md:w-1/3 !w-full">
            <span class="flex">
                <!-- <Icon :icon="item.icon" :color="item.color" size="30" /> -->
                <Avatar src="https://joeschmoe.io/api/v1/random"></Avatar>
                <span class="text-lg ml-4">{{ item.title }}</span>
            </span>
            <div class="flex mt-2 h-10 text-secondary">{{ item.desc }}</div>
            <div class="flex justify-between text-secondary">
                <span>{{ item.group }}</span>
                <span>{{ item.date }}</span>
            </div>
        </CardGrid>
    </Card>
    <Card title="最新动态" class="mt-4">
        <template #extra>更多</template>
        <List item-layout="horizontal" :data-source="dynamicInfoItems">
            <template #renderItem="{ item }">
                <ListItem>
                    <ListItemMeta>
                        <template #description>
                            {{ item.date }}
                        </template>
                        <!-- eslint-disable-next-line -->
                        <template #title> {{ item.name }} <span v-html="item.desc"> </span> </template>
                        <template #avatar>
                            <!-- <Icon :icon="item.avatar" :size="30" /> -->
                            <Avatar src="https://joeschmoe.io/api/v1/random"></Avatar>
                        </template>
                    </ListItemMeta>
                </ListItem>
            </template>
        </List>
    </Card>

</template>

<script setup lang="ts">
import { Card, CardGrid, List, ListItem, ListItemMeta, Avatar } from "ant-design-vue"
import { dynamicInfoItems, groupItems } from './data';
</script>

<style scoped lang="less">

</style>