<script setup lang="ts">
import { ref } from 'vue'
import DetailModal from './DetailModal.vue'
import { useRouter } from 'vue-router'

const props = defineProps<{
  title: string
  description: string
  image: string
  tag?: string
  link?: string
  detail?: string
}>()

const router = useRouter()
const showDetail = ref(false)

const handleClick = () => {
  if (props.detail) {
    showDetail.value = true
  } else if (props.link) {
    router.push(props.link)
  }
}
</script>

<template>
  <article class="culture-card" @click="handleClick">
    <div class="card-image">
      <img :src="image" :alt="title" loading="lazy" />
      <span v-if="tag" class="card-tag">{{ tag }}</span>
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-desc">{{ description }}</p>
      <span v-if="detail" class="card-link">
        点击查看详情 →
      </span>
      <span v-else-if="link" class="card-link">
        查看更多 →
      </span>
    </div>

    <DetailModal
      :visible="showDetail"
      :title="title"
      :image="image"
      :content="detail || description"
      :tag="tag"
      @close="showDetail = false"
    />
  </article>
</template>

<style scoped>
.culture-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 1px solid rgba(226, 232, 240, 0.6);
}
.culture-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(14, 165, 233, 0.15);
}
.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}
.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.culture-card:hover .card-image img {
  transform: scale(1.08);
}
.card-tag {
  position: absolute;
  top: 14px;
  left: 14px;
  padding: 5px 12px;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: #78350f;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(251, 191, 36, 0.4);
}
.card-content {
  padding: 20px;
}
.card-title {
  margin: 0 0 10px;
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
}
.card-desc {
  margin: 0 0 14px;
  font-size: 14px;
  color: #64748b;
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card-link {
  color: #0ea5e9;
  font-size: 14px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.culture-card:hover .card-link {
  gap: 8px;
}
</style>
