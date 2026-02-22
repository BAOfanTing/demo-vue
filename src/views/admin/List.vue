
<template>
    <div>
        <h1>管理员信息管理</h1>
    </div>
    <el-form :inline="true">
        <el-form-item label="姓名">
            <el-input v-model="queryForm.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="电话">
            <el-input v-model="queryForm.tel" placeholder="请输入电话" />
        </el-form-item>

        <el-form-item>
            <el-button @click="onSearch" type="primary">查询</el-button>
            <el-button type="primary">新增</el-button>
            <el-button type="danger">删除</el-button>
        </el-form-item>

    </el-form>
    <el-divider />
    <el-table :data="datalist" v-loading="listloading" :header-cell-style="{'background-color': '#f5f7fa'}">
         <el-table-column type="selection" width="55" />
        <el-table-column  header-align="center" prop="username" label="用户名" />
        <el-table-column  header-align="center" prop="name" label="姓名" />
        <el-table-column  header-align="center" prop="sex" label="性别" />
        <el-table-column  header-align="center" prop="tel" label="电话" />
        <el-table-column  header-align="center" prop="heardurl" label="头像" />

        <el-table-column  header-align="center" prop="createTime" label="操作" width="150">
            <template #default="scope">
                <el-button type="text" size="mini">编辑</el-button>
                <el-button type="text" size="mini">删除</el-button>
            </template>
        </el-table-column>

        
    </el-table>

    <el-pagination background layout="prev, pager, next" :total="total"  style="float: right;margin: 20px 20px 20px 0px;"/>

</template>

<script setup lang="ts">
import { ElButton } from 'element-plus';
import {ref, reactive} from 'vue'
import { adminApi } from '@/api/admin-api';
import {onMounted} from 'vue'
import Constants from '@/utils/constants';

//列表数据
const datalist = ref([]);
//列表加载状态
const listloading = ref(false);
//列表总条数
const total = ref(0);

//查询参数
const queryFormParams =
{
    name: '',
    tel: '',
    pageNum: 1,
    pageSize: Constants.PAGE_SIZE,
}

// 使用 reactive 创建响应式对象，复制初始参数以便后续修改不影响原始常量
const queryForm = reactive({...queryFormParams})

function onSearch()
{
    queryForm.pageNum = 1;
    getList();
}

async function getList() {
   try{
    listloading.value = true;
    let responseModel= await adminApi.queryPageList(queryForm,queryForm.pageNum,queryForm.pageSize);
    datalist.value = responseModel.data.list;
    total.value = responseModel.data.total;

   }catch(error){
    console.log(error);
   }finally{
    listloading.value = false;
   }
}

//页面加载时查询列表
onMounted(getList);

</script>
