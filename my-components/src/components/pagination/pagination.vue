<template>
    <div class="pagination-box">
        <!-- <div class="select-box">
            <span>每页显示</span>
            <select
                @change="changePageSize"
                v-model="pageSize">
                <option
                    v-for="(item,index) in pageSizeOptions"
                    :key="index">
                    {{item}}
                </option>
            </select>
            <span>条数据</span>
        </div> -->
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
            class="page-block arrow"
            v-if="prevMore"
            @click="jumpPrev">
            &lt;&lt;
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
            class="page-block arrow"
            v-if="nextMore"
            @click="jumpNext">
            &gt;&gt;
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

<style scoped src = "./style.css" lang="less"></style>

<script>
export default {
    // [总条目数, 当前页码]
    props: ['total', 'currentPage', 'pageSize'],
    data() {
        return {
            indexArr: [],
            pageSizeOptions: [5, 10, 20, 30], // 下拉选择每页多少项
            // pageSize: 5,
            // currentPage: 1, // 当前页码
            // total: '100', // 数据项的总数
            pageAmount: 0, // 分页后，总的页码数
            prevMore: false,
            nextMore: false,
            isOnlyOne: false
        }
    },
    watch: {
        total(val) {
            this.init()
            console.log(val)
        },
        currentPage(val) {
        },
        pageSize(val) {
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
            // console.log(this.indexArr)
            // console.log('每页' + this.pageSize + '条数据')
            // console.log('这是第' + this.currentPage + '页')
            // console.log('总页码数' + this.pageAmount + '页')
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
            // console.log('每页' + this.pageSize + '条数据')
            // console.log('这是第' + this.currentPage + '页')
        },
        prevPage(val) { // 上一页事件
            if (val > 1) {
                this.jumpTo(val - 1)
            }
        },
        nextPage(val) { // 下一页事件
            if (val < this.pageAmount) {
                this.jumpTo(val + 1)
            }
        },
        jumpNext() {
            if (this.currentPage + 3 <= this.pageAmount) {
                this.jumpTo(this.currentPage + 3)
            } else this.jumpTo(this.pageAmount) // 往后翻3页
        },
        jumpPrev() {
            if (this.currentPage - 3 >= 1) {
                this.jumpTo(this.currentPage - 3)
            } else this.jumpTo(1) // 往前翻3页
        },
        // 修改每页数量
        changePageSize(e) {
            this.pageSize = e.target.value
            this.indexArr = []
            this.init()
            // console.log('每页的条数变成了：' + this.pageSize)
        }
    },
    mounted() {
        this.init()
    }
}
</script>
