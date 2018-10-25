<template>
    <div class="ax-select" :style="{'width': width + 'px'}">
        <div class="sl-main" @click.stop>
            <div
                class="sl-input-box"
                @click="handlerClick">
                <ax-input
                    v-model="label"
                    readonly
                    :disabled="disabled"
                    :placeholder="placeholder">
                </ax-input>
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
import input from '@/packages/input/index.vue'
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
    components: {
        'ax-input': input
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
