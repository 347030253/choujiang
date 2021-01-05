<template>
  <div class="panel">
    <div class="top">
      <img src="@/assets/images/zjmd.png" alt="" />
    </div>
    <div class="content flex">
      <div class="sides">
        <div class="sideTitle">
          <img src="@/assets/images/special.png" alt="" />
        </div>
        <div class="nameList">
          <div class="article-content">
            <div
              class="nameDiv flex"
              v-for="(item, index) in specList"
              :key="index"
            >
              <img class="typeImg" :src="item.imgUrl" />
              <div class="num numCode">{{ item.phcode }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="sides">
        <div class="sideTitle">
          <img src="@/assets/images/first.png" alt="" />
        </div>
        <div class="nameList">
          <div class="article-content">
            <div
              class="nameDiv flex"
              v-for="(item, index) in firstList"
              :key="index"
            >
              <img class="typeImg" :src="item.imgUrl" />
              <div class="num numCode">{{ item.phcode }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="sides">
        <div class="sideTitle">
          <img src="@/assets/images/second.png" alt="" />
        </div>
        <div class="nameList">
          <div class="article-content">
            <div
              class="nameDiv flex"
              v-for="(item, index) in secondList"
              :key="index"
            >
              <img class="typeImg" :src="item.imgUrl" />
              <div class="num numCode">{{ item.phcode }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="sides">
        <div class="sideTitle">
          <img src="@/assets/images/second.png" alt="" />
        </div>
        <div class="nameList">
          <div class="article-content">
            <div
              class="nameDiv flex"
              v-for="(item, index) in threeList"
              :key="index"
            >
              <img class="typeImg" :src="item.imgUrl" />
              <div class="num numCode">{{ item.phcode }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="sides">
        <div class="sideTitle">
          <img src="@/assets/images/lucky.png" alt="" />
        </div>
        <div class="nameList">
          <marquee
            class="article-content"
            onMouseout="this.start()"
            onMouseover="this.stop()"
            direction="up"
            scrollamount="3"
          >
            <div
              class="nameDiv flex"
              v-for="(item, index) in luckList"
              :key="index"
            >
              <img class="typeImg" :src="item.imgUrl" />
              <div class="num numCode">{{ luckCode }}</div>
            </div>
          </marquee>
        </div>
      </div>
    </div>
    <div class="bottom">
      <span>
        幸运奖中奖尾数号码为:
      </span>
      <span style="font-size:0.35rem;vertical-align: middle;">
        {{ luckCode }}
      </span>
    </div>
  </div>
</template>

<script>
import { slxhHjws } from "@/api/prize";
export default {
  props: { list: Array },
  data() {
    return {
      specList: [],
      firstList: [],
      secondList: [],
      thirdList: [],
      luckList: [],
      luckCode: ""
    };
  },
  mounted() {
    this.specList = [];
    this.firstList = [];
    this.secondList = [];
    this.threeList = [];
    this.thirdList = [];
    this.list.map(v => {
      if (v.zjsta === 0) {
        this.specList.push(v);
      } else if (v.zjsta === 1) {
        this.firstList.push(v);
      } else if (v.zjsta === 2) {
        this.secondList.push(v);
      } else if (v.zjsta === 3) {
        this.threeList.push(v);
      } else {
        this.thirdList.push(v);
      }
    });
    this.getLuckyList();
  },
  methods: {
    getLuckyList() {
      slxhHjws().then(res => {
        this.luckCode = res.data.content[0].hjwshm;
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.panel
  position fixed
  top 0
  left 0
  height 100%
  width 100%
  background url('~images/bg.jpg')
  background-size 100% 100%
  background-repeat no-repeat
.flex
  display flex
.top
  text-align center
  height 1.3rem
  padding 10px
  img
    height 1.2rem
.content
  justify-content center
  height calc(100% - 2.2rem)
.sides
  width 18%
  height 100%
  margin 0 .3rem
  background url('~images/sides.png') center no-repeat
  background-size 100% 100%
  position relative
  .sideTitle
    text-align center
    img
      width .6rem
      padding-top .05rem
.nameList
    color #fff
    padding-top .1rem
    height calc(100% - .40rem)
    overflow hidden
  .nameDiv
    padding 10px 0
    justify-content space-evenly
  .typeImg
    width 40px
    height 40px
  .numCode
    font-size .24rem
  .article-content
    height 100%
.bottom
  text-align center
  margin-top 0.2rem
  font-size .2rem
  span
    background-image linear-gradient(135deg,#4100ff,#b72d2d)
    -webkit-background-clip text
    color transparent
</style>
