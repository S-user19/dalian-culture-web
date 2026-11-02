# 大连文化宣传网站

> Web智能化课程小组作业

## 项目简介

本项目是一个大连文化宣传网站，采用 Vue 3 + Vite + TypeScript 技术栈开发，旨在通过现代化的前端技术展示大连的城市文化、旅游景点、特色美食、交通路线等内容。

## 技术栈

- **框架**: Vue 3 (Composition API + `<script setup>`)
- **构建工具**: Vite
- **语言**: TypeScript
- **路由**: Vue Router 4
- **状态管理**: Pinia
- **样式**: CSS3 (响应式布局)

## 项目目录结构

```
dalian-culture-web/
├─ public/                 # 静态资源目录
├─ src/
│   ├─ api/                # 接口封装
│   │   └─ index.ts
│   ├─ assets/             # 图片、样式等资源
│   │   └─ main.css
│   ├─ components/         # 公共组件
│   │   ├─ TheHeader.vue       # 页眉（天气+搜索+导航）
│   │   ├─ TheFooter.vue       # 页脚
│   │   ├─ SideNav.vue         # 侧边导航
│   │   ├─ SearchBar.vue       # 搜索栏
│   │   ├─ WeatherWidget.vue   # 天气组件
│   │   ├─ CultureCard.vue     # 通用卡片
│   │   └─ IntelligentChat.vue # 智能问答
│   ├─ composables/        # 组合式函数
│   │   └─ useWeather.ts
│   ├─ router/             # 路由配置
│   │   └─ index.ts
│   ├─ stores/             # 状态管理（Pinia）
│   │   ├─ app.ts
│   │   └─ search.ts
│   ├─ views/              # 页面组件
│   │   ├─ HomeView.vue         # 宣传主页
│   │   ├─ CityIntroView.vue    # 城市介绍
│   │   ├─ CultureEventsView.vue # 文化活动
│   │   ├─ CityServicesView.vue # 城市服务
│   │   ├─ ScenicSpotsView.vue  # 经典景区
│   │   ├─ TravelGuidesView.vue # 游记攻略
│   │   ├─ FoodGuideView.vue    # 特色美食
│   │   └─ TrafficView.vue      # 交通路线
│   ├─ utils/              # 工具函数
│   │   └─ helpers.ts
│   ├─ App.vue
│   └─ main.ts
├─ tests/                  # 测试用例
├─ .prettierrc             # 格式化配置
├─ vite.config.ts          # 构建配置
├─ package.json
└─ README.md               # 项目说明
```

## 功能模块

### 已实现页面（共8个）

1. **宣传主页** - 轮播图、快捷入口、精选景区、文化活动、城市数据
2. **城市介绍** - 城市概况、基本信息、历史沿革时间线
3. **文化活动** - 赏槐会、啤酒节、服装节、樱花节等六大节庆
4. **城市服务** - 旅游服务、交通出行、生活服务、智慧服务四大类
5. **经典景区** - 星海广场、老虎滩、金石滩等6大景区
6. **游记攻略** - 徒步路线、经典行程、美食探店等攻略文章
7. **特色美食** - 海鲜、小吃、时令水果及推荐餐厅
8. **交通路线** - 地铁线路、有轨电车、机场、港口等出行指南

### 智能化功能

- **智能搜索** - 全站内容搜索，实时下拉结果
- **智能问答** - 右下角AI助手，可问答大连旅游相关问题
- **实时天气** - 页眉展示大连实时天气信息
- **无障碍辅助** - 高对比度模式、字体大小调节

## 快速开始

### 环境要求

- Node.js >= 18
- pnpm >= 8

### 安装依赖

```bash
pnpm install
```

### 开发环境运行

```bash
pnpm dev
```

浏览器访问 http://localhost:5173

### 生产构建

```bash
pnpm build
```

### 预览构建结果

```bash
pnpm preview
```

## 团队分工

| 角色 | 职责 |
|------|------|
| 项目经理 | 需求分析、进度管理 |
| UI设计 | 视觉设计、页面布局 |
| 前端开发 | 组件开发、页面实现 |
| 测试 | 功能测试、兼容性检查 |

## 浏览器兼容

- Chrome (最新版)
- Edge (最新版)
- Firefox (最新版)
- Safari (最新版)

---

© 2026 Web智能化课程小组作业 · 仅供学习使用
