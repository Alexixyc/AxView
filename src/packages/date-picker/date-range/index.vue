<template>
    <div class="ax-dp-main">
        <div
            class="date-input"
            @click.stop>
            <ax-input
                class="ax-input"
                readonly
                :width="width"
                v-model="inputStart"
                :disabled="disabled"
                :placeholder="startPlaceholder"
                @click.native="handlerClick">
            </ax-input>
            <span class="range-mid">至</span>
            <ax-input
                class="ax-input"
                readonly
                :width="width"
                v-model="inputEnd"
                :disabled="disabled"
                :placeholder="endPlaceholder"
                @click.native="handlerClick">
            </ax-input>
        </div>
        <transition name="fade">
            <div
                class="date-choose"
                v-show="panelVisible"
                 @click.stop>
                <div class="left">
                    <DatePickHeader
                        class="dp-header"
                        :panelYear="panelYearLeft"
                        :panelMonth="panelMonthLeft"
                        leftBtn
                        @jumpToPanel="jumpToPanel"
                        @jumpToPrevYear="jumpToPrevYear"
                        @jumpToPrevMonth="jumpToPrevMonth">
                    </DatePickHeader>
                    <DatePickPanel
                        ref="dp1"
                        class="dp-panel"
                        :panelObj="panelLeft"
                        @selectDate="selectDate"
                        @mouseenter="mouseenterCell">
                    </DatePickPanel>
                </div>
                <div class="right">
                    <DatePickHeader
                        class="dp-header"
                        :panelYear="panelYearRight"
                        :panelMonth="panelMonthRight"
                        rightBtn
                        @jumpToPanel="jumpToPanel"
                        @jumpToNextYear="jumpToNextYear"
                        @jumpToNextMonth="jumpToNextMonth">
                    </DatePickHeader>
                    <DatePickPanel
                        ref="dp2"
                        class="dp-panel"
                        :panelObj="panelRight"
                        @selectDate="selectDate"
                        @mouseenter="mouseenterCell">
                    </DatePickPanel>
                </div>
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
            type: Array,
            require: true
        },
        width: { // 可选的宽度值
            type: Number,
            default: 160
        },
        startPlaceholder: {
            type: String,
            default: '开始日期'
        },
        endPlaceholder: {
            type: String,
            default: '结束日期'
        },
        disabled: { // 是否禁用
            type: Boolean,
            default: false
        }
    },
    components: {
        'ax-input': AxInput,
        DatePickPanel,
        DatePickHeader
    },
    data() {
        return {
            panelLeft: {}, // 日期面板对象
            panelRight: {}, // 日期面板对象
            panelVisible: false, // 是否显示面板
            inputStart: '',
            inputEnd: '',
            tempStart: '', // 选择中临时存储的start //因为先选的可能是start也可能是end，
            tempEnd: '', // 选择中临时存储的end //需要选择结束后比较一下，再分别赋值给inputStart、inputEnd
            chooseStatus: 'none' // 选择状态，初始为[none]，第一次点击变为'ing'，第二次点击变为'none'
        }
    },
    watch: {
        // 双向数据绑定
        value(newVal) {
            this.renderPanel()
            this.$emit('change', newVal)
        },
        panelVisible(newVal) {
            if (!newVal) {
                this.chooseStatus = 'none'
                this.tempStart = ''
                this.tempEnd = ''
            }
        }
    },
    computed: {
        // 左边面板年份
        panelYearLeft() {
            return this.panelLeft.currentMonth ? this.panelLeft.currentMonth.year : 0
        },
        // 左边面板月份
        panelMonthLeft() {
            return this.panelLeft.currentMonth ? this.panelLeft.currentMonth.month : 0
        },
        // 右边面板年份
        panelYearRight() {
            return this.panelRight.currentMonth ? this.panelRight.currentMonth.year : 0
        },
        // 右边面板月份
        panelMonthRight() {
            return this.panelRight.currentMonth ? this.panelRight.currentMonth.month : 0
        }
    },
    methods: {
        // 初始化渲染 panel
        renderPanel() {
            if (this.value.length === 2) {
                let sd = new Date(this.value[0])
                let ed = new Date(this.value[1])
                this.inputStart = formatDate(Math.min(Date.parse(sd), Date.parse(ed)), 'YYYY-MM-DD')
                this.inputEnd = formatDate(Math.max(Date.parse(sd), Date.parse(ed)), 'YYYY-MM-DD')
                this.jumpToPanel(sd.getFullYear(), sd.getMonth() + 1)
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
            if (disabled) return
            // DONE: 待完善 第一次点击和第二次点击 根据chooseStatus修改状态
            switch (this.chooseStatus) {
            case 'none':
                this.chooseStatus = 'ing'
                this.tempStart = Date.parse(cell.date)
                this.$refs.dp1.clearStyles()
                this.$refs.dp2.clearStyles()
                cell.activeClass = 'selected-border'
                break
            case 'ing':
                this.tempEnd = Date.parse(cell.date)
                this.$emit('input', [formatDate(Math.min(this.tempStart, this.tempEnd), 'YYYY-MM-DD'), formatDate(Math.max(this.tempStart, this.tempEnd), 'YYYY-MM-DD')])
                this.panelVisible = false // 选择成功，关闭弹窗
                break
            }
        },
        // 每个cell的mouseenter事件
        mouseenterCell(cell) {
            if (this.chooseStatus === 'ing') {
                // DONE:当前cell设为node计算一下gap
                this.$refs.dp1.computeCellStyle(this.tempStart, Date.parse(cell.date))
                this.$refs.dp2.computeCellStyle(this.tempStart, Date.parse(cell.date))
            }
        },
        // 跳转至某年某月
        jumpToPanel(year, month) {
            this.panelLeft = new Panel(year, month)
            this.panelRight = new Panel(year, month).nextPanelMonth()
        },
        // 跳转至上一年
        jumpToPrevYear() {
            this.panelLeft = this.panelLeft.prevPanelYear()
            this.panelRight = this.panelRight.prevPanelYear()
        },
        // 跳转至下一年
        jumpToNextYear() {
            this.panelLeft = this.panelLeft.nextPanelYear()
            this.panelRight = this.panelRight.nextPanelYear()
        },
        // 跳转至上一个月
        jumpToPrevMonth() {
            this.panelLeft = this.panelLeft.prevPanelMonth()
            this.panelRight = this.panelRight.prevPanelMonth()
        },
        // 跳转至下一个月
        jumpToNextMonth() {
            this.panelLeft = this.panelLeft.nextPanelMonth()
            this.panelRight = this.panelRight.nextPanelMonth()
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
        this.$refs.dp1.computeCellStyle(Date.parse(this.inputStart), Date.parse(this.inputEnd))
        this.$refs.dp2.computeCellStyle(Date.parse(this.inputStart), Date.parse(this.inputEnd))
    }
}
</script>
<style lang="less" scoped src="./style.less"></style>
