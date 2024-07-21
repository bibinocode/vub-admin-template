import { defineConfig, presetAttributify, presetIcons, presetWind } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(), // 使用taiwindcss预设
    presetAttributify(),
    presetIcons({
      prefix: 'icon',
      extraProperties: {
        display: 'inline-block', // 默认让其变成行内快
      }
    })
  ]
})