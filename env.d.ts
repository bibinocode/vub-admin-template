/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />
/// <reference types="vite-plugin-vue-layouts/client"  />


// Vue Component Type
declare module "*.vue" {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}