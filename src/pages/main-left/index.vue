<template>
	<div class="left">
      <router-link :to= "{path:'pagination'}" class="menu-btn">分页组件</router-link>
      <router-link :to= "{path:'select'}" class="menu-btn">选择</router-link>
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
    padding-top: 30px;
}
.menu-btn {
    display: block;
    margin-top: 6px; 
    color: #42b983;
    text-decoration: none;
    font-size: 12px;
    line-height: 28px;
}
.menu-btn:hover {
    background: rgba(66, 185, 131, 0.2);
    color: #333333;
}
</style>