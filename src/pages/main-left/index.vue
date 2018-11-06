<template>
	<div class="left">
        <router-link :to= "{path:'pagination'}" class="menu-btn">Pagination 分页</router-link>
        <router-link :to= "{path:'input'}" class="menu-btn">Input 输入框</router-link>
        <router-link :to= "{path:'select'}" class="menu-btn">Select 选择器</router-link>
        <router-link :to= "{path:'date-picker'}" class="menu-btn">DatePicker 日期选择</router-link>
    </div>
</template>
<style scoped lang="less">
@import '../../assets/css/color.less';
.left{
    position: absolute;
    top: 80px;
    bottom: 0px;
    left: 0px;
    width: 240px;
    border-right: 1px solid #E0E0E0;
    padding-top: 30px;
}
.menu-btn {
    display: block;
    margin-top: 6px;
    padding-left: 40px;
    text-align: left;
    color: @base-0;

    text-decoration: none;
    font-size: 13px;
    line-height: 28px;
}
.menu-btn:hover {
    color: @st-0;
}
.router-link-active {
    color: @st-0;
}
</style>