<template>
    <div class="where">
        <div class="title"><p class="title-desc">周末去哪儿</p></div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1711/a1/6d51d5059274da.jpg_r_640x214_34ec6f3e.jpg",
          title: "内蒙古泡汤圣地",
          desc: "内蒙古冬季不再冷，来泡温泉吧"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1606/a2/c10424cf4acf79.jpg_r_640x214_d83730b5.jpg",
          title: "呼市必游TOP5",
          desc: "蒙古族歌手高亢，使人回味悠长"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1511/14/1cf5dc2ecbfc16.jpg_r_640x214_b4b3a58a.jpg",
          title: "最美丝路行",
          desc: "情系西北，中国梦丝路行"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.where
    margin-top .2rem
    .title 
        margin-top: 0.1rem
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
            padding-bottom 33.9%
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