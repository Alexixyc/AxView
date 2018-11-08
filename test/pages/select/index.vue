<template>
    <div>
        <ax-select
            class="ax-select"
            v-model="selectedVal"
            @change="change"
            :disabled="false"
            placeholder="自定义placeholder~">
            <ax-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled">
            </ax-option>
        </ax-select>
    </div>
</template>
<script>
import select from '@/packages/select/index.vue'
import option from '@/packages/option/index.vue'
export default {
    components: {
        'ax-select': select,
        'ax-option': option
    },
    data() {
        return {
            options: [{
                value: '1',
                label: '选项1'
            }, {
                value: '2',
                label: '选项2',
                disabled: true
            }, {
                value: '3',
                label: '选项3'
            }, {
                value: '4',
                label: '选项4很长很长很长'
            }, {
                value: 'five',
                label: '选项5'
            }],
            selectedVal: '3'
        }
    },
    methods: {
        change(obj) {
            console.log('change：', obj)
        }
    }
}
</script>
<style lang="less" scoped>
.ax-select {
    margin-left: 30%;
}
</style>


