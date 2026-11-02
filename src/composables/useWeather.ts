// 组合式函数：天气数据获取
import { ref, onMounted } from 'vue'

export function useWeather(city: string = '大连') {
  const weatherData = ref({
    temperature: 18,
    weather: '晴',
    humidity: 45,
    wind: '南风3-4级',
  })
  const loading = ref(false)

  const fetchWeather = async () => {
    loading.value = true
    try {
      // 实际项目中接入真实天气API
      await new Promise((r) => setTimeout(r, 300))
      console.log(`获取 ${city} 天气`)
    } catch (error) {
      console.error('天气获取失败', error)
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchWeather()
  })

  return {
    weatherData,
    loading,
    refresh: fetchWeather,
  }
}
