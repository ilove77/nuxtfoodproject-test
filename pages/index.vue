<!--  -->
<template>
  <div id="index">
    <div class="wholeproduct">
      <h2>
        創店宗旨
      </h2>
      <div class="producttext">
        由於現代人工作相當忙碌，進而導致飲食都相當不正常，然而很多人都常常說要減肥，而採用節食法，雖然短期之內會看到效果，但之後容易復胖。
        然而正確的方法應該是要運動搭配正確飲食，所以大家來吃我們的高蛋白低卡餐就對了，我們每項食物都是經過最嚴格的把關做出來的，歡迎大家來嘗鮮看看唷!
      </div>
      <!-- <ul class="mainproduct" /> -->
    </div>

    <div class="productintro">
      <h2>主餐介紹</h2>
      <ul class="productmain">
        <transition
          enter-active-class="animated bounceInLeft"
          name="1"
        >
          <li v-show="productimg1" ref="productimg1">
            <div class="productimgback1">
              <img src="../assets/img/日式胡麻雞.jpg" alt="">
              <div />
              <p>日式胡麻雞</p>
            </div>
            <p>
              低溫烹調的黑豬腰內肉
              拌上綿密而風味濃郁的法式第戎芥末醬
              甜鹹酸三味調和，肉甜而香氣四溢
              讓人不禁想喊一句：Ahhh, Dijon~~
            </p>
          </li>
        </transition>
        <transition
          enter-active-class="animated bounceInRight"
          leave-active-class="animated backInLeft"
          name="2"
        >
          <li v-show="productimg2" ref="productimg2">
            <div class="productimgback2">
              <img src="../assets/img/法式地榮珠.jpg" alt="">
              <div />
              <p>法式第戎豬</p>
            </div>
            <p>
              味甘性溫，清爽開胃且濃香下飯
              胡色玉漿，焙煎淋肉令食指大動
            </p>
          </li>
        </transition>
        <transition
          enter-active-class="animated bounceInLeft"
          leave-active-class="animated bounceOutRight"
          name="3"
        >
          <li v-show="productimg3" ref="productimg3">
            <div class="productimgback3">
              <img src="../assets/img/置燒牛小排.jpg" alt="">
              <div />
              <p>炙燒牛小排</p>
            </div>
            <p>
              肋脊部位的牛小排，舒肥後再經過炙燒
              口感軟嫩飽含肉汁，一口咬下肉甜四溢
              餘香繞喉三刻不絕，是幸福的滋味🥺
            </p>
          </li>
        </transition>
        <transition
          enter-active-class="animated bounceInRight"
          leave-active-class="animated bounceOutRight"
          name="4"
        >
          <li v-show="productimg4" ref="productimg4">
            <div class="productimgback4">
              <img src="../assets/img/態勢輕靈機.jpg" alt="">
              <div />
              <p>泰式輕檸雞</p>
            </div>
            <p>
              清新自然的檸香，拂動著味蕾
              當泰式酸辣遇上鮮嫩雞胸，涼爽解暑又開胃
              是，夏日的滋味😆
            </p>
          </li>
        </transition>
        <transition
          enter-active-class="animated bounceInLeft"
          leave-active-class="animated bounceOutRight"
          name="5"
        >
          <li v-show="productimg5" ref="productimg5">
            <div class="productimgback5">
              <img src="../assets/img/韓式辣醬雞.jpg" alt="">
              <div />
              <p>韓式辣醬雞</p>
            </div>
            <p>
              鮮嫩的舒肥雞胸裹上橘紅醬汁
              灑上綴香的白芝麻，拌炒洋蔥的香氣
              入口甜鹹後韻微辛，讓人上癮的小辣
            </p>
          </li>
        </transition>
      </ul>
    </div>
    <iframe
      width="100%"
      height="450"
      frameborder="0"
      style="border:1px solid black; margin-top:100px"
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ8UZ1jEKrQjQRWwqL7cRA9LQ&key=AIzaSyCfmUunVfGooiCaS2Etvd7e7dB50TTUCSQ"
      allowfullscreen
    />

    </transition>
    <div class="gotop" @click="scrollby">
      <div class="svg_box">
        <div class="tran" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  layout: 'front',
  // 當登入的時候看有無購物車項目在資料庫裡
  async fetch ({ store, $axios }) {
    const { data } = await $axios.post('/api/USER/checkLogin')
    if (data) {
      await store.dispatch('cart/createUSERCart')
    }
  },
  data () {
    return {
      // 待解決:在手機端往下滑會產生彈跳現象
      // productimg1: true,
      // productimg2: false,
      // productimg3: false,
      // productimg4: false,
      // productimg5: false

      productimg1: true,
      productimg2: true,
      productimg3: true,
      productimg4: true,
      productimg5: true
    }
  },
  // 生命周期 - 創建完成（訪問當前this實例）
  created () {

  },
  // 生命周期 - 掛載完成（訪問DOM元素）
  mounted () {
    // 待解決:在手機端會產生往下滑彈跳現象
    // window.addEventListener('scroll', this.display)

  },
  destroyed () {
    // 待解決:在手機端會產生往下滑彈跳現象
    // window.removeEventListener('scroll', this.display)
  },
  methods: {
    display () {
      window.removeEventListener('scroll', this.display)
      const refArray = [
        { ref: 'productimg1', show: 'productimg1' },
        { ref: 'productimg2', show: 'productimg2' },
        { ref: 'productimg3', show: 'productimg3' },
        { ref: 'productimg4', show: 'productimg4' },
        { ref: 'productimg5', show: 'productimg5' }
      ]
      const that = this
      // console.log(document.documentElement.scrollHeight)
      // console.log(document.documentElement.scrollTop)
      // console.log(document.body.scrollHeight)
      // console.log(document.body.scrollTop)

      refArray.forEach((v, i) => {
        const a = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        const b = document.documentElement.clientHeight || document.body.clientHeight
        // console.log(a)
        // console.log(b)
        if (
          a + b >=
          that.$refs[v.ref].offsetTop
        ) {
          that[v.show] = true
        } else {
          that[v.show] = false
        }
      })
      window.addEventListener('scroll', this.display)
    },
    // 將頁面滾到最上面
    scrollby () {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      // window.scrollBy是滾動特定的量
    }

  }

}
</script>
<style scoped>
/* @import 'style.css'; 引入css類 */
@import '@/assets/css/compress/index.min.css';

</style>
