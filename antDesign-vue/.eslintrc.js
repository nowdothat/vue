module.exports = {
  "extends": "standard",
  "plugins": [
    "html",
    "vue",
    "standard",
    "promise"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": { // 自定义规则，行尾增加分号；
    "semi": ["error", "always"]
    }
}
