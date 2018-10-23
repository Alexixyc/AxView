<template>
    <div>
        <ax-selection
            class="ax-selection"
            v-model="selectedVal"
            @change="change"
            :disabled="false"
            :placeholder="'自定义placeholder~'">
            <ax-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled">
            </ax-option>
        </ax-selection>
    </div>
</template>
<script>
import selection from '@/packages/selection/index.vue'
import option from '@/packages/option/index.vue'
export default {
    components: {
        'ax-selection': selection,
        'ax-option': option
    },
    data() {
        return {
            options: [{
                value: 'one',
                label: '选项1'
            }, {
                value: 'two',
                label: '选项2',
                disabled: true
            }, {
                value: 'three',
                label: '选项3'
            }, {
                value: 'four',
                label: '选项4很长很长很长很长很长很长特别长长到换行'
            }, {
                value: 'five',
                label: '选项5'
            }],
            selectedVal: ''
        }
    },
    methods: {
        change(obj) {
            console.log('change方法接受到的被选择option对象：', obj.value)
            console.log('当前实例selectedVal值的变化', this.selectedVal)
        }
    }
}
</script>
<style lang="less" scoped>
.ax-selection {
    margin-left: 30%;
}
</style>


