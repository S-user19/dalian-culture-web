<script setup lang="ts">
import { ref } from 'vue'
import CultureCard from '../components/CultureCard.vue'
import DetailModal from '../components/DetailModal.vue'

const selectedFood = ref<{
  title: string
  image: string
  tag: string
  content: string
  address: string
  lat: number
  lng: number
} | null>(null)

const openDetail = (food: any) => {
  selectedFood.value = {
    title: food.title,
    image: food.image,
    tag: food.tag,
    content: food.detail,
    address: food.address,
    lat: food.lat,
    lng: food.lng,
  }
}

const openRestaurantDetail = (r: any) => {
  selectedFood.value = {
    title: r.name,
    image: 'https://aka.doubaocdn.com/l/bXoBhhuDEl',
    tag: '推荐餐厅',
    content: r.detail,
    address: r.address,
    lat: r.lat,
    lng: r.lng,
  }
}

const foods = [
  {
    title: '大连海参',
    description: '大连刺参是国家地理标志产品，海参中的极品，肉质肥厚，营养丰富，是大连海鲜的代表。',
    image: 'https://aka.doubaocdn.com/l/AIhMtfVRJO',
    tag: '海产珍品',
    address: '辽宁省大连市中山区天津街海鲜市场',
    lat: 38.9230,
    lng: 121.6420,
    detail: '大连海参主要产自黄海北部冷水海域，以刺参最为名贵。大连刺参肉质肥厚、口感Q弹劲道，富含胶原蛋白、海参多糖和多种微量元素，是传统的名贵滋补品，被列为"海八珍"之首。\n\n• 产地优势：大连海域水深、水温低、海水洁净，生长周期长，海参品质优于南方海参\n• 捕捞季节：每年春捕（4-5月）和秋捕（10-11月），此时海参最为肥美\n• 常见吃法：葱烧海参（大连老菜经典）、海参小米粥、清蒸海参、凉拌海参\n• 购买建议：干货海参建议去正规商场或专卖店购买，注意鉴别品质；鲜海参季节性强\n\n大连海参是国家地理标志保护产品，也是大连最具代表性的海产礼品，很多游客都会买一些带回给亲友。',
  },
  {
    title: '鲅鱼饺子',
    description: '大连特色传统美食，新鲜鲅鱼肉剁馅，口感鲜嫩多汁，是大连人餐桌上的常客。',
    image: 'https://aka.doubaocdn.com/l/LK3SpltTrF',
    tag: '特色主食',
    address: '辽宁省大连市中山区人民路天天渔港',
    lat: 38.9220,
    lng: 121.6580,
    detail: '鲅鱼饺子是大连最具代表性的特色美食之一，也是大连人逢年过节、家庭聚会必吃的传统主食。\n\n• 选材讲究：选用新鲜渤海鲅鱼，农历3-5月的鲅鱼最为肥美，肉质细嫩\n• 制作工艺：手工鲅鱼肉去刺剁成肉馅，配以新鲜韭菜、少许猪肉、葱姜水调味，朝一个方向搅打上劲，包出的饺子皮薄馅大\n• 口感特点：咬一口鲜汁四溢，鱼肉鲜嫩，韭菜提香，回味无穷\n• 经典搭配：蘸香醋+蒜末，再配一碗饺子汤，原汤化原食\n\n除了鲅鱼饺子，大连还有黄花鱼水饺、墨鱼水饺、虾仁水饺等各种海鲜水饺，各有风味。推荐去天天渔港、品海楼、牟传仁老菜馆等老字号餐厅品尝正宗味道。',
  },
  {
    title: '烤鱿鱼',
    description: '大连街头必吃小吃，新鲜大鱿鱼炭火烤制，配以秘制酱料，鲜香Q弹，回味无穷。',
    image: 'https://aka.doubaocdn.com/l/9yocXjXZnS',
    tag: '街头小吃',
    address: '辽宁省大连市中山区天津街小吃街',
    lat: 38.9230,
    lng: 121.6420,
    detail: '烤鱿鱼是大连街头巷尾最常见、最受欢迎的小吃，几乎每个夜市、每个海滨景点都能看到烤鱿鱼的摊位。\n\n• 食材新鲜：选用大连本地出产的新鲜大鱿鱼，肉质厚实有弹性\n• 烤制工艺：整只鱿鱼串在铁签上，放在炭火上反复翻转烤制，火候恰到好处\n• 秘制酱料：刷上香辣酱、蒜蓉酱，撒上孜然、芝麻、辣椒粉，香气扑鼻\n• 口感特点：外焦里嫩、Q弹有嚼劲，咸香带辣，越嚼越香\n\n除了整只烤鱿鱼，还有烤鱿鱼须、烤鱿鱼头、铁板鱿鱼等不同做法。天津街夜市、黑石礁小吃街、星海广场周边、各大海滨浴场旁边都能吃到正宗的大连烤鱿鱼，价格一般在15-30元/串，边逛海边吃，是来大连旅游必体验的街头美味。',
  },
  {
    title: '大连樱桃',
    description: '国家地理标志产品，旅顺大樱桃色泽鲜艳、果肉饱满、酸甜可口，每年6月成熟上市。',
    image: 'https://aka.doubaocdn.com/l/lnetmr4D37',
    tag: '时令水果',
    address: '辽宁省大连市旅顺口区旅顺樱桃采摘园',
    lat: 38.8000,
    lng: 121.2500,
    detail: '大连旅顺大樱桃是国家地理标志保护产品，已有百年栽培历史，是中国北方著名的樱桃产区。\n\n• 产地优势：大连旅顺地区气候温和、光照充足、昼夜温差大，有利于糖分积累，樱桃甜度高\n• 主要品种：美早（果大肉厚）、红灯（酸甜多汁）、沙蜜豆（脆甜爽口）、雷尼（黄色清甜）等\n• 成熟季节：每年6月上旬到7月上旬，持续约一个月\n• 最佳体验：6月来大连，可以去旅顺、金州一带的樱桃采摘园，现摘现吃，新鲜又美味\n\n大连樱桃个头大、色泽紫红光亮、果肉饱满、酸甜可口，品质可与进口车厘子媲美，但价格实惠很多。每年樱桃季，很多市民都会开车去郊区采摘，也会买很多寄给外地亲友，是大连夏季最具代表性的时令水果。',
  },
  {
    title: '海胆蒸蛋',
    description: '新鲜海胆搭配嫩滑蒸蛋，鲜美融合，口感细腻，是不可错过的海鲜美味。',
    image: 'https://aka.doubaocdn.com/l/VuLEsCExuF',
    tag: '海鲜料理',
    address: '辽宁省大连市中山区老虎滩海鲜餐厅',
    lat: 38.8689,
    lng: 121.6220,
    detail: '海胆蒸蛋是大连海鲜餐厅的热门招牌菜，也是最能体现海胆本味的经典做法。\n\n• 食材选择：选用新鲜紫海胆或马粪海胆，每年5-8月是海胆最肥美的季节，此时海胆黄饱满鲜甜\n• 经典做法：\n  ① 传统做法：将新鲜海胆黄直接铺在嫩滑的水蒸蛋上，蒸几分钟即可\n  ② 原壳做法：在海胆壳内打入鸡蛋液，带壳蒸熟，造型美观\n• 口感特点：海胆的鲜甜浓郁与鸡蛋的嫩滑细腻完美融合，入口即化，鲜掉眉毛\n• 搭配建议：淋少许生抽和香油，撒上葱花，味道更鲜\n\n除了海胆蒸蛋，大连还有海胆刺身、海胆寿司、海胆汤等吃法。老虎滩、星海广场、付家庄附近的海鲜餐厅都能品尝到这道美味，建议一定要在海胆旺季来吃，味道最正宗。',
  },
  {
    title: '海鲜大咖',
    description: '大连特色海鲜拼盘，龙虾、螃蟹、扇贝、生蚝汇聚一盘，视觉与味觉的双重享受。',
    image: 'https://aka.doubaocdn.com/l/bXoBhhuDEl',
    tag: '人气菜品',
    address: '辽宁省大连市沙河口区星海广场海鲜排档',
    lat: 38.8855,
    lng: 121.5750,
    detail: '海鲜大咖是近年来大连非常流行的特色吃法，特别适合多人聚会分享，是来大连旅游必打卡的菜品。\n\n• 食材丰盛：一个大托盘里铺满各种海鲜，通常包括：龙虾、面包蟹、梭子蟹、扇贝、生蚝、大虾、虾爬子、海螺、鱿鱼、花蛤等十几种海鲜\n• 口味选择：有麻辣、蒜蓉、酱香、清蒸等多种口味可选，麻辣味最受欢迎\n• 上菜仪式感：一大盘端上桌，满满当当，色香味俱全，拍照发朋友圈特别有面子\n• 适合人群：朋友聚会、家庭聚餐，3-4人点一份小份就够吃\n\n海鲜大咖的价格根据食材档次从200元到上千元不等，建议选择明码标价的正规餐厅。星海广场、天津街、太原街附近的海鲜排档都能吃到，注意提前问清楚价格，避免被宰。',
  },
]

