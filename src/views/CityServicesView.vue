<script setup lang="ts">
import { ref } from 'vue'
import DetailModal from '../components/DetailModal.vue'

const selectedService = ref<{
  title: string
  image: string
  content: string
  tag: string
} | null>(null)

const openDetail = (service: any) => {
  selectedService.value = {
    title: service.name,
    image: service.image,
    content: service.detail,
    tag: service.category,
  }
}

const serviceCategories = [
  {
    icon: '🎫',
    title: '旅游服务',
    services: [
      {
        name: '旅游年卡办理',
        desc: '大连旅游惠民年卡，一卡畅游多个景区',
        image: 'https://aka.doubaocdn.com/l/2MHvUhxdgX',
        category: '旅游服务',
        address: '辽宁省大连市中山区旅游服务中心',
        lat: 38.9180,
        lng: 121.6450,
        detail: '【大连旅游惠民年卡】\n\n💰 价格：约200元/年\n📍 办理地点：各大景区售票处、旅游服务中心\n📱 线上办理："大连文旅"公众号\n\n🎫 包含权益：\n• 老虎滩海洋公园门票折扣\n• 森林动物园免费入园\n• 金石滩景区优惠\n• 大连博物馆免费讲解\n\n✅ 适合人群：\n• 本地居民周末休闲游\n• 一年内多次来大连的游客\n• 亲子家庭出游\n\n⏰ 有效期：自办理之日起一年'
      },
      {
        name: '景区票务预约',
        desc: '各大景区门票在线预约购买',
        image: 'https://aka.doubaocdn.com/l/m7cU6UVUPi',
        category: '旅游服务',
        address: '各景区售票处 / 线上预约',
        lat: 39.0860,
        lng: 121.9260,
        detail: '【大连主要景区门票价格参考】\n\n🐯 老虎滩海洋公园：约198元\n🏖️ 金石滩地质公园：约60元\n🦁 森林动物园：约118元\n🏝️ 棒棰岛：约20元\n\n💡 购票小贴士：\n• 学生凭学生证享半价优惠\n• 老人、军人、残疾人凭证件免票\n• 节假日建议提前1-3天线上预约\n• 官方公众号或携程、美团均可购票\n• 避免现场排队耽误时间'
      },
      {
        name: '导游讲解服务',
        desc: '专业导游团队，深度了解大连文化',
        image: 'https://aka.doubaocdn.com/l/uM5s7xYtk1',
        category: '旅游服务',
        address: '各景区游客中心 / 旅游服务中心',
        lat: 38.8000,
        lng: 121.2500,
        detail: '【大连导游讲解服务】\n\n💰 费用参考：\n• 景区官方讲解：50-100元/次\n• 私人导游：200-500元/天\n\n🌟 推荐讲解线路：\n• 旅顺口历史游（推荐！）：白玉山、日俄监狱旧址、军港\n• 滨海路徒步讲解：沿途景点历史故事\n• 老城区建筑游：中山广场近代建筑群\n\n🌍 语言服务：中文、英文、日文、韩文\n\n📞 预约方式：景区游客中心现场预约，或"大连文旅"公众号预约'
      },
      {
        name: '旅游咨询热线',
        desc: '12301 全国旅游服务热线',
        image: 'https://aka.doubaocdn.com/l/MttzvIoel0',
        category: '旅游服务',
        address: '火车站、星海广场旅游咨询点',
        lat: 38.9250,
        lng: 121.6400,
        detail: '【大连旅游咨询服务】\n\n📞 热线电话：\n• 全国旅游服务热线：12301\n• 大连市民服务热线：12345\n• 旅游投诉电话：0411-12345\n\n📍 线下咨询点：\n• 火车站南广场旅游服务中心\n• 星海广场游客中心\n• 周水子机场到达层\n\n🎁 服务内容：\n• 免费领取大连旅游地图\n• 景区路线规划咨询\n• 旅游问题投诉建议\n• 多语言咨询服务'
      },
    ],
  },
  {
    icon: '🚌',
    title: '交通出行',
    services: [
      {
        name: '地铁线路查询',
        desc: '大连地铁各线路站点与运营时间',
        image: 'https://aka.doubaocdn.com/l/SWHh9IqlMl',
        category: '交通出行',
        address: '大连地铁各站点',
        lat: 38.9100,
        lng: 121.6200,
        detail: '【大连地铁运营信息】\n\n🕐 运营时间：约6:30 - 22:30\n💰 票价：2元起步，按里程计价\n\n🚇 现有线路：\n• 1号线：姚家 ↔ 河口（南北向）\n• 2号线：辛寨子 ↔ 海之韵公园（东西向）\n• 3号线：大连站 ↔ 金石滩（市郊线）\n• 5号线：后关 ↔ 虎滩新区\n\n💳 乘车方式：\n• 支付宝/微信扫码乘车\n• 大连地铁APP\n• 公交卡\n\n📱 查询实时到站："大连地铁"公众号、高德地图'
      },
      {
        name: '公交实时查询',
        desc: '手机扫码乘车，实时公交到站信息',
        image: 'https://aka.doubaocdn.com/l/SWHh9IqlMl',
        category: '交通出行',
        address: '大连全市公交站',
        lat: 38.9100,
        lng: 121.6200,
        detail: '【大连公交出行指南】\n\n💰 票价：普通车1元，空调车2元\n💳 乘车码：支付宝/微信"大连电子公交卡"\n\n🌟 特色线路：\n• 201路有轨电车：百年历史复古车厢\n• 旅游环路：串联主要景点的观光巴士\n\n📱 实时查询：\n• 高德地图/百度地图查实时到站\n• "大连公交"APP\n\n💡 小贴士：早晚高峰堵车严重，建议坐地铁出行'
      },
      {
        name: '机场大巴时刻',
        desc: '周水子机场往返市区大巴时刻表',
        image: 'https://aka.doubaocdn.com/l/MttzvIoel0',
        category: '交通出行',
        address: '大连周水子国际机场',
        lat: 38.9650,
        lng: 121.5450,
        detail: '【机场大巴时刻表】\n\n💰 票价：20元/人\n\n🚌 主要线路：\n• 1号线：机场 → 火车站 → 解放路\n• 2号线：机场 → 星海广场 → 高新园区\n• 3号线：机场 → 中山广场 → 东港\n\n🕐 运营时间：\n• 首班：跟随最早航班\n• 末班：跟随最晚航班\n• 发车间隔：约30分钟\n\n🚕 打车参考：机场到市区约50-80元，车程约30分钟'
      },
      {
        name: '出租车叫车',
        desc: '正规出租车预约与网约车服务',
        image: 'https://aka.doubaocdn.com/l/3WD2WXVWPg',
        category: '交通出行',
        address: '全市正规出租车上客点',
        lat: 38.9100,
        lng: 121.6200,
        detail: '【大连打车指南】\n\n🚕 出租车价格：\n• 起步价：10元/3公里\n• 后续：2元/公里\n• 夜间（22:00后）加价30%\n\n📱 网约车平台：滴滴出行、高德打车\n\n⚠️ 注意事项：\n• 不要坐火车站门口拉客的黑车\n• 正规出租车都在指定上客点排队\n• 一定要打表计费\n• 机场、火车站都有正规出租车上客区'
      },
    ],
  },
  {
    icon: '🏥',
    title: '生活服务',
    services: [
      {
        name: '医院导航',
        desc: '主要医院位置、挂号信息查询',
        image: 'https://aka.doubaocdn.com/l/WJ5U2VR7dT',
        category: '生活服务',
        address: '大连市区各大三甲医院',
        lat: 38.9100,
        lng: 121.6200,
        detail: '【大连主要医院】\n\n🏥 三甲医院：\n• 大连医科大学附属第一医院（中山路）\n• 大连医科大学附属第二医院（黑石礁）\n• 大连市中心医院（Spring路）\n\n📱 挂号方式：\n• 微信公众号提前预约挂号\n• 医院自助机挂号\n• 急诊24小时开放\n\n💡 旅游小贴士：\n• 随身带好常用药品\n• 景区医务室在游客中心附近\n• 紧急情况拨打120'
      },
      {
        name: '酒店预订',
        desc: '各星级酒店、民宿在线预订',
        image: 'https://aka.doubaocdn.com/l/r38SgMEtWA',
        category: '生活服务',
        address: '大连全市各酒店民宿',
        lat: 38.9100,
        lng: 121.6200,
        detail: '【大连住宿推荐区域】\n\n🏨 推荐区域：\n• 中山区：市中心，近火车站、东港，交通方便\n• 沙河口区：近星海广场，看海方便\n• 开发区：近金石滩，度假首选\n\n💰 价格参考：\n• 经济型酒店：200-300元/晚\n• 中档酒店：400-600元/晚\n• 海景高档酒店：800-1500元/晚\n\n⚠️ 旺季提醒：7-8月、节假日建议提前1-2周预订'
      },
      {
        name: '美食地图',
        desc: '特色餐厅、小吃街精准定位',
        image: 'https://aka.doubaocdn.com/l/bXoBhhuDEl',
        category: '生活服务',
        address: '天津街、西安路、黑石礁美食区',
        lat: 38.9230,
        lng: 121.6420,
        detail: '【大连美食集中区域】\n\n🦞 海鲜大餐：\n• 天天渔港、品海楼（老字号）\n• 黑石礁海鲜排档（性价比高）\n\n🍢 小吃街：\n• 天津街小吃街（传统小吃）\n• 中原街小吃一条街\n• 西安路商圈美食\n\n💡 避坑指南：\n• 景区门口的海鲜店价格偏贵\n• 推荐去本地居民区附近的馆子\n• 吃海鲜先问价再点单'
      },
      {
        name: '公共厕所',
        desc: '沿线公共卫生间位置查询',
        image: 'https://aka.doubaocdn.com/l/3WD2WXVWPg',
        category: '生活服务',
        address: '各景区、商圈沿线',
        lat: 38.8700,
        lng: 121.6000,
        detail: '【大连公共卫生间分布】\n\n📍 主要分布：\n• 各景区游客中心附近\n• 滨海路沿线观景台\n• 各大商圈、公园\n\n📱 查询方式：\n• 高德地图/百度地图搜索"厕所"\n• 景区内都有明显指示牌\n\n💡 小贴士：\n• 滨海路徒步沿途都有卫生间\n• 商场、餐厅都可以借用\n• 节假日景区卫生间可能排队'
      },
    ],
  },
  {
    icon: '📱',
    title: '智慧服务',
    services: [
      {
        name: 'AI智能导览',
        desc: 'AR实景导航，走到哪讲到哪',
        image: 'https://aka.doubaocdn.com/l/MttzvIoel0',
        category: '智慧服务',
        address: '各主要景区',
        lat: 38.8855,
        lng: 121.5750,
        detail: '【大连AI智能导览服务】\n\n📱 体验方式：\n• 关注"大连文旅"公众号\n• 进入"智能导览"模块\n• 用手机摄像头对准景点\n\n✨ 功能特色：\n• AR实景识别景点\n• 自动语音讲解历史背景\n• 路线规划导航\n• 推荐附近景点\n\n🌟 已覆盖景区：星海广场、老虎滩、旅顺口等\n\n🔮 未来规划：将覆盖大连所有主要景区，实现全智能旅游体验'
      },
      {
        name: '多语言服务',
        desc: '中英日韩多语言即时翻译',
        image: 'https://aka.doubaocdn.com/l/r38SgMEtWA',
        category: '智慧服务',
        address: '机场、火车站、主要景区',
        lat: 38.9250,
        lng: 121.6400,
        detail: '【大连多语言服务】\n\n🌍 服务语言：中文、英语、日语、韩语\n\n📍 服务点：\n• 周水子机场国际到达层\n• 火车站旅游咨询中心\n• 主要景区游客中心\n• 高档酒店前台\n\n📱 自助翻译：\n• 手机翻译APP（有道、百度翻译）\n• 微信扫一扫翻译\n\n💡 大连作为国际化旅游城市，服务业对外语比较友好，简单沟通基本没问题'
      },
      {
        name: '应急求助',
        desc: '一键报警与紧急医疗救助呼叫',
        image: 'https://aka.doubaocdn.com/uM5s7xYtk1',
        category: '智慧服务',
        address: '全市各派出所、景区警务室',
        lat: 38.9100,
        lng: 121.6200,
        detail: '【大连旅游应急求助】\n\n📞 紧急电话：\n• 报警：110\n• 急救：120\n• 火警：119\n• 交通事故：122\n\n🚓 旅游警察：\n• 主要景区都有旅游警察巡逻点\n• 可以直接上前求助\n• 景区医务室在游客中心附近\n\n💡 注意事项：\n• 随身带好身份证\n• 贵重物品妥善保管\n• 海边游玩注意安全警示标志'
      },
      {
        name: '投诉建议',
        desc: '旅游服务质量监督与投诉受理',
        image: 'https://aka.doubaocdn.com/l/MttzvIoel0',
        category: '智慧服务',
        address: '大连市文旅局投诉中心',
        lat: 38.9100,
        lng: 121.6200,
        detail: '【大连旅游投诉渠道】\n\n📞 投诉电话：\n• 全国旅游投诉热线：12301\n• 市民服务热线：12345\n• 大连文旅局：0411-12345\n\n📱 线上投诉：\n• "大连文旅"公众号投诉建议模块\n• 12345政务服务平台\n\n💡 投诉小贴士：\n• 保留好消费凭证（发票、收据）\n• 记录商家名称、地址\n• 拍照录像留证\n• 一般投诉7个工作日内回复'
      },
    ],
  },
]
</script>

