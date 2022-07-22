<template>
    <div>
  <div :style="{ marginLeft: '2%' }">
    <h2>UI & Markup Technology</h2>
    <br />
    <router-link to="/">Home </router-link> 
    <router-link to="/about">About us </router-link> 
    <router-link to="/contact">Contact us </router-link>
    <hr />
    <router-view></router-view>
  </div>
    </div>
</template>

<script>
    export default {
        name:"nav-bar"
    }
</script>

<style lang="scss" scoped>

</style>