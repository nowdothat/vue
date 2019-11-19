export default {
  name: 'function-com',
  functional: true,
  render (createElement, context) {
    return createElement(context.children, context.data)
  }
}