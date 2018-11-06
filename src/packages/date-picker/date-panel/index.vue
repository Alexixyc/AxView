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
                        'not-c-month': cell.month != panelObj.currentMonth.month,
                        'selected': selectedDate && cell.date.getTime() == selectedDate.getTime()
                    }]"
                    v-for="(cell, Cindex) in row"
                    :key="Cindex"
                    @click="$emit('selectDate', cell, cell.month != panelObj.currentMonth.month)">
                    <span>
                        {{cell.day}}
                    </span>
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
        },
        selectedDate: {
            require: true,
            type: [String, Date]
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
    }
}
</script>


<style lang="less" scoped src="./style.less"></style>
