<template>
  <div class="panel">
    <div class="top">
      <img src="@/assets/images/logo.png" alt="" />
    </div>
    <div class="content flex">
      <div class="middle">
        <div v-show="isok1" class="checkeds">
          <div class="numws num">
            <ul class="firsts">
              <li v-for="(item, index) in numList" :key="index">{{ item }}</li>
            </ul>
          </div>
          <div class="numws num">
            <ul class="firsts">
              <li v-for="(item, index) in numList" :key="index">{{ item }}</li>
            </ul>
          </div>
          <div class="numws num">
            <ul class="firsts">
              <li v-for="(item, index) in numList" :key="index">{{ item }}</li>
            </ul>
          </div>
          <div class="numws num">
            <ul class="firsts">
              <li v-for="(item, index) in numList" :key="index">{{ item }}</li>
            </ul>
          </div>
          <div class="numws num">
            <ul class="firsts">
              <li v-for="(item, index) in numList" :key="index">{{ item }}</li>
            </ul>
          </div>
        </div>
        <div v-show="dis" class="waer">
          <div class="fart">
            <div class="checked">
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="checked">
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="checked">
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="checked">
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="fart">
            <div class="checked">
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="checked">
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="checked">
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="checked">
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="fart">
            <div class="checked">
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="checked">
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="checked">
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="checked">
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="fart">
            <div class="checked">
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="checked">
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="checked">
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="checked">
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="fart">
            <div class="checked">
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="checked">
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="checked">
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="checked">
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="numw num">
                <ul class="first">
                  <li v-for="(item, index) in numList" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="lottery" @click="startClick" v-show="dis">{{ start }}</div>
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
      isok1: true,
      isok2: false,
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
    isShow() {
      GetIsJs().then(res => {
        if (res.data[0].iscjjs === "1") {
          this.iosk1 = true;
          this.iosk2 = false;
        } else {
          this.iosk1 = false;
          this.iosk2 = true;
        }
      });
    },
    changePrize() {
      this.form = this.prizeList[this.prizeValue];
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
        this.isShow();
        this.start = "结束";
        this.startAn();
        this.style();
      }
    },
    startAn() {
      var first = document.getElementsByClassName("firsts");
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
      var first = document.getElementsByClassName("firsts");
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
.middle
  width 60%
  height 110%
  margin 0 .5rem
  position relative
  background url('~images/content.gif') center no-repeat
  background-size 100% 100%
//抽奖样式
.checkeds
  height 1rem
  background url('~images/king-bg.png') center no-repeat
  background-size 100% 100%
  width 50%
  margin 0 auto
  margin-top .9rem
  line-height 1rem
  text-align center
  color #fff
  display flex
  align-items center
.numws
  overflow hidden
  width 100px
  height 100px
  margin 0 auto
  display inline-block
  transition all 0.5s
  transition-delay 2s

.numws ul
  width .6rem
  list-style none

.numws li
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
//中奖样式
.waer
  height 90%
  display flex
  justify-content:space-between
  flex-direction column
.fart
  width 85%
  height 25%
  margin-left .3rem
  position relative
  left 25px
  top 20px
  display flex
  align-items center
.checked
  height .35rem
  background url('~images/king-bg.png') center no-repeat
  background-size 100% 110%
  width 22%
  margin 0 .1rem
  line-height 1rem
  text-align center
  color #fff
  overflow hidden
  display flex
  align-items center
.checkNum
  font-size .6rem
.lottery
  position absolute
  width 1.1rem
  bottom -0.4rem
  left 2.45rem
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

// .numw:hover
//   height 200px

.numw ul
  list-style none

.numw li
  font-size 45px
  text-align center
  line-height 98px
  color #fff
  background linear-gradient(transparent,#ff0000,transparent) 10px
  background-size 100% 35%
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
