<template>
    <li
        :class="['opt-ul-li',
            {'disabled': disabled},
            {'selected': currentSelected == value && !disabled},
            {'hover': mouseover && !disabled}]"
        @click.stop="select"
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
    methods: {
        // 初始化，检查最外层v-model的初始值，是否等于当前option的value
        init() {
            if (this.currentSelected == this.value) {
                this.$parent.label = this.label
            }
        },
        // li标签点击事件
        select() {
            if (!this.disabled) {
                // 将当前li组件的props传入 父级selection实例的change方法
                this.$parent.change(this.$props)
            }
        }
    },
    mounted() {
        this.init()
    }
}
</script>

<style lang="less" scoped src="./style.less"></style>
