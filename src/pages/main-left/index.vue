<template>
	<div class="left">
      <router-link :to= "{path:'pagination'}">分页组件</router-link>
    </div>
</template>

<style scoped>
.left{
    position: absolute;
    top: 80px;
    bottom: 0px;
    left: 0px;
    right: 75%; 
    border-right: 1px solid #E0E0E0;
    padding-top: 40px;
}
a {
  color: #42b983;
}
</style>