<template>
    <div class="where">
        <div class="title"><p class="title-desc">周末去哪儿</p></div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div> 
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
      list: Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.where
    margin-top .2rem
    .title 
        line-height: 0.8rem
        background-color: white
        text-indent: 0.2rem
        .title-desc
            font-size 16px
            font-family Arial,Verdana,Sans-serif
    .item
        background-color white
        .item-img-wrapper
            overflow hidden
            height 0
            padding-bottom 37.09%
            .item-img 
                width: 100%
        .item-info 
            padding: .1rem
            .item-title 
                line-height: .54rem
                font-size: .32rem
                ellipsis()
            .item-desc 
                line-height: 0.4rem
                color: #ccc
                ellipsis()
</style>