<script setup lang="ts">
import { ref } from 'vue'
import { useSearchStore } from '../stores/search'
import { useRouter } from 'vue-router'

const searchStore = useSearchStore()
const router = useRouter()
const inputValue = ref('')

const handleInput = () => {
  searchStore.doSearch(inputValue.value)
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' && searchStore.results.length > 0) {
    router.push(searchStore.results[0].path)
    searchStore.clearSearch()
    inputValue.value = ''
  }
}

const selectResult = (path: string) => {
  router.push(path)
  searchStore.clearSearch()
  inputValue.value = ''
}
</script>

<template>
  <div class="search-bar" @mouseleave="searchStore.hideDropdown">
    <div class="search-input-wrapper">
      <input
        v-model="inputValue"
        type="search"
        class="search-input"
        placeholder="搜索景点、美食、活动..."
        aria-label="站内搜索"
        @input="handleInput"
        @keydown="handleKeydown"
        @focus="searchStore.showDropdown = true"
      />
      <button class="search-btn" aria-label="搜索">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
      </button>
    </div>

    <div v-if="searchStore.showDropdown && inputValue" class="search-dropdown">
      <div v-if="searchStore.searching" class="search-loading">搜索中...</div>
      <div v-else-if="searchStore.results.length === 0" class="search-empty">
        未找到相关结果
      </div>
      <ul v-else class="search-results-list">
        <li
          v-for="item in searchStore.results"
          :key="item.id"
          class="search-result-item"
          @click="selectResult(item.path)"
        >
          <span class="result-category">{{ item.category }}</span>
          <div class="result-info">
            <div class="result-title">{{ item.title }}</div>
            <div class="result-desc">{{ item.description }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.search-bar {
  position: relative;
  width: 100%;
  max-width: 400px;
}
.search-input-wrapper {
  display: flex;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  overflow: hidden;
  backdrop-filter: blur(10px);
}
.search-input {
  flex: 1;
  padding: 10px 16px;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 14px;
  outline: none;
}
.search-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}
.search-btn {
  padding: 0 16px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background 0.2s;
}
.search-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}
.search-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  max-height: 400px;
  overflow-y: auto;
}
.search-loading,
.search-empty {
  padding: 16px;
  text-align: center;
  color: #666;
  font-size: 14px;
}
.search-results-list {
  list-style: none;
  margin: 0;
  padding: 8px 0;
}
.search-result-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.15s;
}
.search-result-item:hover {
  background: #f5f7fa;
}
.result-category {
  flex-shrink: 0;
  padding: 2px 8px;
  background: #e6f3ff;
  color: #1890ff;
  border-radius: 4px;
  font-size: 12px;
  margin-top: 2px;
}
.result-title {
  font-weight: 600;
  color: #333;
  font-size: 14px;
}
.result-desc {
  color: #999;
  font-size: 12px;
  margin-top: 2px;
}
</style>
