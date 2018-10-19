<template>
  <div id="app">
    index
    <main-header></main-header>
    <main-left></main-left>
    <main-content></main-content>
  </div>
</template>

<script>
import mainHeader from '@/pages/main-header/index.vue'
import mainLeft from '@/pages/main-left/index.vue'
import mainContent from '@/pages/main-content/index.vue'
export default {
    components: {
        'main-header': mainHeader,
        'main-left': mainLeft,
        'main-content': mainContent
    }
}
</script>