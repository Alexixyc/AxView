<template>
  <div class="alexi-main">
    <index-header></index-header>
    <index-left></index-left>
    <index-right></index-right>
  </div>
</template>

<script>
export default {
  name: 'helloIndex',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    'index-header':require('./index-header'),
    'index-left':require('./index-left'),
    'index-right':require('./index-right'),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
