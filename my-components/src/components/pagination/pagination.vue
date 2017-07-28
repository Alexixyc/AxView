<template>
	<div class="main-box">分页组件
		
		<span class="page-block"> < </span>
		<span v-for = "(item,index) in indexArr" class="page-block">{{item}}</span>
		<span class="page-block"> > </span>

	</div>
</template>
<style scoped src = "./style.css"></style>
<script>
	
module.exports = {
	data: function() {
		return {
			indexArr: [], //
			totalNum: '100', //数据项的总数
			numPerPage: '8', //每页数据项数目
			pageAmount: '' //分页后，总的页码数
		}
	},
	mounted: function() {
		var that = this;
		var y = that.totalNum % that.numPerPage;//总条目数 除以 每页条目数的余数
		var s = Math.floor(that.totalNum / that.numPerPage);//总条目数 除以 每页条目数的商
		that.pageAmount = (y === 0) ? s : (s + 1);
		for (var i = 0; i < that.pageAmount; i++) {
			that.indexArr.push(i + 1);
		}
	}
}

</script>