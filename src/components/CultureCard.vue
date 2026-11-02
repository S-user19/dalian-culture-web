<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image: string
  tag?: string
  link?: string
}>()
</script>

<template>
  <article class="culture-card">
    <div class="card-image">
      <img :src="image" :alt="title" loading="lazy" />
      <span v-if="tag" class="card-tag">{{ tag }}</span>
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-desc">{{ description }}</p>
      <router-link v-if="link" :to="link" class="card-link">
        查看详情 →
      </router-link>
    </div>
  </article>
</template>

<style scoped>
.culture-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}
.culture-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
.card-image {
  position: relative;
  height: 180px;
  overflow: hidden;
}
.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}
.culture-card:hover .card-image img {
  transform: scale(1.05);
}
.card-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 10px;
  background: rgba(251, 191, 36, 0.95);
  color: #78350f;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}
.card-content {
  padding: 16px;
}
.card-title {
  margin: 0 0 8px;
  font-size: 17px;
  color: #1e293b;
}
.card-desc {
  margin: 0 0 12px;
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card-link {
  color: #0ea5e9;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}
.card-link:hover {
  text-decoration: underline;
}
</style>