const recommendRestaurants = [
  {
    name: '天天渔港',
    desc: '老字号海鲜酒楼，食材新鲜，菜品正宗',
    address: '辽宁省大连市中山区人民路24号',
    lat: 38.9220,
    lng: 121.6580,
    detail: '天天渔港是大连老牌海鲜酒楼，开业多年，以新鲜的海鲜食材和正宗的大连老菜闻名。推荐菜品：葱烧海参、鲅鱼饺子、清蒸鲍鱼。环境适合家庭聚餐和商务宴请，人均消费约150-200元。在大连有多家分店，人民路店是总店。',
  },
  {
    name: '品海楼',
    desc: '环境好，性价比高，海鲜做的地道',
    address: '辽宁省大连市中山区鲁迅路58号',
    lat: 38.9180,
    lng: 121.6550,
    detail: '品海楼是大连人气很高的海鲜餐厅，环境装修有特色，性价比不错。推荐菜品：海胆蒸蛋、香辣蟹、干锅鱿鱼。菜品口味地道，分量足，是本地人也常去的餐厅。人均消费约100-150元。',
  },
  {
    name: '68-86老菜坊',
    desc: '大连老菜传承，经典味道',
    address: '辽宁省大连市西岗区高尔基路68号',
    lat: 38.9080,
    lng: 121.6180,
    detail: '68-86老菜坊专注传承大连老菜，店面装修有老大连的怀旧风格。推荐菜品：溜肝尖、糖醋黄花鱼、炸蛎黄。想品尝正宗大连传统老菜的话，来这里准没错。人均消费约80-120元。',
  },
  {
    name: '天津街小吃街',
    desc: '汇聚各种大连特色小吃',
    address: '辽宁省大连市中山区天津街',
    lat: 38.9230,
    lng: 121.6420,
    detail: '天津街是大连老牌商业街，小吃街汇聚了各种大连特色小吃：烤鱿鱼、烤生蚝、炸串、海鲜烧烤等。傍晚开始热闹起来，边逛边吃，感受大连的市井烟火气。适合年轻人逛街打卡，人均消费约50-80元。',
  },
]
</script>

