import axios from 'axios'

// 导入类型和接口
import {
  Method,
  Core,
  Request,
  Response,
  Options
} from './core.interface'

// 导入路由
// import router from '@/router'

/**
 * @functionName HttpRequest
 * @param {String} baseUrl 基础请求地址
 * @return {Object} 返回请求结果
 * @description axios封装
 * @author 张航
 * @date 2021-04-26 11:49:21
 * @version V1.0.0
 */
class HttpRequest implements Core {
  // 基础请求路径
  baseUrl: string
  // 请求队列
  queue: any

  constructor(baseUrl: string = '') {
    // 赋值基础请求路径
    this.baseUrl = baseUrl
    // 初始化请求队列
    this.queue = {}
  }
  /**
   * @functionName getInsideConfig
   * @return {Object} 返回内部配置
   * @description 获取内部默认配置
   * @author 张航
   * @date 2021-04-26 15:55:49
   * @version V1.0.0
   */
  getInsideConfig () {
    const config: Options = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
        'access_token': localStorage.getItem('token') || ''
      },
      withCredentials: true,
      timeout: 10000
    }
    return config
  }
  /**
   * @functionName destroy
   * @param {String} url 请求地址
   * @description 销毁请求队列中的地址数据
   * @author 张航
   * @date 2021-04-26 17:11:41
   * @version V1.0.0
   */
  destroy (url: string) {
    delete this.queue[url]
  }
  /**
   * @functionName interceptors
   * @param {*} instance axios实例
   * @description 添加请求和响应拦截
   * @author 张航
   * @date 2021-04-26 16:35:37
   * @version V1.0.0
   */
  interceptors (instance: any, url: string) {
    // 请求拦截
    instance.interceptors.request.use(
      (config: any) => {
        this.queue[url] = true
        return config
      },
      (error: any) => {
        return Promise.reject(error)
      }
    )
    // 响应拦截
    instance.interceptors.response.use(
      (res: Response) => {
        this.destroy(url)
        const {
          data
        } = res
        if (data.resultCode !== 200) {
          // Message({
          //   message: data.resultMsg,
          //   type: 'warning'
          // })
        }
        if (data.resultCode === 50001) {
          localStorage.clear()
          // router.replace({
          //   name: 'login'
          // })
        }
        return data
      },
      (error: any) => {
        this.destroy(url)
        return Promise.reject(error)
      }
    )
  }
  /**
   * @functionName request
   * @param {Object} options 请求配置
   * @return {Promise} 返回axios实例
   * @description 方法描述
   * @author 张航
   * @date 2021-04-26 17:25:55
   * @version V1.0.0
   */
  request (options: Request) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
  /**
   * @functionName   get
   * @param {String} url 请求地址
   * @return {Promise} 返回结果
   * @description 查询
   * @author 张航
   * @date 2020-03-20 10:45:17
   * @version V1.0.0
   */
  get (url:string = '', params: any = {}) {
    const config = {
      url,
      params,
      method: 'GET' as Method
    }
    return this.request(config)
  }
  /**
   * @functionName   post
   * @param {String} url 请求地址
   * @param {Object} data 请求数据
   * @param {Boolean} url 请求类型: true: json; false:formdata;
   * @return {Promise} 返回结果
   * @description 提交
   * @author 张航
   * @date 2020-03-20 10:45:17
   * @version V1.0.0
   */
  post (url = '', data = {}, type = true) {
    const config = {
      url,
      data,
      method: 'POST' as Method
    }
    return this.request(config)
  }
  /**
   * @functionName   put
   * @param {String} url 请求地址
   * @param {Object} data 请求数据
   * @param {Boolean} url 请求类型: true: json; false:formdata;
   * @return {Promise} 返回结果
   * @description 修改
   * @author 张航
   * @date 2020-03-20 10:45:17
   * @version V1.0.0
   */
  put (url = '', data = {}, type = true) {
    // const _data = type ? data : qs.stringify(data, {
    //   arrayFormat: 'repeat'
    // })
    const config = {
      url,
      data,
      method: 'PUT' as Method
    }
    return this.request(config)
  }
  /**
   * @functionName   delete
   * @param {String} url 请求地址
   * @param {Object} data 请求数据
   * @param {Boolean} url 请求类型: true: json; false:formdata;
   * @return {Promise} 返回结果
   * @description 删除
   * @author 张航
   * @date 2020-03-20 10:45:17
   * @version V1.0.0
   */
  delete (url = '', data = {}, type = true) {
    // const _data = type ? data : qs.stringify(data, {
    //   arrayFormat: 'repeat'
    // })
    const config = {
      url,
      data,
      method: 'DELETE' as Method
    }
    return this.request(config)
  }
}

export default HttpRequest
