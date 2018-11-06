<template>
    <div>
        <div class="title"><span class="iconfont love-icon">&#xe60c;</span><p class="title-desc">猜你喜欢</p></div>
        <ul>
            <router-link 
            tag="li"
            class="item border-bottom" 
            v-for="item of list" 
            :key="item.id"
            :to="'/detail/' + item.id"
            >
                <img class="item-img" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div> 
            </router-link>
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
@import '~styles/mixins.styl';
.title 
    margin-top: 0.1rem
    line-height: 0.8rem
    background-color: white
    text-indent: 0.2rem
    .love-icon 
        display: block
        float: left
        color: rgb(255, 91, 88)
        font-size: 20px
    .title-desc
        font-size 16px
        font-family Arial,Verdana,Sans-serif
.item
    overflow: hidden
    display: flex
    height: 1.9rem
    background-color white
    .item-img 
        width: 1.7rem;
        height: 1.7rem;
        padding: 0.1rem;
    .item-info 
        flex: 1;
        padding: 0.1rem;
        min-width: 0;
        .item-title 
            line-height: 0.54rem;
            font-size: 0.32rem;
            ellipsis();
        .item-desc 
            line-height: 0.4rem;
            color: #ccc;
            ellipsis();
        .item-button
            line-height: 0.44rem;
            margin-top: 0.16rem;
            background-color: #ff9300;
            padding: 0 0.2rem;
            border-radius: 0.06rem;
            color: #fff;
</style>
