<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const props = defineProps<{
  visible: boolean
  title: string
  image: string
  content: string
  tag?: string
  address?: string
  lat?: number
  lng?: number
}>()

const emit = defineEmits<{
  close: []
}>()

const mapContainer = ref<HTMLElement | null>(null)
let map: any = null

// 加载Leaflet CSS和JS
const loadLeaflet = () => {
  return new Promise((resolve) => {
    if ((window as any).L) {
      resolve(true)
      return
    }
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    script.onload = () => resolve(true)
    document.head.appendChild(script)
  })
}

const initMap = async () => {
  if (!props.lat || !props.lng || !mapContainer.value) return

  await loadLeaflet()
  const L = (window as any).L

  if (map) {
    map.remove()
  }

  map = L.map(mapContainer.value, { zoomControl: true }).setView([props.lat, props.lng], 10)

  // 高德地图瓦片
  L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
    subdomains: ['1', '2', '3', '4'],
    maxZoom: 18,
  }).addTo(map)

  // 添加标记
  L.marker([props.lat, props.lng]).addTo(map)
    .bindPopup(props.title)
    .openPopup()

  // 修正地图尺寸并重新聚焦
  setTimeout(() => {
    map.invalidateSize()
    map.setView([props.lat, props.lng], 10)
  }, 200)
}

watch(() => props.visible, (newVal) => {
  if (newVal && props.lat && props.lng) {
    setTimeout(() => {
      initMap()
    }, 100)
  }
})
</script>

<template>
  <Teleport to="body">
    <div v-if="visible" class="detail-modal-overlay" @click="emit('close')">
      <div class="detail-modal" @click.stop>
        <button class="modal-close" @click="emit('close')" aria-label="关闭">×</button>
        <div v-if="image" class="modal-image">
          <img :src="image" :alt="title" />
        </div>
        <div class="modal-body">
          <div class="modal-header-row">
            <h2>{{ title }}</h2>
            <span v-if="tag && !image" class="modal-tag modal-tag-inline">{{ tag }}</span>
          </div>
          <p class="modal-content">{{ content }}</p>

          <!-- 地图位置 -->
          <div v-if="address" class="modal-map-section">
            <h3 class="map-title">📍 位置信息（高德地图）</h3>
            <p class="map-address">{{ address }}</p>
            <div v-if="lat && lng" ref="mapContainer" class="map-container"></div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.detail-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.detail-modal {
  background: #fff;
  border-radius: 16px;
  max-width: 700px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: modalIn 0.3s ease;
}
@keyframes modalIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-image {
  position: relative;
  height: 300px;
  overflow: hidden;
  border-radius: 16px 16px 0 0;
}
.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.modal-tag {
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 6px 14px;
  background: rgba(251, 191, 36, 0.95);
  color: #78350f;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
}
.modal-body {
  padding: 24px 28px 32px;
}
.modal-header-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid #e0f2fe;
}
.modal-header-row h2 {
  margin: 0;
  font-size: 24px;
  color: #1e293b;
}
.modal-tag-inline {
  position: static;
  padding: 4px 12px;
  font-size: 12px;
}
.modal-content {
  margin: 0 0 20px;
  font-size: 15px;
  line-height: 1.9;
  color: #475569;
  white-space: pre-line;
}
.modal-map-section {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
}
.map-title {
  margin: 0 0 8px;
  font-size: 16px;
  color: #1e293b;
}
.map-address {
  margin: 0 0 12px;
  font-size: 14px;
  color: #64748b;
}
.map-container {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  height: 220px;
  z-index: 1;
}
</style>
