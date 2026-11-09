import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface SearchResult {
  id: number
  title: string
  category: string
  description: string
  path: string
}

export const useSearchStore = defineStore('search', () => {
  const query = ref('')
  const results = ref<SearchResult[]>([])
  const searching = ref(false)
  const showDropdown = ref(false)

  const mockDatabase: SearchResult[] = [
    { id: 1, title: '星海广场', category: '经典景区', description: '亚洲最大的城市广场，大连地标性景点', path: '/scenic-spots' },
    { id: 2, title: '老虎滩海洋公园', category: '经典景区', description: '国家5A级景区，海洋动物展示与表演', path: '/scenic-spots' },
    { id: 3, title: '金石滩风景区', category: '经典景区', description: '国家级旅游度假区，地质奇观众多', path: '/scenic-spots' },
    { id: 4, title: '有轨电车', category: '交通路线', description: '大连百年历史的城市有轨电车系统', path: '/traffic' },
    { id: 5, title: '大连海鲜', category: '特色美食', description: '新鲜的海胆、海参、鲍鱼等海鲜大餐', path: '/food-guide' },
    { id: 6, title: '大连樱桃', category: '特色美食', description: '国家地理标志产品，酸甜可口', path: '/food-guide' },
    { id: 7, title: '赏槐会', category: '文化活动', description: '每年五月举办的国际槐花节', path: '/culture-events' },
    { id: 8, title: '大连国际服装节', category: '文化活动', description: '享誉中外的国际性服饰文化盛会', path: '/culture-events' },
    { id: 9, title: '城市历史', category: '城市介绍', description: '大连从渔村到现代都市的发展历程', path: '/city-intro' },
    { id: 10, title: '旅游年卡', category: '城市服务', description: '大连旅游惠民年卡办理指南', path: '/city-services' },
    { id: 11, title: '滨海路徒步攻略', category: '游记攻略', description: '大连最美滨海路徒步路线详解', path: '/travel-guides' },
    { id: 12, title: '地铁线路图', category: '交通路线', description: '大连地铁各线路站点查询', path: '/traffic' },
  ]

  const doSearch = (keyword: string) => {
    query.value = keyword
    searching.value = true
    showDropdown.value = true

    if (!keyword.trim()) {
      results.value = []
      searching.value = false
      return
    }

    const lowerKeyword = keyword.toLowerCase()
    results.value = mockDatabase.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerKeyword) ||
        item.description.toLowerCase().includes(lowerKeyword) ||
        item.category.toLowerCase().includes(lowerKeyword),
    )
    searching.value = false
  }

  const clearSearch = () => {
    query.value = ''
    results.value = []
    showDropdown.value = false
  }

  const hideDropdown = () => {
    setTimeout(() => {
      showDropdown.value = false
    }, 500)
  }

  return {
    query,
    results,
    searching,
    showDropdown,
    doSearch,
    clearSearch,
    hideDropdown,
  }
})
