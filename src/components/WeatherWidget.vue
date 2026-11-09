<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface WeatherData {
  city: string
  temperature: number
  weather: string
  humidity: number
  wind: string
  icon: string
}

// 天气代码映射表（Open-Meteo WMO Weather codes）
const weatherCodeMap: Record<number, { text: string; icon: string }> = {
  0: { text: '晴', icon: '☀️' },
  1: { text: '大致晴', icon: '🌤️' },
  2: { text: '多云', icon: '⛅' },
  3: { text: '阴', icon: '☁️' },
  45: { text: '雾', icon: '🌫️' },
  48: { text: '雾凇', icon: '🌫️' },
  51: { text: '小毛毛雨', icon: '🌦️' },
  53: { text: '毛毛雨', icon: '🌦️' },
  55: { text: '大毛毛雨', icon: '🌧️' },
  61: { text: '小雨', icon: '🌧️' },
  63: { text: '中雨', icon: '🌧️' },
  65: { text: '大雨', icon: '🌧️' },
  71: { text: '小雪', icon: '🌨️' },
  73: { text: '中雪', icon: '🌨️' },
  75: { text: '大雪', icon: '❄️' },
  95: { text: '雷雨', icon: '⛈️' },
}

const weather = ref<WeatherData>({
  city: '大连',
  temperature: 18,
  weather: '加载中',
  humidity: 0,
  wind: '-',
  icon: '🌡️',
})

const loading = ref(false)

const fetchWeather = async () => {
  loading.value = true
  try {
    // 使用 Open-Meteo 免费天气API（无需申请密钥）
    // 大连经纬度：38.9140, 121.6147
    const response = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=38.9140&longitude=121.6147&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=Asia/Shanghai',
    )
    const data = await response.json()

    const code = data.current.weather_code
    const weatherInfo = weatherCodeMap[code] || { text: '未知', icon: '🌡️' }

    weather.value = {
      city: '大连',
      temperature: Math.round(data.current.temperature_2m),
      weather: weatherInfo.text,
      humidity: data.current.relative_humidity_2m,
      wind: `${Math.round(data.current.wind_speed_10m)}km/h`,
      icon: weatherInfo.icon,
    }
  } catch (error) {
    console.error('天气获取失败，使用默认数据', error)
    weather.value = {
      city: '大连',
      temperature: 18,
      weather: '晴',
      humidity: 45,
      wind: '南风3-4级',
      icon: '☀️',
    }
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchWeather()
})
</script>

<template>
  <div class="weather-widget" aria-label="大连实时天气">
    <span class="weather-icon" aria-hidden="true">{{ weather.icon }}</span>
    <span class="weather-temp">{{ weather.temperature }}°C</span>
    <span class="weather-desc">{{ weather.weather }}</span>
    <span class="weather-humidity">湿度{{ weather.humidity }}%</span>
  </div>
</template>

<style scoped>
.weather-widget {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #475569;
}
.weather-icon {
  font-size: 18px;
}
.weather-temp {
  font-weight: 600;
}
.weather-desc,
.weather-humidity {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .weather-humidity {
    display: none;
  }
}
</style>
