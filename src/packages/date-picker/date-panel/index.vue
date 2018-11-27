<template>
    <div class="ax-dp-panel">
        <table class="ax-dp-panel-table">
            <th class="ax-dp-panel-th">
                <td
                    class="ax-dp-panel-td"
                    v-for="(weekday, index) in weekdays"
                    :key="index">
                    {{weekday}}
                </td>
            </th>
            <tr
                class="ax-dp-panel-tr"
                v-for="(row, Rindex) in panelDays"
                :key="Rindex">
                <td
                    :class="['ax-dp-panel-td', {
                        'td-today': cell.isToday && cell.month == panelObj.currentMonth.month,
                        'c-month': cell.month == panelObj.currentMonth.month,
                        'not-c-month': cell.month != panelObj.currentMonth.month
                    }, cell.activeClass]"
                    v-for="(cell, Cindex) in row"
                    :key="Cindex"
                    @mouseenter="$emit('mouseenter',cell)"
                    @mouseout="$emit('mouseout',cell)"
                    @click="$emit('selectDate', cell, cell.month != panelObj.currentMonth.month)">
                    <div>
                        <span>
                            {{cell.day}}
                        </span>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
import  Panel from '../date-picker.js'
export default {
    props: {
        panelObj: {
            require: true,
            type: [Object]
        }
    },
    data() {
        return {
            weekdays: ['日', '一', '二', '三', '四', '五', '六']
        }
    },
    computed: {
        // 当前面板的天数集合
        panelDays() {
            return this.panelObj.cells
        }
    },
    methods: {
        // data-range 时用到：计算cell是否在range-picker的区间里
        // otime,第一次点击的时间戳;ctime,hover到的位置的时间戳
        computeCellStyle(otime, ctime) {
            this.panelDays.forEach(row => {
                row.forEach(cell => {
                    let stamp = Date.parse(cell.date)
                    let max = Math.max(otime, ctime)
                    let min = Math.min(otime, ctime)
                    if (cell.month == this.panelObj.currentMonth.month) {
                        if (stamp == min && stamp == max) {
                            cell.activeClass = 'selected-border'
                        } else if (stamp == min) {
                            cell.activeClass = 'range-start'
                        } else if(stamp == max) {
                            cell.activeClass = 'range-end'
                        } else if (stamp > min && stamp < max) {
                            cell.activeClass = 'range-gap'
                        }else {
                            cell.activeClass = ''
                        }
                    }
                })
            })
        },
        // 清空当前panel所有cell的样式
        clearStyles() {
            this.panelDays.forEach(row => {
                row.forEach(cell => {
                        cell.activeClass = ''
                })
            })
        }
    }
}
</script>


<style lang="less" scoped src="./style.less"></style>
