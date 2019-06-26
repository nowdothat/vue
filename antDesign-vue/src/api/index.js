/* eslint-disable */ 
const apiContext = require.context('./', false, /\.js$/)
let apis = {}

apiContext.keys().forEach(api => {
  if (api.startsWith('./index')) return
  const module = apiContext(api)
  apis = { ...apis, ...(module.default || module) }
})

export default apis
