import axios from 'axios'
// import qs from 'qs'

// 全局加载遮罩
// import { Loading, Message } from 'element-ui'
// let loading

// 导入错误代码
// import errorCode from './errorCode'

// 导入工具函数
// import tools from '@/tools'

// 导入路由
// import router from '@/router'

/**
 * @functionName HttpRequest
 * @param {String} baseUrl 基础请求地址
 * @return {Object} 返回请求结果
 * @description axios封装
 * @author 张航
 * @date 2020-03-19 11:49:21
 * @version V1.0.0
 */
class HttpRequest {
  constructor(baseUrl = '') {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
        // 'access_token': tools.localRead('token')
      },
      withCredentials: true
      // timeout: 10000,
      // cancelToken: new axios.CancelToken(function (cancel) {
      //   console.log(cancel)
      //   Message({
      //     message: cancel,
      //     type: 'warning'
      //   })
      //   loading.close()
      // })
    }
    return config
  }
  destroy (url) {
    // loading.close()
    delete this.queue[url]
  }
  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(
      config => {
        this.queue[url] = true
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
    // 响应拦截
    instance.interceptors.response.use(
      res => {
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
      error => {
        // 获取错误数据
        // const _error = error.response
        // 获取状态码
        // const { status = 'default' } = _error
        // 获取提示信息
        // let msg = errorCode[status]
        // 获取404地址
        // if (status === 404) {
        //   msg = msg + _error.config.url
        // }
        // Message({
        //   message: msg,
        //   type: 'error'
        // })
        // console.log(msg)
        this.destroy(url)
        // tools.addErrorLog(_error)
        return Promise.reject(error)
      }
    )
  }
  request (options) {
    // loading = Loading.service({
    //   lock: true,
    //   text: '正在加载……'
    // })
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
  /**
   * @functionName   get
   * @param {String} url 请求地址
   * @return {Object} 返回结果
   * @description 查询
   * @author 张航
   * @date 2020-03-20 10:45:17
   * @version V1.0.0
   */
  get (url = '') {
    const config = {
      url,
      method: 'get'
    }
    return this.request(config)
  }
  /**
   * @functionName   post
   * @param {String} url 请求地址
   * @param {Object} data 请求数据
   * @param {Boolean} url 请求类型: true: json; false:formdata;
   * @return {Object} 返回结果
   * @description 提交
   * @author 张航
   * @date 2020-03-20 10:45:17
   * @version V1.0.0
   */
  post (url = '', data = {}, type = true) {
    // const _data = type ? data : qs.stringify(data, {
    //   arrayFormat: 'repeat'
    // })
    const config = {
      url,
      data,
      method: 'post'
    }
    return this.request(config)
  }
  /**
   * @functionName   put
   * @param {String} url 请求地址
   * @param {Object} data 请求数据
   * @param {Boolean} url 请求类型: true: json; false:formdata;
   * @return {Object} 返回结果
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
      method: 'put'
    }
    return this.request(config)
  }
  /**
   * @functionName   delete
   * @param {String} url 请求地址
   * @param {Object} data 请求数据
   * @param {Boolean} url 请求类型: true: json; false:formdata;
   * @return {Object} 返回结果
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
      method: 'delete'
    }
    return this.request(config)
  }
}

export default HttpRequest
