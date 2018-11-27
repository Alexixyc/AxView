<template>
    <div>
        <div class="text">所选日期：{{date}}</div>
        <ax-date-picker
            class="ax-date-picker"
            v-model="date"
            :disabled="false"
            :placeholder="'请选择会议日期'"
            @change="change">
        </ax-date-picker>
        <div class="text">所选日期：{{dateRange}}</div>
        <ax-date-picker
            class="ax-date-picker"
            v-model="dateRange"
            type="daterange"
            :disabled="false"
            :startPlaceholder="'会议开始'"
            :endPlaceholder="'会议结束'"
            @change="change">
        </ax-date-picker>
    </div>
</template>
<script>
import datePicker from '@/packages/date-picker/index.vue'
export default {
    components: {
        'ax-date-picker': datePicker
    },
    data() {
        return {
            date: '2018-12-09',
            dateRange: ['2018-12-09', '2018-12-01']
        }
    },
    methods: {
        change(val) {
            console.log('change监听', val)
        }
    }
}
</script>
<style lang="less" scoped>
.ax-date-picker {
    margin: 0 auto;
}
.text {
    font-size: 13px;
    margin-bottom: 20px;
}
</style>


