
<template>
    <div style="display:inline-block;">
        <dateSingle
            v-if="type === 'date'"
            v-model="innerValue"
            :disabled="disabled"
            :placeholder="placeholder"
            @change="$emit('change', innerValue)">
        </dateSingle>
        <dateRange
            v-if="type === 'daterange'"
            v-model="innerValue"
            :disabled="disabled"
            :startPlaceholder="startPlaceholder"
            :endPlaceholder="endPlaceholder"
            @change="$emit('change', innerValue)">
        </dateRange>
    </div>
</template>
<script>
import dateSingle from './date-single/index.vue'
import dateRange from './date-range/index.vue'
export default {
    name: 'ax-date-picker',
    props: {
        value: {
            require: true
        },
        type: {
            type: String,
            default: 'date' //daterange
        },
        disabled: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: '请选择日期'
        },
        startPlaceholder: {
            type: String,
            default: '开始日期'
        },
        endPlaceholder: {
            type: String,
            default: '结束日期'
        }
    },
    data() {
        return {
            innerValue: this.value
        }
    },
    watch: {
        innerValue(val) {
            this.$emit('input', val)
        }
    },
    components: {
        dateSingle,
        dateRange
    }
}
</script>