const Request = async function (param, time = 200) {
  let promise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(param)
      console.log('Promise函数')
    }, time)
  })
  // 执行异步操作
  let result = await promise
  console.log('获取异步执行返回的结果：', result)
  console.log(2)
}


export default Request