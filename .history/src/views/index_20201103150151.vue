<template>
  <div class="panel">
    <div class="top">
      <img src="@/assets/images/logo.png" alt="" />
    </div>
    <div class="content flex">
      <div class="sides">
        <div class="sideTitle">
          <img src="@/assets/images/rule.png" alt="" />
        </div>
        <div class="prize">
          <el-select
            v-model="prizeValue"
            placeholder="请选择"
            @change="changePrize"
          >
            <el-option
              v-for="item in prizeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="cubeL">
          <div style="text-align:center">
            <span class="advan">随机抽取</span>
            <span style="font-weight:bolder;font-size:0.2rem;margin:0 15px">
              {{ form.gs }}
            </span>
            <span class="advan">名</span>
          </div>
        </div>
        <div class="cubeL">
          <div style="text-align:center">
            <span>{{ form.label }}奖品为：</span>
            <span>{{ form.jp }}</span>
          </div>
        </div>
        <div class="cubeL">
          <div style="text-align:center">
            <span>抽奖总人数：</span>
            <span>{{ count }}</span>
          </div>
        </div>
        <div class="rule">
          <div>规则说明</div>
          <div>{{ form.gz }}</div>
        </div>
      </div>
      <div class="middle">
        <div class="checked">
          <div class="numw num">
            <ul class="first">
              <li v-for="(item, index) in numList" :key="index">{{ item }}</li>
            </ul>
          </div>
          <div class="numw num">
            <ul class="first">
              <li v-for="(item, index) in numList" :key="index">{{ item }}</li>
            </ul>
          </div>
          <div class="numw num">
            <ul class="first">
              <li v-for="(item, index) in numList" :key="index">{{ item }}</li>
            </ul>
          </div>
          <div class="numw num">
            <ul class="first">
              <li v-for="(item, index) in numList" :key="index">{{ item }}</li>
            </ul>
          </div>
          <div class="numw num">
            <ul class="first">
              <li v-for="(item, index) in numList" :key="index">{{ item }}</li>
            </ul>
          </div>
        </div>
        <div class="lottery" @click="startClick" v-show="dis">{{ start }}</div>
      </div>
      <div class="sides">
        <div class="sideTitle">
          <img src="@/assets/images/name.png" alt="" />
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
              v-for="(item, index) in nameList"
              :key="index"
            >
              <img class="typeImg" :src="item.imgUrl" />
              <div class="num numCode">{{ item.phcode }}</div>
            </div>
          </marquee>
        </div>
        <div class="detailBtn">
          <el-button @click="detaliClick">名单</el-button>
        </div>
      </div>
    </div>
    <detail-list v-if="detailSta" :list="nameList"></detail-list>
  </div>
</template>

