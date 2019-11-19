// export default {
//   name: 'functional-button',
//   functional: true,
//   render(createElement, context) {
//     console.log(context,'--')
//       return createElement('button', {
//         attrs: context.props,
//         on: {
//           click: context.listeners.click
//         }
//       }, context.children)
//   }
// }
// 事件及属性传递，统一集成到了 context.data 中, so，可以不用像上面一样绑定 click 函数了
export default {
  name: 'functional-button',
  functional: true,
  render(createElement, context) {
    console.log(context,'--')
      return createElement('div', context.data, [
        'I am First',
        createElement('h1','--lalalh1'),
        createElement('h2',{
          props: {
            cc: 'test',
            attrs: 'testAttr'
          },
          'class': {
            foo: false
          }
        }, '啦啦啦'),
     ])
  }
}