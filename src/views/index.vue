<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>

      <el-container>
        <el-aside>
          <LeftMenu></LeftMenu>
        </el-aside>
        <el-container>
          <el-main>
            <el-card :body-style="siteContent.siteContentHeight">
              <router-view></router-view>
            </el-card>
          </el-main>
          <el-footer>
            <Footer class=""></Footer>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import LeftMenu from '../components/LeftMenu.vue'
import Footer from '../components/Footer.vue'

import {ref,reactive} from 'vue'
const siteContent = reactive({
  documentClientHeight:0,
  siteContentHeight:{}
})

function getSiteContentHeight(){
  siteContent.documentClientHeight = document.documentElement.clientHeight;
  let height = siteContent.documentClientHeight - 100-90;
  siteContent.siteContentHeight = {minHeight: height + 'px'};
}
getSiteContentHeight();

// 监听窗口大小变化
window.onresize = function(){
  getSiteContentHeight();
}

</script>

<style lang="less">
@import url('../styles/style.less');
</style>