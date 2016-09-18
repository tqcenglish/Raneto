// --no-ignore
// http://eslint.org/docs/user-guide/configuring#specifying-environments
module.exports = {
  "extends": "standard",
  "plugins": [
    "standard"
  ],
  "env": {
    "mocha": true,
    "node": true,
    "es6": true
  },
  "rules": {
    "indent": [2, 2, { "SwitchCase": 1 }], // 设置空格为 2， switch 顶格为 1
    "no-extra-semi": 0,         // disallow unnecessary semicolons
    "semi": [2, "always"],        //行末必须分号结尾,否则错误
    "camelcase": 0,           //由于配置文件中未全部驼峰命名, 所以采用不能强制全部驼峰法命名
    "no-trailing-spaces": 0,        // disallow trailing whitespace at the end of lines
    "no-multi-spaces": 0, // 等号左右可以有多个等号，用于代码对齐
    "padded-blocks": 0, // 函数第一行可以为空格
   　"no-spaced-func": 0, // 函数名与括号之间不添加空格
     "key-spacing": 0,
    "space-before-function-paren": [0, "always"]//函数定义时括号前面要不要有空格
  }
};
