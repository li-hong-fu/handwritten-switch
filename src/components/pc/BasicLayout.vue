<template>
  <el-container>
    <!-- <el-aside width="300px"><Aside /></el-aside> -->
    <Aside />
    <el-container>
      <el-header height="64px"><Header /></el-header>
      <el-main><router-view /></el-main>
      <Footer />
    </el-container>
  </el-container>
</template>

<script>
import Aside from "./BasicLayoutAside";
import Header from "./BasicLayoutHrader";
import Footer from "./BasicLayoutFooter";
export default {
  components:{
    Aside,
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>
  .el-container{
    height: 100vh;
    .el-header{
      box-shadow: 0 2px 8px #f0f1f2;
    }
  }
</style>