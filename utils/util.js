/**
 * Created by hf on 19/04/20.
*/

// 数字用逗号隔开 s=数字, n=小数位
export function fmoney(s, n) {
  n = n > 0 && n <= 20 ? n : 2
  s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + ''
  const l = s.split('.')[0].split('').reverse()
  const r = s.split('.')[1]
  let t = ''
  let minus = ''
  if (l[l.length - 1] === '-') {
    l.pop()
    minus = '-'
  }
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '')
  }
  return minus + t.split('').reverse().join('') + '.' + r
}

/* 正整数*/
export function isPositive(str) {
  const reg = /^[1-9]\d*$/
  return reg.test(str)
}

/* 判断手机或座机*/
export function isCheckPhone(str) {
  const reg = /^((0\d{2,3}-\d{7,8})|(1[23456789]\d{9}))$/
  return reg.test(str)
}

/* 时间戳转日期 yyyy-mm-dd*/
export function timeYMD(val) {
  if (!val) return ''
  var date = new Date(val)
  var y = 1900 + date.getYear()
  var m = '0' + (date.getMonth() + 1)
  var d = '0' + date.getDate()
  return y + '-' + m.substring(m.length - 2, m.length) + '-' + d.substring(d.length - 2, d.length)
}
/* 时间戳转日期 yyyy/mm/dd*/
export function timeYMDa(val) {
  if (!val) return ''
  var date = new Date(val)
  var y = 1900 + date.getYear()
  var m = '0' + (date.getMonth() + 1)
  var d = '0' + date.getDate()
  return y + '/' + m.substring(m.length - 2, m.length) + '/' + d.substring(d.length - 2, d.length)
}

/* 时间戳转日期 mm-dd*/
export function timeMD(val) {
  if (!val) return ''
  var date = new Date(val)
  var y = 1900 + date.getYear()
  var m = '0' + (date.getMonth() + 1)
  var d = '0' + date.getDate()
  return m.substring(m.length - 2, m.length) + '-' + d.substring(d.length - 2, d.length)
}

/* 时间戳转日期 hh:mm*/
export function timeHM(val) {
  if (!val) return ''
  var date = new Date(val)
  let H = date.getHours()
  let i = date.getMinutes()
  H = H < 10 ? '0' + H : H
  i = i < 10 ? '0' + i : i
  var t = H + ':' + i
  return t
}

/* 时间戳转日期 yyyy-MM-dd HH:mm:ss*/
export function timeFull(val) {
  if (!val) return ''
  var date = new Date(val)
  const Y = date.getFullYear()
  let m = date.getMonth() + 1
  let d = date.getDate()
  let H = date.getHours()
  let i = date.getMinutes()
  let s = date.getSeconds()
  m = m < 10 ? '0' + m : m
  d = d < 10 ? '0' + d : d
  H = H < 10 ? '0' + H : H
  i = i < 10 ? '0' + i : i
  s = s < 10 ? '0' + s : s
  var t = Y + '-' + m + '-' + d + ' ' + H + ':' + i + ':' + s
  return t
}




/* 指定格式 转换金额显示 */
export function money(value, config = { unit: '', fixed: 2 }) {
  const moneyStr = `${value}` // ¥
  if (moneyStr.indexOf('-') > -1) {
    const scope = moneyStr.split('-')
    return `${parseFloat(scope[1]).toFixed(config.fixed).toString()}${config.unit}`
  } else if (value > 0 || value > '0') {
    return `${parseFloat(moneyStr).toFixed(config.fixed).toString()}${config.unit}`
  } else {
    return value
  }
}
/* 单纯的把数字内容 变成 带两位小数的字符串 */
export function numDub(number) {
  if (number) {
    const temp = parseFloat(number)
    return temp.toFixed(2) + ''
  } else {
    return '0.00'
  }
}
// 缓存单个值
export function putLocalValue(keys, values) {
  const params = {
    value: values
  }
  const condition = JSON.stringify(params)
  localStorage.setItem(keys, condition)
}
// 获取单个值缓存
export function getLocalStrValue(keys) {
  const data = uni.getStorageSync(keys)
  const params = JSON.parse(data)
  if (data != null) {
    return params.value
  }
  return ''
}
// 获取单个值缓存
export function getLocalIntValue(keys) {
  const data = uni.getStorageSync(keys)
  const params = JSON.parse(data)
  if (data != null) {
    return params.value
  }
  return 0
}
// 获取单个值缓存（布尔型）
export function getLocalBooleanValue(keys) {
  const data = uni.getStorageSync(keys)
  const params = JSON.parse(data)
  if (data != null) {
    return params.resources
  }
  return false
}
// 获取单个值缓存 数组
export function getLocalArrValue(keys) {
  const data = uni.getStorageSync(keys)
  // const params = JSON.parse(data)
  // console.log('params',params)
  if (data != null) {
    return data.resources
  }
  return []
}
// 移除缓存
export function removeLocalValue(keys) {
  try{
	uni.removeStorageSync(keys)
  }catch(e){
	
  }
}
/**
 * 判断字符串里是否包含某个字符串
 */
export function strContainStr(str, val) {
  let flags = false
  if (str.indexOf(val) !== -1) {
    flags = true
  }
  return flags
}



