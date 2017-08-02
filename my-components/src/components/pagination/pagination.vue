<template>
	<div class="pagination-box">
		
		<span class="page-block arrow" @click= "prevPage(selected)"> < </span>
		<span class="page-block" :class="{active:selected === 1}" @click="jumpTo(1)"> 1 </span>
		<span class="page-block arrow" v-if= "prevMore" @click="jumpPrev"> << </span>
		<span v-for = "(item,index) in indexArr" class="page-block" :class="{active:selected === item}" @click= "jumpTo(item)">{{item}}</span>
		<span class="page-block arrow" v-if= "nextMore" @click="jumpNext"> >> </span> <!-- ••• -->
		<span class="page-block" :class="{active:selected === pageAmount}" @click="jumpTo(pageAmount)" v-if="!isOnlyOne"> {{pageAmount}} </span>
		<span class="page-block arrow" @click= "nextPage(selected)"> > </span>
	</div>
</template>

<style scoped src = "./style.css"></style>

<script>
	module.exports = {
		data: function() {
			return {
				indexArr: [], //
				totalNum: '100', //数据项的总数
				numPerPage: 5, //每页数据项数目
				//swichNum: 7, //一共显示多少个页码按钮 暂时写死成7个按钮1,2，3,4,5,6•••last
				pageAmount: 0, //分页后，总的页码数
				selected: 1,
				prevMore: false,
				nextMore: false,
				isOnlyOne: false
			}
		},

		methods: {
			jumpTo: function(pageIndex) {
				var _this = this;
				_this.selected = pageIndex;
				//首先判断页码是否大于7
				if (_this.pageAmount > 7) { // > 7		 
					_this.prevMore = (pageIndex > 4) ? true : false; //是否有prevMore 按钮
					_this.nextMore = (pageIndex < (_this.pageAmount - 3)) ? true : false; //是否有nextMore 按钮
					if (pageIndex <= 4) { //点击1到4页
						_this.indexArr = [2, 3, 4, 5, 6, ];
					} else if (pageIndex > 4 && pageIndex < (_this.pageAmount - 3)) { //点击第5页至倒数第5页
						_this.indexArr = [];
						_this.indexArr.push(pageIndex - 2);
						_this.indexArr.push(pageIndex - 1);
						_this.indexArr.push(pageIndex);
						_this.indexArr.push(pageIndex + 1);
						_this.indexArr.push(pageIndex + 2);
					} else if (pageIndex >= (_this.pageAmount - 3)) { //点击倒数第4页到最后1页
						_this.indexArr = [];
						_this.indexArr.push(_this.pageAmount - 5);
						_this.indexArr.push(_this.pageAmount - 4);
						_this.indexArr.push(_this.pageAmount - 3);
						_this.indexArr.push(_this.pageAmount - 2);
						_this.indexArr.push(_this.pageAmount - 1);
					}
				}

				console.log('每页' + _this.numPerPage + '条数据');
				console.log('这是第' + _this.selected + '页');
			},
			prevPage: function(selected) { //上一页事件
				var _this = this;
				if (selected > 1) {
					_this.jumpTo(selected - 1);
				}
			},
			nextPage: function(selected) { //下一页事件
				var _this = this;
				if (selected < _this.pageAmount) {
					_this.jumpTo(selected + 1);
				}
			},
			jumpNext:function(){
				var _this = this;
				if (_this.selected + 3 <= _this.pageAmount) {
					_this.jumpTo(_this.selected + 3);
				}else _this.jumpTo(_this.pageAmount);		//往后翻3页
			},
			jumpPrev(){
				var _this = this;
				if (_this.selected - 3 >= 1) {
					_this.jumpTo(_this.selected - 3);
				}else _this.jumpTo(1);					//往前翻3页
			}
		},

		mounted: function() {
			var _this = this;
			var y = _this.totalNum % _this.numPerPage; //总条目数 除以 每页条目数的余数
			var s = Math.floor(_this.totalNum / _this.numPerPage); //总条目数 除以 每页条目数的商
			_this.pageAmount = (y === 0) ? s : (s + 1); //总的页码数

			if (_this.pageAmount > 7) { //若总页数大于7页
				for (var i = 2; i < 7; i++) {
					_this.indexArr.push(i); //初始状态push：2到6进去
				}
				_this.nextMore = true;
			} else if (_this.pageAmount <= 7 && _this.pageAmount > 1) {
				for (var i = 2; i < _this.pageAmount; i++) {
					_this.indexArr.push(i); //初始状态push：2到pageAmount进去
				}
			} else {
				_this.isOnlyOne = true; //只有一页
			}

			console.log('每页' + _this.numPerPage + '条数据');
			console.log('这是第' + _this.selected + '页');
		}
	}

</script>