<template>
  <div class="alexi-main">
    <div class="top"></div>
    <div class="left">
      <router-link :to= "{path:'pagination'}">分页组件</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    
    
    
  </div>
</template>

<script>
export default {
  name: 'helloIndex',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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

.top{
  height: 79px;
  border-bottom: 1px solid #E0E0E0;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;

}

.left{
    position: absolute;
    top: 80px;
    bottom: 0px;
    left: 0px;
    right: 75%; 
    border-right: 1px solid #E0E0E0;
    padding-top: 40px;
}
.content{
    position: absolute;
    left: 25%;
    right: 0px;
    top: 80px;
    bottom: 0px;
    padding-top: 40px;
}


</style>
