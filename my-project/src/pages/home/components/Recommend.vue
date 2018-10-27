<template>
    <div>
        <div class="title"><span class="iconfont love-icon">&#xe60c;</span><p class="title-desc">猜你喜欢</p></div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
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
            "http://img1.qunarzz.com/sight/p0/1503/33/33f6ddd58bf9811.water.jpg_200x200_8fc46d88.jpg",
          title: "响沙湾",
          desc: "内蒙古鄂尔多斯市达拉特旗响沙湾"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1710/36/3626151932799e9aa3.img.jpg_200x200_340c950e.jpg",
          title: "万家惠欢乐世界",
          desc: "内蒙古鄂尔多斯市达拉特旗响沙湾"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1705/c6/c6d282a696ad2836a3.img.jpg_200x200_fff0128f.jpg",
          title: "夜鸣沙旅游区",
          desc: "内蒙古鄂尔多斯市达拉特旗响沙湾"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
.title 
    margin-top: 0.1rem;
    line-height: 0.8rem;
    background-color: #ccc;
    text-indent: 0.2rem;
    .love-icon 
        display: block;
        float: left;
        color: rgb(255, 91, 88);
        font-size: 20px;
    .title-desc
        font-size 16px
        font-family Arial,Verdana,Sans-serif
.item
    overflow: hidden;
    display: flex;
    height: 1.9rem;
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
