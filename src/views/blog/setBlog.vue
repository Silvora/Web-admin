<template>
    <Title title="添加博客"></Title>

    <div class="m-4">
        <Form :model="formState" name="basic" :label-col="{ span: 2 }" :wrapper-col="{ span: 22 }" autocomplete="off"
            @finish="onFinish" @finishFailed="onFinishFailed" ref="formRef" class="bg-white p-6">
            <FormItem label="标题" name="title" :rules="[{ required: true, message: '标题不能为空' }]">
                <Input v-model:value="formState.title" />
            </FormItem>
            <FormItem label="分类" name="class" :rules="[{ required: true, message: '分类不能为空' }]">
                <!-- <Input v-model:value="formState.class" /> -->
                <Select size="large" v-model:value="formState.class" :options="dataClass">
                    <!-- <SelectOption value="1">1</SelectOption>
                    <SelectOption value="1">2</SelectOption>
                    <SelectOption value="1">3</SelectOption> -->
                </Select>
            </FormItem>
            <FormItem label="标签" name="tag" :rules="[{ required: true, message: '标签不能为空' }]">
                <!-- <Input v-model:value="formState.tag" /> -->
                <Select size="large" mode="multiple" v-model:value="formState.tag" :options="dataTag"></Select>
            </FormItem>

            <FormItem label="文章" name="text" :rules="[{ required: true, message: '文章不能为空' }]">
                <div ref="mkRef"></div>

            </FormItem>

            <FormItem :wrapper-col="{ offset: 20, span: 4 }">
                <Button @click="resetForm">重置</Button>
                <Button type="primary" html-type="submit" style="margin-left: 16px">提交</Button>
            </FormItem>

        </Form>

    </div>

</template>

<script setup lang="ts">
import {
    defineComponent,
    ref,
    reactive,
    unref,
    nextTick,
    computed,
    watch,
    onMounted,
    onBeforeUnmount,
    onDeactivated,
} from 'vue';
import Vditor from 'vditor';
import 'vditor/dist/index.css';
import Title from "./components/title.vue"
import { Form, FormItem, Input, Button, RadioGroup, RadioButton, Select, SelectOption } from "ant-design-vue"
import { GetClass, GetTag, AddMarkdown } from "@/api/blog"
const formRef = ref();
const mkRef = ref()
const formState = reactive({
    title: '',
    class: '',
    tag: [],
    text: '',
});

const dataTag = ref<any>([])
const dataClass = ref<any>([])
let Editor: any

const InitData = () => {
    GetClass().then((result) => {
        console.log(result)
        result.data.forEach((item: any) => {
            item["value"] = item.name
            item["label"] = item.name
            dataClass.value.push(item)
        })
    }).catch((err) => {
        console.log(err)
    });

    GetTag().then((result) => {
        result.data.forEach((item: any) => {
            item["value"] = item.name
            item["label"] = item.name
            dataTag.value.push(item)
        })

    }).catch((err) => {
        console.log(err)

    });
}

const InitEditor = () => {
    Editor = new Vditor(mkRef.value, {
        height: 500,
        mode: 'sv',
        theme: "classic",//classic dark
        icon: "ant",//ant material
        toolbarConfig: {
            pin: true,
        },
        cache: {
            enable: false,
        },
        tab: '\t',
        // after: () => {
        //     Editor.setValue('hello, Vditor + Vue!')
        // },
        input: (val) => {
            formState.text = val
        }

    })
}

const onFinish = (values: any) => {
    //console.log('Success:', values);
    values["tag"] = JSON.stringify(values["tag"])
    AddMarkdown(values).then((result) => {
        //console.log(result)
        resetForm()
    }).catch((err) => {
        console.log(err)
    });
};


const resetForm = () => {
    formRef.value.resetFields();
    Editor.setValue("")
};

const onFinishFailed = (errorInfo: any) => {

    console.log('Failed:', errorInfo);
};

onMounted(() => {

    nextTick(() => {
        InitData()
        InitEditor()
    })

    // console.log(mkRef.value)

})


onBeforeUnmount(() => {
    Editor.destroy();
    Editor = null
})

</script>

<style scoped lang="less">
:global(.ant-input) {
    padding: 5px 8px;
    font-size: 18px;
}
</style>