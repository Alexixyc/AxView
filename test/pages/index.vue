<template>
    <div class="main">
        <main-header></main-header>
        <main-left></main-left>
        <main-content></main-content>
    </div>
</template>

<script>
import mainHeader from './main-header/index.vue'
import mainLeft from './main-left/index.vue'
import mainContent from './main-content/index.vue'
export default {
    components: {
        'main-header': mainHeader,
        'main-left': mainLeft,
        'main-content': mainContent
    }
}
</script>