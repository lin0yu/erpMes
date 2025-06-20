import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 自动携带 JWT Token
    const token = localStorage.getItem('jwt_token')
    if (token) {
      config.headers = config.headers || {}
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 业务层错误码处理
    if (response.data && response.data.code !== undefined && response.data.code !== 0) {
      switch (response.data.code) {
        case 401:
          ElMessage.error('未登录或登录已过期，请重新登录')
          break
        case 403:
          ElMessage.error('没有权限访问该资源')
          break
        case 500:
          ElMessage.error('服务器内部错误')
          break
        default:
          ElMessage.error(response.data.msg || '请求出错')
      }
      return Promise.reject(response.data)
    }
    return response.data
  },
  error => {
    // 网络或 HTTP 层错误处理
    if (error.response) {
      switch (error.response.status) {
        case 401:
          ElMessage.error('未登录或登录已过期，请重新登录')
          break
        case 403:
          ElMessage.error('没有权限访问该资源')
          break
        case 500:
          ElMessage.error('服务器内部错误')
          break
        default:
          ElMessage.error(error.response.data?.msg || '请求失败')
      }
    } else {
      ElMessage.error('网络异常，请检查您的网络连接')
    }
    return Promise.reject(error)
  }
)

export function request<T = any>(config: AxiosRequestConfig): Promise<T> {
  return service(config).then((res: AxiosResponse) => res.data) as Promise<T>
}
