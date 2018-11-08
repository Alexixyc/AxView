<template>
    <div class="header">
        <div class="l-logo">
          	Ax-View
        </div>
		<div class="t-slogan">
			Welcome to my UI-Components —— Ax-View
		</div>
    </div>
</template>

<style lang="less">
@import '../../../src/assets/css/color.less';
.header{
  height: 79px;
  border-bottom: 1px solid #E0E0E0;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
}
.l-logo {
	line-height: 80px;
	width: 240px;
	background: @st-3;
	font-size: 26px;
	font-weight: bold;
	color: @base-0;
	float: left;
}
.t-slogan {
	line-height: 80px;
	text-align: left;
	float: left;
	margin-left: 40px;
}
</style>