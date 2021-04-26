export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'
type ResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'

// 核心接口
export interface Core {
  // 基础请求地址
  baseUrl: string
  // 当前请求队列
  queue: {
    [index: string]: string
  }
}

// 基础XHR接口
interface Http {
  // 数据
  data?: any
  // 请求头
  headers?: any
}

// 请求接口
export interface Request extends Http {
  // 请求方式
  method: Method
  // 请求地址
  url: string
  // 请求参数
  params?: any
  // 响应格式
  responseType?: ResponseType
}

// 响应接口
export interface Response extends Http {
  request?: any
  status: number
  statusText: string
  config: Request
}

// 配置接口
export interface Options extends Http {
  // 基础请求地址
  baseURL?: string
  // 超时时间
  timeout?: number
  // 跨域时是否携带凭证
  withCredentials?: boolean
}
