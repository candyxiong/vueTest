<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import BlogHeader from './components/BlogHeader'

export default {
  name: 'App',
  components: {
    BlogHeader
  }
}
</script>

<style lang="scss">
@import "assets/variable.scss";

  body{
    //background: $background;
  }
</style>
