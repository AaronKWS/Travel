<template>
<div class="wrapper">
    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgURL">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
   </swiper>
</div>
</template>

<script>
export default{
    name: 'HomeSwiper',
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            },
            swiperList: [{
                id: '0001',
                imgURL: "http://img1.qunarzz.com/piao/fusion/1809/31/da037478f37cf202.jpg_750x200_a02cf862.jpg"
            },{
                id: '0002',
                imgURL: "http://img1.qunarzz.com/piao/fusion/1809/ff/1bf7d3a4f6591002.jpg_750x200_40809f2a.jpg"
            },{
                id: '0003',
                imgURL: "http://img1.qunarzz.com/piao/fusion/1810/76/3b0c44d5d5d37c02.jpg_750x200_5a0f8746.jpg"
            },{
                id: '0004',
                imgURL: "http://img1.qunarzz.com/piao/fusion/1809/91/8d94258b8fcfc02.jpg_750x200_2bff1dbf.jpg"
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
            background #fff
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 26.67%
        background-color #eee
        .swiper-img
            width 100%
</style>
