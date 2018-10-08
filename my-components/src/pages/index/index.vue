<template>
  <div class="alexi-main">
    <div>{{msg}}</div>
    <indexHeader></indexHeader>
    <indexLeft></indexLeft>
    <indexRight></indexRight>
  </div>
</template>

<script>
import indexHeader from '@/components/indexHeader'
import indexLeft from '@/components/indexLeft'
import indexRight from '@/components/indexRight'
export default {
  data () {
    return {
      msg: 'Welcome to My Vue.js App'
    }
  },
  components:{
    indexHeader: indexHeader,
    indexLeft: indexLeft,
    indexRight: indexRight,
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.alexi-main{
  position: absolute;
   left: 15%;
   right: 15%;
   top: 0px;
   bottom: 0px;
}

</style>
