<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>

      <el-container>
        <el-aside >
          <LeftMenu></LeftMenu>
        </el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
  import Header from '../components/Header.vue'
  import LeftMenu from '../components/LeftMenu.vue'
</script>

<style lang="less">
  @import url('../styles/style.less');
</style>