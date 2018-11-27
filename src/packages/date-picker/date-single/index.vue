<template>
    <div class="ax-dp-main">
        <div
            class="date-input"
            @click.stop>
            <ax-input
                readonly
                :width="width"
                v-model="inputValue"
                :disabled="disabled"
                :placeholder="placeholder"
                @click.native="handlerClick">
            </ax-input>
        </div>
        <transition name="fade">
            <div
                class="date-choose"
                v-show="panelVisible"
                 @click.stop>
                <DatePickHeader
                    class="dp-header"
                    :panelYear="panelYear"
                    :panelMonth="panelMonth"
                    leftBtn
                    rightBtn
                    @jumpToPanel="jumpToPanel"
                    @jumpToPrevYear="jumpToPrevYear"
                    @jumpToNextYear="jumpToNextYear"
                    @jumpToPrevMonth="jumpToPrevMonth"
                    @jumpToNextMonth="jumpToNextMonth">
                </DatePickHeader>
                <DatePickPanel
                    ref="dp"
                    class="dp-panel"
                    :panelObj="panelObj"
                    @selectDate="selectDate">
                </DatePickPanel>
            </div>
        </transition>
    </div>
</template>
<script>
import { Panel } from '../date-picker.js'
import { formatDate } from '@/assets/utils/dateFormat.js'
import DatePickPanel from '../date-panel/index.vue'
import DatePickHeader from '../date-header/index.vue'
import AxInput from '../../input/index.vue'
export default {
    props: {
        value: { // v-model绑定的日期值
            type: [String, Date],
            require: true
        },
        width: { // 可选的宽度值
            type: Number,
            default: 220
        },
        placeholder: [String],
        disabled: [Boolean] // 是否禁用
    },
    components: {
        'ax-input': AxInput,
        DatePickPanel,
        DatePickHeader
    },
    data() {
        return {
            panelObj: {}, // 日期面板对象
            panelVisible: false, // 是否显示面板
            inputValue: ''
        }
    },
    watch: {
        // 双向数据绑定
        value(newVal) {
            this.renderPanel()
            this.$emit('change', newVal)
        }
    },
    computed: {
        // 当前面板年份
        panelYear() {
            return this.panelObj.currentMonth ? this.panelObj.currentMonth.year : 0
        },
        // 当前面板月份
        panelMonth() {
            return this.panelObj.currentMonth ? this.panelObj.currentMonth.month : 0
        }
    },
    methods: {
        renderPanel() {
            if (this.value) {
                let t = new Date(this.value)
                this.inputValue = formatDate(t, 'YYYY-MM-DD')
                this.jumpToPanel(t.getFullYear(), t.getMonth() + 1)
            }
        },
        // input框点击事件
        handlerClick() {
            if (!this.disabled) {
                this.panelVisible = !this.panelVisible
            }
        },
        // 选择某一个，点击事件
        selectDate(cell, disabled) {
            if (!disabled) { // 可点击
                this.$emit('input', formatDate(cell.date, 'YYYY-MM-DD'))
                this.panelVisible = false
            }
        },
        // 跳转至某年某月
        jumpToPanel(year, month) {
            this.panelObj = new Panel(year, month)
        },
        // 跳转至上一年
        jumpToPrevYear() {
            this.panelObj = this.panelObj.prevPanelYear()
        },
        // 跳转至下一年
        jumpToNextYear() {
            this.panelObj = this.panelObj.nextPanelYear()
        },
        // 跳转至上一个月
        jumpToPrevMonth() {
            this.panelObj = this.panelObj.prevPanelMonth()
        },
        // 跳转至下一个月
        jumpToNextMonth() {
            this.panelObj = this.panelObj.nextPanelMonth()
        }
    },
    mounted() {
        // body点击关闭下拉Options
        document.getElementsByTagName('body')[0].addEventListener('click', e => {
            this.panelVisible = false
        })
        this.renderPanel()
    },
    updated() {
        this.$refs.dp.computeCellStyle(Date.parse(this.inputValue), Date.parse(this.inputValue))
    }
}
</script>
<style lang="less" scoped src="./style.less"></style>
