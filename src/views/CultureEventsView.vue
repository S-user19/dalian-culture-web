<script setup lang="ts">
import { ref } from 'vue'
import CultureCard from '../components/CultureCard.vue'
import DetailModal from '../components/DetailModal.vue'

const selectedEvent = ref<{
  title: string
  image: string
  tag: string
  content: string
} | null>(null)

const openDetail = (event: any) => {
  selectedEvent.value = {
    title: event.title,
    image: event.image,
    tag: event.tag,
    content: event.detail,
  }
}

const events = [
  {
    title: '大连赏槐会',
    description: '每年5月下旬举办，以槐花为媒介，融合旅游、文化、经贸活动，是大连重要的国际旅游节庆。',
    image: 'https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/668364479744049157~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1809330116&x-signature=7H3gkkHg70QlSYLkb24O9ekpO%2Bw%3D',
    tag: '每年5月',
    detail: '大连赏槐会创办于1989年，每年5月下旬槐花盛开之际举办，至今已举办35届。大连市树为槐树，市区遍植刺槐，每到五月，满城槐花香飘十里，是大连最具代表性的城市景观之一。\n\n赏槐会以槐花为媒介，采用"主会场+全市分会场"全域联动模式，融合旅游观光、文化交流、经贸洽谈、文体赛事等20余项主题活动。主要活动包括：万人环城长跑、槐花文化论坛、国际友好城市交流、槐花美食市集、文艺演出、摄影大赛等。\n\n大连与日本北九州、温哥华等多个国际友好城市都会派代表团参与，是大连重要的国际旅游节庆品牌。每到赏槐会期间，市民和游客漫步槐花树下，品味清香，感受滨城五月的独特魅力。',
  },
  {
    title: '中国国际啤酒节',
    description: '每年夏季在星海广场举办，是中国最大的啤酒节，汇聚国内外知名啤酒品牌，狂欢盛宴。',
    image: 'https://aka.doubaocdn.com/l/9VvkiepBWl',
    tag: '每年7月',
    detail: '中国国际啤酒节创办于1999年，每年7月在大连星海广场举办，是中国创办最早、规模最大的国际啤酒节之一。\n\n节日汇聚了德国、美国、荷兰、比利时、日本等世界知名啤酒品牌，设置十余个大型啤酒大篷和露天啤酒花园。各啤酒大篷都有自己的主题装饰和特色演出，德国大篷有传统巴伐利亚乐队，比利时大篷有精酿啤酒品鉴。\n\n活动内容丰富多彩：啤酒王争霸赛、国际乐队巡回演出、美食小吃一条街、狂欢花车巡游、烟火表演、沙滩足球赛等。每届啤酒节都吸引数十万市民和游客参与，在星海广场的星空下举杯畅饮，是夏季大连最热闹的狂欢盛宴。',
  },
  {
    title: '大连国际服装节',
    description: '创办于1988年，是集经贸、文化、旅游为一体的国际性服饰文化盛会，享誉海内外。',
    image: 'https://aka.doubaocdn.com/l/LLdQT26UtX',
    tag: '每年9月',
    detail: '大连国际服装节创办于1988年，是中国最早的服装节庆活动之一，如今已发展为"中国（大连）国际服装纺织品博览会+大连时装周"的时尚矩阵模式。\n\n每年6-9月举办，期间有国际时装周、品牌发布会、模特大赛、设计论坛、游园嘉年华等数十场活动。大连作为中国著名的"服装城"，拥有深厚的服装产业基础，服装节不仅展示了国内外最新时尚服饰，更成为了产业对接、经贸交流的重要平台。\n\n每届时装周都会举办40余场时尚大秀，邀请国内外知名设计师和品牌参与，"大连杯"国际青年服装设计大赛更是发掘了大量新锐设计人才。服装节已成为大连重要的城市文化名片，享誉海内外。',
  },
  {
    title: '旅顺樱花节',
    description: '四月龙王塘樱花园樱花盛开，数千株樱花竞相绽放，浪漫花海吸引无数游客打卡。',
    image: 'https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/934108657694933050~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1809168790&x-signature=Vu5wKdf5t%2BQHgrnLgbbyQqUGZ3g%3D',
    tag: '每年4月',
    detail: '旅顺樱花节每年4月中旬至5月上旬举办，至今已举办18届。旅顺是中国北方最大的樱花种植区，樱花种植历史可追溯到上世纪初。\n\n两大赏樱胜地：\n• 旅顺203樱花园：占地近万平方公里，有染井吉野、关山、松月、普贤象等30多个品种、5000多株樱花，是东北亚地区最大的樱花园之一。\n• 龙王塘樱花园：始建于1921年，园内有300多株树龄近百年的明治时期樱花树，是大连最古老的樱花园。\n\n每到樱花盛开时节，满园粉白绯红，花瓣随风飘落形成浪漫的"樱花雨"。樱花季期间还会举办春日列车打卡集章、樱花文创市集、汉服游园、摄影大赛等活动，吸引无数游客前来打卡拍照。',
  },
  {
    title: '大连国际沙滩文化节',
    description: '夏季金石滩沙滩盛会，沙滩运动、音乐演出、美食嘉年华，尽享海滨夏日激情。',
    image: 'https://aka.doubaocdn.com/l/m7cU6UVUPi',
    tag: '每年6-8月',
    detail: '大连国际沙滩文化节每年6月至8月在金石滩快乐海岸举办，至今已举办21届，是大连夏季最具人气的文旅品牌活动。\n\n活动内容涵盖文体旅商多个领域，主要包括：\n• 沙滩运动赛事：沙滩排球、沙滩足球、沙滩拔河、沙滩障碍挑战赛等\n• 文艺演出：沙滩音乐节、篝火晚会、电音派对、街头艺术表演\n• 美食嘉年华：海鲜美食节、啤酒花园、后备箱创意市集\n• 亲子活动：沙滩城堡大赛、儿童游乐区、帆船体验\n\n金石滩拥有绵延数公里的金色沙滩，海水清澈，沙质细腻。每到夏季，游客们在沙滩上晒太阳、玩沙滩排球、踏浪游泳，晚上参加音乐节和篝火晚会，尽情享受夏日海滨的激情与快乐。',
  },
  {
    title: '冬季温泉滑雪节',
    description: '冬季限定，旅顺温泉、安波温泉滑雪，体验大连冬日的别样温暖与激情。',
    image: 'https://aka.doubaocdn.com/l/WMSflPRXnu',
    tag: '每年12-2月',
    detail: '大连冬季温泉滑雪节每年12月至次年2月举办，至今已举办16届。大连虽然地处东北，但因受海洋性气候影响，冬季并不严寒，平均气温在-5℃左右，非常适合冬季出游。\n\n"滑雪+温泉"是大连冬季旅游的独特亮点：\n• 安波温泉：辽宁著名温泉度假区，泉水含多种矿物质，水温高达70℃以上，泡在温暖的泉水中欣赏冬日雪景别有风味\n• 安波滑雪场、林海滑雪场：拥有多条初、中、高级雪道，适合不同水平的滑雪爱好者\n• 老铁山温泉、龙门温泉：周边还有温泉民宿、农家宴、赶大集等民俗体验\n\n冬季来大连，既能体验滑雪的速度与激情，又能享受温泉的温暖与舒适，还能品尝地道的海鲜和东北农家菜，体验别样的冬日风情。',
  },
]
</script>

<template>
  <div class="culture-events-page">
    <section class="page-hero" style="background: linear-gradient(135deg, rgba(12, 74, 110, 0.85) 0%, rgba(3, 105, 161, 0.75) 50%, rgba(14, 165, 233, 0.7) 100%), url('https://aka.doubaocdn.com/l/9VvkiepBWl') center/cover no-repeat;">
      <h1>🎭 文化活动</h1>
      <p>四季有节，季季有会，感受大连的文化脉搏</p>
    </section>

    <section class="page-section">
      <div class="container">
        <h2 class="section-title">品牌节庆活动</h2>
        <p class="section-subtitle">大连四季文旅节庆一览，点击卡片查看详情</p>
        <div class="grid-3">
          <div v-for="event in events" :key="event.title" @click="openDetail(event)">
            <CultureCard
              :title="event.title"
              :description="event.description"
              :image="event.image"
              :tag="event.tag"
            />
          </div>
        </div>
      </div>
    </section>

    <DetailModal
      :visible="!!selectedEvent"
      :title="selectedEvent?.title || ''"
      :image="selectedEvent?.image || ''"
      :content="selectedEvent?.content || ''"
      :tag="selectedEvent?.tag"
      @close="selectedEvent = null"
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
</style>
