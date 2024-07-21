/// <reference types="vite/client" />


// Vue Component Type
declare module "*.vue" {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}