<template>
  <div class="city-services-page">
    <section class="page-hero" style="background: linear-gradient(135deg, rgba(12, 74, 110, 0.85) 0%, rgba(3, 105, 161, 0.75) 50%, rgba(14, 165, 233, 0.7) 100%), url('https://aka.doubaocdn.com/l/yQWaJsYQSI') center/cover no-repeat;">
      <h1>🛎️ 城市服务</h1>
      <p>一站式便民服务，让您的大连之行更加顺畅</p>
    </section>

    <section class="page-section">
      <div class="container">
        <h2 class="section-title">服务分类</h2>
        <p class="section-subtitle">全方位覆盖您的出行需求，点击查看详细指南</p>
        <div class="services-grid">
          <div v-for="cat in serviceCategories" :key="cat.title" class="service-category">
            <h3 class="category-title">
              <span class="category-icon">{{ cat.icon }}</span>
              {{ cat.title }}
            </h3>
            <ul class="service-list">
              <li
                v-for="service in cat.services"
                :key="service.name"
                class="service-item"
                @click="openDetail(service)"
              >
                <div class="service-item-content">
                  <h4>{{ service.name }}</h4>
                  <p>{{ service.desc }}</p>
                </div>
                <span class="click-hint">详情 →</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <DetailModal
      :visible="!!selectedService"
      :title="selectedService?.title || ''"
      :image="''"
      :content="selectedService?.content || ''"
      :tag="selectedService?.tag"
      @close="selectedService = null"
    />
  </div>
</template>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.service-category {
  background: #fff;
  border-radius: 16px;
  padding: 28px;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s, box-shadow 0.2s;
}
.service-category:hover {
  box-shadow: var(--shadow-md);
}
.category-title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 20px;
  font-size: 20px;
  color: var(--primary-color);
  padding-bottom: 14px;
  border-bottom: 2px solid #e0f2fe;
}
.category-icon {
  font-size: 28px;
}
.service-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.service-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 14px;
  border-bottom: 1px solid #f1f5f9;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
}
.service-item:hover {
  background: #f0f7ff;
  transform: translateX(4px);
}
.service-item:last-child {
  border-bottom: none;
}
.service-item-content h4 {
  margin: 0 0 4px;
  font-size: 15px;
  color: var(--text-primary);
  font-weight: 600;
}
.service-item-content p {
  margin: 0;
  font-size: 13px;
  color: var(--text-secondary);
}
.click-hint {
  font-size: 13px;
  color: #0ea5e9;
  font-weight: 500;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
