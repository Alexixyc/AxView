<template>
    <li
        :class="['opt-ul-li',
            {'disabled': disabled},
            {'selected': currentSelected == value && !disabled},
            {'hover': mouseover && !disabled}]"
        @click.stop="handlerClick"
        @mouseenter="mouseover = true"
        @mouseout="mouseover = false">
        {{label}}
    </li>
</template>
<script>
export default {
    name: 'ax-option',
    props: {
        label: {
            type: [String, Number],
            default: '选项'
        },
        value: {
            type: [Number, String, Object],
            default: ''
        },
        disabled: {
            type: [Boolean],
            default: false
        }
    },
    data() {
        return {
            mouseover: false
        }
    },
    computed: {
        currentSelected() {
            return this.$parent.value
        }
    },
    watch: {
        // 双向数据绑定
        currentSelected(newVal) {
            if (newVal == this.value) {
                this.$parent.optionsVisible = false // 隐藏Options
                this.$parent.label = this.label // 修改输入框上显示的值           
                this.$parent.$emit('change', this.$props) // 执行外部change方法
            }
        }
    },
    methods: {
        // 初始化，检查最外层v-model的初始值，是否等于当前option的value
        init() {
            if (this.currentSelected == this.value) {
                this.$parent.label = this.label
            }
        },
        // li标签点击事件
        handlerClick() {
            if (!this.disabled) {
                // 将当前li组件的props传入 父级select实例的change方法
                this.$parent.$emit('input', this.value) // 修改外部v-model绑定的值(真正的value)
            }
        }
    },
    mounted() {
        this.init()
    }
}
</script>

<style lang="less" scoped src="./style.less"></style>
