<template>
    <div class="ax-pg">
        <span class="page-text">共 {{total}} 条</span>
        <!-- 上一页按钮< -->
        <span
            class="page-block arrow"
            @click="prevPage(currentPage)"
            :class="{'disabled': currentPage === 1 || pageAmount == 0}">
            &lt;
        </span>
        <!-- 第一页按钮 -->
        <span class="page-block num"
            :class="{'active':currentPage === 1}"
            @click="jumpTo(1)">
            1
        </span>
        <!-- 往前更多《《 -->
        <span
            class="page-block arrow prev-more"
            v-if="prevMore"
            @click="jumpPrev">
        </span>
        <!-- 中间的页码按钮 -->
        <span
            v-for="(item,index) in indexArr"
            :key="index"
            class="page-block num"
            :class="{'active':currentPage === item}"
            @click="jumpTo(item)">
            {{item}}
        </span>
        <!-- 往后更多》》 -->
        <span
            class="page-block arrow next-more"
            v-if="nextMore"
            @click="jumpNext">
            <!-- &gt;&gt; -->
        </span> <!-- ••• -->
        <!-- 最后一页按钮 -->
        <span
            v-if="!isOnlyOne"
            class="page-block num"
            :class="{'active':currentPage === pageAmount}"
            @click="jumpTo(pageAmount)">
            {{pageAmount}}
        </span>
        <!-- 下一页按钮> -->
        <span
            class="page-block arrow"
            @click="nextPage(currentPage)"
            :class="{'disabled':currentPage === pageAmount || pageAmount == 0}">
            &gt;
        </span>
    </div>
</template>

<style scoped src = "./style.less" lang="less"></style>

<script>
export default {
    name: 'ax-pagination',
    // [总条目数, 当前页码, 每页数据条目数]
    props: ['total', 'currentPage', 'pageSize'],
    data() {
        return {
            indexArr: [], // 存放页码的数组
            pageAmount: 0, // 分页后，总的页码数
            prevMore: false, // 是否显示 <<
            nextMore: false, // 是否显示 >>
            isOnlyOne: false // 是否只有一页
        }
    },
    watch: {
        total(val) {
            this.init()
        }
    },
    methods: {
        init() {
            this.indexArr = []
            let y = this.total % this.pageSize // 总条目数 除以 每页条目数的余数
            let s = Math.floor(this.total / this.pageSize) // 总条目数 除以 每页条目数的商
            this.pageAmount = (y === 0) ? s : (s + 1) // 总的页码数
            if (this.pageAmount > 7) { // 若总页数大于7页
                for (let i = 2; i < 7; i++) {
                    this.indexArr.push(i) // 初始状态push：2到6进去
                }
                this.nextMore = true
                this.isOnlyOne = false
            } else if (this.pageAmount <= 7 && this.pageAmount > 1) {
                for (let i = 2; i < this.pageAmount; i++) {
                    this.indexArr.push(i) // 初始状态push：2到pageAmount进去
                }
                this.isOnlyOne = false
            } else {
                this.isOnlyOne = true // 只有一页
            }
            this.jumpTo(this.currentPage)
        },
        jumpTo(val) {
            this.$emit('changePage', val)
            //  首先判断页码是否大于7
            if (this.pageAmount > 7) { //  > 7
                this.prevMore = val > 4 // 是否有prevMore 按钮
                this.nextMore = val < (this.pageAmount - 3)// 是否有nextMore 按钮
                if (val <= 4) { // 点击1到4页
                    this.indexArr = [2, 3, 4, 5, 6]
                } else if (val > 4 && val < (this.pageAmount - 3)) { // 点击第5页至倒数第5页
                    this.indexArr = []
                    this.indexArr.push(val - 2)
                    this.indexArr.push(val - 1)
                    this.indexArr.push(val)
                    this.indexArr.push(val + 1)
                    this.indexArr.push(val + 2)
                } else if (val >= (this.pageAmount - 3)) { // 点击倒数第4页到最后1页
                    this.indexArr = []
                    this.indexArr.push(this.pageAmount - 5)
                    this.indexArr.push(this.pageAmount - 4)
                    this.indexArr.push(this.pageAmount - 3)
                    this.indexArr.push(this.pageAmount - 2)
                    this.indexArr.push(this.pageAmount - 1)
                }
            }
        },
        // 上一页事件
        prevPage(val) {
            if (val > 1) {
                this.jumpTo(val - 1)
            }
        },
        // 下一页事件
        nextPage(val) {
            if (val < this.pageAmount) {
                this.jumpTo(val + 1)
            }
        },
        // 点击 >>
        jumpNext() {
            if (this.currentPage + 3 <= this.pageAmount) {
                this.jumpTo(this.currentPage + 3)
            } else this.jumpTo(this.pageAmount) // 往后翻3页
        },
        // 点击 <<
        jumpPrev() {
            if (this.currentPage - 3 >= 1) {
                this.jumpTo(this.currentPage - 3)
            } else this.jumpTo(1) // 往前翻3页
        }
    },
    mounted() {
        this.init()
    }
}
</script>
