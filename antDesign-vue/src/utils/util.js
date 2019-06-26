/**
 * 类型检测
 * @param {*} obj
 * @returns {String} 类型字符串
 */
export function type(obj) {
  return Object.prototype.toString
    .call(obj)
    .slice(8, -1)
    .toLowerCase()
}

export function clipboard(value) {
  const input = document.createElement('input')
  document.body.appendChild(input)
  input.setAttribute('value', value)
  input.select()
  if (document.execCommand) {
    document.execCommand('copy')
    document.body.removeChild(input)
    return Promise.resolve(value)
  } else {
    document.body.removeChild(input)
    return Promise.reject('复制失败')
  }
}
