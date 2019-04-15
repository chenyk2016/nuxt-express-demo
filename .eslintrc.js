module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "vue": 'off',
    "vue/attributes-order": 'off',
    "vue/html-indent": 'off',
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "any",
        "normal": "any",
        "component": "any"
      },
      "svg": "always",
      "math": "always"
    }],
    "vue/singleline-html-element-content-newline": 'off',
    //箭头函数用小括号括起来
    'arrow-parens': 0,
    //生成器函数*的前后空格
    'generator-star-spacing': 0,
    //如果为2表示禁止使用debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    //语句强制分号结尾
    // 'semi': ['error', 'always'],
    //缩进风格
    // 'indent': 0,
    //函数定义时括号前面要不要有空格
    'space-before-function-paren': 0,
    //注释风格要不要有空格什么的
    // 'spaced-comment': 0,
    // 函数定义时括号前面要不要有空格
    // 'space-before-blocks' : [0, 'always'],
    // 建议使用 const
    'prefer-const': 0,
    // 最后换行
    'eol-last': 2
  }
}
