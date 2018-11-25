<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="stylus" scoped>
  #app
    background-color rgb(245,245,245)
</style>
