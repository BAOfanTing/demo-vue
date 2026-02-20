<template>
  <div class="pdm-sidebar__inner">
    <el-menu 
      :collapseTransition="false" 
      class="pdm-sidebar__menu" 
      background-color="#263238"
      active-text-color="#fff" 
      text-color="#8a979e"
    >
      <el-menu-item index="welcome" @click="$router.push({ path: '/welcome' })">
        <el-icon>
          <document />
        </el-icon>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-sub-menu index="管理员信息管理" :popper-class="'pdm-sidebar--dark-popper'">
        <template #title>
          <el-icon>
            <document />
          </el-icon>
          <span slot="title">管理员信息管理</span>
        </template>
        <el-menu-item index="admin" @click="$router.push({ path: '/admin' })">
          <el-icon>
            <document />
          </el-icon>
          <span slot="title">管理员信息管理</span>
        </el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="组织管理2" :popper-class="'pdm-sidebar--dark-popper'">
        <template #title>
          <el-icon>
            <Clock />
          </el-icon>
          <span slot="title">组织管理</span>
        </template>
        <el-menu-item index="MisDept" @click="$router.push({ name: 'MisDept' })">
          <el-icon>
            <Clock />
          </el-icon>
          <span slot="title">部门管理</span>
        </el-menu-item>
        <el-menu-item index="MisDept" @click="$router.push({ name: 'MisDept' })">
          <el-icon>
            <Clock />
          </el-icon>
          <span slot="title">部门管理</span>
        </el-menu-item>
        <el-menu-item index="MisDept" @click="$router.push({ name: 'MisDept' })">
          <el-icon>
            <Clock />
          </el-icon>
          <span slot="title">部门管理</span>
        </el-menu-item>
      </el-sub-menu>

    </el-menu>
  </div>
</template>


<script lang="ts" setup>
import{
    Document,
    Menu as IconMenu,
    Location,
    Clock,
    Setting,
}from '@element-plus/icons-vue'


</script>