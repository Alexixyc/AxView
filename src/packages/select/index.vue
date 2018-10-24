<template>
    <div class="ax-select" :style="{'width': width + 'px'}">
        <div class="sl-main" @click.stop>
            <div
                class="sl-input-box"
                @click="handlerClick"
                :class="{'disabled': disabled}">
                <input
                    class="input-el"
                    type="text"
                    readonly="readonly"
                    :placeholder="placeholder"
                    :value="label">
            </div>
            <transition name="slide">
                <div class="sl-options" v-show="optionsVisible && !disabled">
                    <ul class="opt-ul">
                        <slot></slot>
                    </ul>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ax-select',
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
            default: '请选择'
        },
        disabled: [Boolean] // 是否禁用
    },
    data() {
        return {
            optionsVisible: false, // 控制Options显示
            label: '' // 输入框上显示的值
        }
    },
    methods: {
        // input框点击事件
        handlerClick() {
            if (!this.disabled) {
                this.optionsVisible = !this.optionsVisible
            }
        },
        // 选择Option时，调用的函数
        change(obj) {
            this.optionsVisible = false // 隐藏Options
            this.label = obj.label // 修改输入框上显示的值           
            this.$emit('input', obj.value) // 修改外部v-model绑定的值(真正的value)
            this.$emit('change', obj) // 执行外部change方法
        }
    },
    mounted() {
        // body点击关闭下拉Options
        document.getElementsByTagName('body')[0].onclick = (e) => {
            this.optionsVisible = false
        }
    }
}
</script>
<style lang="less" scoped src="./style.less"></style>