<script>
import { gzList, getCjCode, getHjmd, GetIsJs } from "@/api/prize";
import detailList from "./detailList";
export default {
  name: "home",
  components: { detailList },
  data() {
    return {
      prizeValue: 0,
      dis: true,
      prizeList: [],
      nameList: [],
      count: "",
      form: {},
      start: "开始抽奖",
      numList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      isAnimate: false,
      detailSta: false
    };
  },
  mounted() {
    this.getRule();
    this.getList();
  },
  methods: {
    getRule() {
      gzList().then(res => {
        this.prizeList = res.data.slxhCjgzs.content;
        this.count = res.data.count.count;
        this.form = this.prizeList[0];
      });
    },
    getList() {
      getHjmd().then(res => {
        res.data.map(v => {
          if (v.zjsta === 0) {
            v.imgUrl = require("@/assets/images/specialPrize.png");
          } else if (v.zjsta === 1) {
            v.imgUrl = require("@/assets/images/firstPrize.png");
          } else if (v.zjsta === 2) {
            v.imgUrl = require("@/assets/images/secondPrize.png");
          } else {
            v.imgUrl = require("@/assets/images/thirdPrize.png");
          }
        });
        this.nameList = res.data;
      });
    },
    //判断抽奖是否结束
    isEnd() {
      GetIsJs().then(res => {
        if (res.data[0].iscjjs === "1") {
          this.dis = true;
        } else {
          this.dis = false;
        }
      });
    },
    changePrize() {
      this.form = this.prizeList[this.prizeValue];
      debugger;
      if (this.form.label === "二等奖") {
        this.$route = $route.push({ path: "/two" });
      }
    },
    startClick() {
      if (this.start === "结束") {
        this.start = "开始抽奖";
        getCjCode({ zjsta: this.prizeValue }).then(res => {
          if (res.data.length > 0) {
            this.stopAn(res.data[0].phcode);
          } else {
            this.stopAn("00000");
          }
        });
      } else {
        this.isEnd();
        this.start = "结束";
        this.startAn();
      }
    },
    startAn() {
      var first = document.getElementsByClassName("first");
      this.dh(first[0]);
      setTimeout(() => {
        this.dh(first[1]);
      }, 100);
      setTimeout(() => {
        this.dh(first[2]);
      }, 300);
      setTimeout(() => {
        this.dh(first[3]);
      }, 500);
      setTimeout(() => {
        this.dh(first[4]);
      }, 700);
    },
    stopAn(num) {
      let code = num.split("");
      var first = document.getElementsByClassName("first");
      this.undh(first[0], code[0] === "0" ? "10" : code[0]);
      setTimeout(() => {
        this.undh(first[1], code[1] === "0" ? "10" : code[1]);
      }, 1000);
      setTimeout(() => {
        this.undh(first[2], code[2] === "0" ? "10" : code[2]);
      }, 2000);
      setTimeout(() => {
        this.undh(first[3], code[3] === "0" ? "10" : code[3]);
      }, 2500);
      setTimeout(() => {
        this.undh(first[4], code[4] === "0" ? "10" : code[4]);
      }, 3000);
      setTimeout(() => {
        this.getList();
      }, 3500);
    },
    dh(dom) {
      dom.index = 0;
      dom.key = setInterval(() => {
        dom.index = dom.index - 10;
        dom.style.transform = "translateY(" + dom.index + "px)";
        if (dom.index < -980) {
          dom.index = dom.index + 980;
        }

        if (dom.index > -20 && dom.tkey) {
          if (dom.tkey) {
            dom.tkey = false;
            if (dom.key) {
              var num = dom.num;
              clearInterval(dom.key);
              dom.key = setInterval(() => {
                dom.index += (num - dom.index) / 100;
                dom.style.transform = "translateY(" + dom.index + "px)";
                if (dom.index - num < 0.1) {
                  clearInterval(dom.key);
                  dom.key = null;
                }
              });
            }
          }
        }
      }, 1000 / 60);
    },
    undh(dom, num) {
      var first = document.getElementsByClassName("first");
      var doms = first[0].children[0];
      var height = doms.offsetHeight;
      setTimeout(() => {
        num *= -1 * height;
        dom.num = num;
        dom.tkey = true;
      }, 2000);
    },
    detaliClick() {
      this.detailSta = true;
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
  background url('~images/sides.png') center no-repeat
  background-size 100% 100%
  position relative
  .sideTitle
    text-align center
    img
      width .7rem
      padding-top .05rem
  //左边框样式
  .prize
    text-align center
    padding-top 0.1rem
    >>>.el-select
      width 110px
    >>>.el-input__inner
      height 35px
      border 0
      color #E2E237
      text-align center
      background url('~images/btn1.png') center no-repeat
      background-size 100% 100%
    >>>.el-input__icon
      line-height 35px
  .cubeL
    width 1.3rem
    height .25rem
    margin .1rem auto
    color #fff
    font-size .1rem
    position relative
    border-top 1px solid #2359a6
    border-left 1px solid #2359a6
    border-right 1px solid #2359a6
    background rgba(17,27,110,0.5)
    border-radius 20px
    line-height 0.25rem
    &:after
      position absolute
      content :''
      width 100%
      height 2px
      bottom 0
      background linear-gradient(to right,transparent,#0ff,transparent)
  .advan
    vertical-align top
  .rule
    color #fff
    padding 0 10px
    line-height 20px
  //右边框样式
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
.middle
  width 40%
  height 100%
  margin 0 .5rem
  position relative
  background url('~images/content.gif') center no-repeat
  background-size 100% 100%
.checked
  height 1rem
  background url('~images/king-bg.png') center no-repeat
  background-size 100% 100%
  width 70%
  margin 0 auto
  margin-top .5rem
  line-height 1rem
  text-align center
  color #fff
  display flex
  align-items center
.checkNum
  font-size .6rem
.lottery
  position absolute
  width 1.1rem
  bottom .4rem
  left 1.5rem
  text-align center
  font-size .23rem
  padding 8px 0
  color #610203
  cursor pointer
  background url('~images/lottery.png') center no-repeat
  background-size 100% 100%
.numw
  overflow hidden
  width 100px
  height 100px
  margin 0 auto
  display inline-block
  transition all 0.5s
  transition-delay 2s

.numw:hover
  height 200px

.numw ul
  list-style none

.numw li
  height 98px
  font-size 100px
  text-align center
  line-height 98px
  color #fff
  background linear-gradient(transparent,#ff0000,transparent)
.isAnimate
  animation circle1 2s linear infinite

@keyframes circle1 {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-980px);
  }
}
.detailBtn
  position absolute
  right 0
  top 0
  .el-button
    border 0
    background transparent
    font-size 16px
    color #0ff
</style>
