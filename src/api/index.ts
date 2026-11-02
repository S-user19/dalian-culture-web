// API 接口封装
// 实际项目中可替换为真实后端接口地址

export interface ApiResponse<T = unknown> {
  code: number
  message: string
  data: T
}

// 模拟天气接口
export const fetchWeather = async (city: string = '大连'): Promise<ApiResponse> => {
  // 实际项目中替换为真实天气API，如和风天气、心知天气等
  console.log(`获取 ${city} 天气数据`)
  return Promise.resolve({
    code: 200,
    message: 'success',
    data: {
      city,
      temperature: 18,
      weather: '晴',
      humidity: 45,
      wind: '南风3-4级',
    },
  })
}

// 模拟景区列表接口
export const fetchScenicSpots = async (): Promise<ApiResponse> => {
  return Promise.resolve({
    code: 200,
    message: 'success',
    data: [],
  })
}

// 模拟智能问答接口
export const fetchAIAnswer = async (question: string): Promise<ApiResponse<{ answer: string }>> => {
  console.log('智能问答问题:', question)
  // 实际项目中可接入大模型API
  return Promise.resolve({
    code: 200,
    message: 'success',
    data: {
      answer: '感谢您的提问，我正在为您查询相关信息...',
    },
  })
}
