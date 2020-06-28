<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  // created() {
  //   if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
  //     this.$router.push({name:"ABout"})
  //   }else{
  //     this.$router.push({name:"Home"})
  //   }
  // }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
}
</style>
