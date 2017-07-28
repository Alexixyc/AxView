<template>
	<div class="main-box">分页组件
		
		<span class="page-block"> < </span>
		<span v-for = "(item,index) in pageIndex" class="page-block">{{item}}</span>
		<span class="page-block"> > </span>

	</div>
</template>
<style scoped src = "./style.css"></style>
<script>
	
module.exports = {
	data: function() {
		return {
			pageIndex:[1,2,3,4,5,6],
			totalNum:'100',
			numPerPage:'11',
			pageAmount:''
		}
	},
	mounted:function(){
		
	}



}

</script>