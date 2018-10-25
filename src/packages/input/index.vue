<template>
    <div class="ax-input" :style="{'width': width + 'px'}">
        <div class="in-main">
            <input
                :class="['in-el',
                    {'in-focus': focus && !disabled},
                    {'in-hover': mouseover && !focus && !disabled},
                    {'in-disabled': disabled},
                    {'in-readonly': readonly && !disabled}
                ]"
                type="text"
                v-model="innerValue"
                :disabled="disabled"
                :readonly="readonly || disabled"
                :placeholder="placeholder"
                @mouseover="mouseover = true"
                @mouseout="mouseover = false"
                @focus="focused"
                @blur="blur">
        </div>
    </div>
</template>
<script>
export default {
    name: 'ax-input',
    props: {
        value: { // v-model默认传入的value
            require: true
        },
        width: { // 可选的宽度值
            type: Number,
            default: 240
        },
        placeholder: { // placeholder
            type: [String, Number],
            default: '请输入内容'
        },
        readonly: [Boolean], // 是否只读
        disabled: [Boolean] // 是否禁用
    },
    data() {
        return {
            focus: false,
            mouseover: false,
            innerValue: this.value
        }
    },
    watch: {
        // v-model双向绑定
        value(newVal) {
            this.innerValue = newVal
        },
        innerValue(newVal) {
            this.$emit('input', newVal)
            this.$emit('change', newVal)
        }
    },
    methods: {
        // input获取焦点
        focused(e) {
            if (!this.disabled) {
                this.focus = true
                this.$emit('focus', e)
            }
        },
        // input丢失焦点
        blur(e) {
            if (!this.disabled) {
                this.focus = false
                this.$emit('blur', e)
            }
        }
    }
}
</script>
<style lang="less" src="./style.less" scoped></style>
