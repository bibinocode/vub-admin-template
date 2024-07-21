# b-admin-template

- [x] 约定式文件路由

  - [x] 采用方案：unplugin-vue-router

- [x] 引入 unocss 混合taiwindcss 使用
- [x] 引入autoimport自动引入核心库
- [x] 引入@vueuse
- [x] 自动注册组件 unplugin-vue-components
- [x] icon自动引入 unplugin-icons
- [x] 自定义svg图标引入
- [x] 全局布局：vite-plugin-vue-layouts在需要使用布局组件的地方使用

  ```Vue
  <route lang="yaml">
  meta:
    layout: users
  </route>
  ```
