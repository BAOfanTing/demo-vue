<script setup lang="ts">
import { ElButton } from 'element-plus';

</script>

<template>
    <div>
        <h1>管理员信息管理</h1>
    </div>
    <el-form :inline="true">
        <el-form-item label="姓名">
            <el-input placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="电话">
            <el-input placeholder="请输入电话" />
        </el-form-item>

        <el-form-item>
            <el-button type="primary">查询</el-button>
            <el-button type="primary">新增</el-button>
            <el-button type="danger">删除</el-button>
        </el-form-item>

    </el-form>
    <el-divider />
    <el-table :header-cell-style="{'background-color': '#f5f7fa'}">
         <el-table-column type="selection" width="55" />
        <el-table-column  header-align="center" prop="username" label="用户名" />
        <el-table-column  header-align="center" prop="name" label="姓名" />
        <el-table-column  header-align="center" prop="sex" label="性别" />
        <el-table-column  header-align="center" prop="tel" label="电话" />
        <el-table-column  header-align="center" prop="heardurl" label="头像" />

        <el-table-column  header-align="center" prop="createTime" label="操作" width="150">
            <template slot-scope="scope">
                <el-button type="primary" size="mini">编辑</el-button>
                <el-button type="danger" size="mini">删除</el-button>
            </template>
        </el-table-column>

        
    </el-table>

    <el-pagination background layout="prev, pager, next" :total="1000"  style="float: right;margin: 20px 20px 20px 0px;"/>

</template>