<template>
  <div class="food-guide-page">
    <section class="page-hero" style="background: linear-gradient(135deg, rgba(12, 74, 110, 0.85) 0%, rgba(3, 105, 161, 0.75) 50%, rgba(14, 165, 233, 0.7) 100%), url('https://aka.doubaocdn.com/l/8Q1gbu6Y3O') center/cover no-repeat;">
      <h1>🦀 特色美食</h1>
      <p>靠海吃海，品味大连的海鲜盛宴</p>
    </section>

    <section class="page-section">
      <div class="container">
        <h2 class="section-title">必尝美味</h2>
        <p class="section-subtitle">从海鲜大餐到街头小吃，总有一款适合你，点击卡片查看详情</p>
        <div class="grid-3">
          <div v-for="food in foods" :key="food.title" @click="openDetail(food)">
            <CultureCard
              :title="food.title"
              :description="food.description"
              :image="food.image"
              :tag="food.tag"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="page-section bg-light">
      <div class="container">
        <h2 class="section-title">推荐餐厅</h2>
        <p class="section-subtitle">本地人气餐厅，不踩雷指南，点击查看地址详情</p>
        <div class="restaurants-grid">
          <div
            v-for="r in recommendRestaurants"
            :key="r.name"
            class="restaurant-card"
            @click="openRestaurantDetail(r)"
          >
            <h3>{{ r.name }}</h3>
            <p>{{ r.desc }}</p>
            <span class="click-hint">点击查看地址 →</span>
          </div>
        </div>
      </div>
    </section>

    <DetailModal
      :visible="!!selectedFood"
      :title="selectedFood?.title || ''"
      :image="selectedFood?.image || ''"
      :content="selectedFood?.content || ''"
      :tag="selectedFood?.tag"
      :address="selectedFood?.address"
      :lat="selectedFood?.lat"
      :lng="selectedFood?.lng"
      @close="selectedFood = null"
    />
  </div>
</template>

<style scoped>
.grid-3 > div {
  cursor: pointer;
  transition: transform 0.2s;
}
.grid-3 > div:hover {
  transform: translateY(-4px);
}
.restaurants-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.restaurant-card {
  background: #fff;
  padding: 24px 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}
.restaurant-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}
.restaurant-card h3 {
  margin: 0 0 8px;
  font-size: 16px;
  color: var(--primary-color);
}
.restaurant-card p {
  margin: 0 0 12px;
  font-size: 13px;
  color: var(--text-secondary);
}
.click-hint {
  font-size: 12px;
  color: #0ea5e9;
  font-weight: 500;
}

@media (max-width: 768px) {
  .restaurants-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
