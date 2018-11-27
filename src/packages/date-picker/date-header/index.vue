<template>
    <div class="ax-dp-header">
        <span class="ax-dp-header-l" v-if="leftBtn">
            <!-- 上一年 -->
            <span
                class="left-btn btn"
                @click="$emit('jumpToPrevYear')">
                &lt;&lt;
            </span>
            <!-- 上一月 -->
            <span
                class="left-btn btn"
                @click="$emit('jumpToPrevMonth')">
                &lt;
            </span>
        </span>
        <span class="ax-dp-header-m">{{panelYear}}年 {{panelMonth}}月</span>
        <span class="ax-dp-header-r"  v-if="rightBtn">
            <!-- 下个月 -->
            <span
                class="right-btn btn"
                @click="$emit('jumpToNextMonth')">
                &gt;
            </span>
            <!-- 下一年 -->
            <span
                class="right-btn btn"
                @click="$emit('jumpToNextYear')">
                &gt;&gt;
            </span>
        </span>
    </div>
</template>
<script>
export default {
    props: {
        panelYear: [String, Number],
        panelMonth: [String, Number],
        leftBtn: {
            type: [Boolean],
            default: false
        },
        rightBtn: {
            type: [Boolean],
            default: false
        }
    }
}
</script>

<style lang="less" scoped src="./style.less"></style>
