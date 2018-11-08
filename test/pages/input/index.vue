<template>
    <div>
        <ax-input
            class="ax-input"
            v-model="inputVal"
            placeholder="请输入您的姓名"
            @focus="focus"
            @blur="blur"
            @change="change"
            :width="240"
            :disabled="false"
            :readonly="false">
        </ax-input>
        <div class="text">
            姓名：{{inputVal}}
        </div>
    </div>
</template>
<script>
import input from '@/packages/input/index.vue'
export default {
    components: {
        'ax-input': input
    },
    data() {
        return {
            inputVal: 'AlexiXiang'
        }
    },
    methods: {
        focus(e) {
            console.log('focus')
        },
        blur(e) {
            console.log('blur')
        },
        change(val) {
            console.log('change', val)
        }
    }
}
</script>
<style lang="less" scoped>
.ax-input {
    margin-left: 30%;
}
.text {
    margin-left: 30%;
    text-align: left;
    font-size: 14px;
    margin-top: 20px;
}
</style>
