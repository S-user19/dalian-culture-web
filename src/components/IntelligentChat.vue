<script setup lang="ts">
import { ref, nextTick } from 'vue'

interface ChatMessage {
  role: 'user' | 'ai'
  content: string
  time: string
}

const isOpen = ref(false)
const inputMessage = ref('')
const messages = ref<ChatMessage[]>([
  {
    role: 'ai',
    content: '您好！我是大连文化智能助手，可以为您解答关于大连旅游、美食、交通、景点等问题。请问有什么可以帮您？',
    time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
  },
])
const chatContainer = ref<HTMLElement | null>(null)

const knowledgeBase: Record<string, string> = {
  '星海广场': '星海广场位于大连市沙河口区，是亚洲最大的城市广场之一，占地面积176万平方米。广场南临黄海，北依星海会展中心，是大连的标志性景点。',
  '老虎滩': '老虎滩海洋公园是国家5A级旅游景区，位于大连南部海滨中部，占地面积118公顷，拥有极地馆、海兽馆、鸟语林等多个场馆。',
  '金石滩': '金石滩国家旅游度假区位于大连市金州区，三面环海，冬无严寒，夏无酷暑，被誉为"东方夏威夷"。',
  '海鲜': '大连盛产各种海鲜，特色包括海参、鲍鱼、扇贝、海胆、螃蟹等。推荐去天津街或黑石礁品尝地道海鲜。',
  '交通': '大连市内交通便利，有地铁1-5号线，还有百年历史的有轨电车201路。周水子国际机场开通了国内外众多航线。',
  '樱花': '大连旅顺龙王塘樱花园是东北地区最大的樱花园，每年4月底至5月初樱花盛开，是赏樱好去处。',
  '啤酒节': '中国国际啤酒节每年夏季在大连星海广场举办，是中国最大的啤酒节之一，吸引众多游客参与。',
  '气候': '大连属于温带季风气候，海洋性特征明显，四季分明，冬无严寒，夏无酷暑，年平均气温10℃左右。',
  '历史': '大连地区历史悠久，近代曾被俄、日租借统治，1945年解放。城市风格融合了俄式、日式建筑特色。',
}

const toggleChat = () => {
  isOpen.value = !isOpen.value
}

const scrollToBottom = async () => {
  await nextTick()
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}

const getAIResponse = (question: string): string => {
  for (const [key, answer] of Object.entries(knowledgeBase)) {
    if (question.includes(key)) {
      return answer
    }
  }
  return '感谢您的提问！关于这个问题，我建议您浏览网站的相关板块获取更多详细信息，或者您也可以换个关键词试试，比如：星海广场、老虎滩、海鲜、交通、樱花、啤酒节等。'
}

const sendMessage = () => {
  if (!inputMessage.value.trim()) return

  const userMsg: ChatMessage = {
    role: 'user',
    content: inputMessage.value,
    time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
  }
  messages.value.push(userMsg)
  const question = inputMessage.value
  inputMessage.value = ''

  setTimeout(() => {
    const aiMsg: ChatMessage = {
      role: 'ai',
      content: getAIResponse(question),
      time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
    }
    messages.value.push(aiMsg)
    scrollToBottom()
  }, 500)

  scrollToBottom()
}
</script>

<template>
  <!-- 悬浮按钮 -->
  <button class="chat-fab" @click="toggleChat" aria-label="打开智能助手">
    <span v-if="!isOpen">💬</span>
    <span v-else>×</span>
  </button>

  <!-- 聊天窗口 -->
  <div class="chat-window" :class="{ open: isOpen }">
    <div class="chat-header">
      <h3>🤖 大连文化智能助手</h3>
    </div>
    <div ref="chatContainer" class="chat-messages">
      <div
        v-for="(msg, index) in messages"
        :key="index"
        class="message"
        :class="msg.role"
      >
        <div class="message-bubble">
          <p>{{ msg.content }}</p>
          <span class="message-time">{{ msg.time }}</span>
        </div>
      </div>
    </div>
    <div class="chat-input-area">
      <input
        v-model="inputMessage"
        type="text"
        placeholder="输入您的问题..."
        aria-label="输入问题"
        @keydown.enter="sendMessage"
      />
      <button @click="sendMessage" aria-label="发送">发送</button>
    </div>
  </div>
</template>

<style scoped>
.chat-fab {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0369a1, #0ea5e9);
  color: #fff;
  border: none;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(3, 105, 161, 0.4);
  z-index: 999;
  transition: transform 0.2s;
}
.chat-fab:hover {
  transform: scale(1.05);
}

.chat-window {
  position: fixed;
  bottom: 100px;
  right: 30px;
  width: 360px;
  height: 480px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);
  z-index: 999;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
  pointer-events: none;
  transition: all 0.3s ease;
}
.chat-window.open {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.chat-header {
  background: linear-gradient(135deg, #0369a1, #0ea5e9);
  color: #fff;
  padding: 14px 16px;
}
.chat-header h3 {
  margin: 0;
  font-size: 15px;
}

.chat-messages {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  background: #f8fafc;
}
.message {
  margin-bottom: 14px;
  display: flex;
}
.message.user {
  justify-content: flex-end;
}
.message-bubble {
  max-width: 80%;
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.6;
}
.message.ai .message-bubble {
  background: #fff;
  color: #333;
  border-bottom-left-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
.message.user .message-bubble {
  background: #0ea5e9;
  color: #fff;
  border-bottom-right-radius: 4px;
}
.message-time {
  display: block;
  font-size: 11px;
  opacity: 0.6;
  margin-top: 4px;
}

.chat-input-area {
  display: flex;
  padding: 12px;
  border-top: 1px solid #eee;
  gap: 8px;
}
.chat-input-area input {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 20px;
  outline: none;
  font-size: 14px;
}
.chat-input-area input:focus {
  border-color: #0ea5e9;
}
.chat-input-area button {
  padding: 8px 18px;
  border: none;
  background: #0ea5e9;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
}

@media (max-width: 480px) {
  .chat-window {
    right: 16px;
    left: 16px;
    width: auto;
    height: 70vh;
  }
}
</style>
