<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 轮播图 -->
  <XtxSwiper />
  <!-- 分类面板 -->
  <CategoryPanel />
  <!-- 热门面板 -->
  <HotPanel />
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
