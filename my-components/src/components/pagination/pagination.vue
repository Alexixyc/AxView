<template>
    <div class="pagination-box">
        <div class="select-box">
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
        </div>
        <span
            class="page-block arrow"
            @click="prevPage(selected)">
            &lt;
        </span>
        <span class="page-block"
            :class="{active:selected === 1}"
            @click="jumpTo(1)">
            1
        </span>
        <span
            class="page-block arrow"
            v-if="prevMore"
            @click="jumpPrev">
            &lt;&lt;
        </span>
        <span
            v-for="(item,index) in indexArr"
            :key="index"
            class="page-block"
            :class="{active:selected === item}"
            @click= "jumpTo(item)">
            {{item}}
        </span>
        <span
            class="page-block arrow"
            v-if="nextMore"
            @click="jumpNext">
            &gt;&gt;
        </span> <!-- ••• -->
        <span
            class="page-block"
            :class="{active:selected === pageAmount}"
            @click="jumpTo(pageAmount)" v-if="!isOnlyOne">
            {{pageAmount}}
        </span>
        <span
            class="page-block arrow"
            @click="nextPage(selected)">
            &gt;
        </span>
    </div>
</template>

<style scoped src = "./style.css" lang="less"></style>

<script>
export default {
    data() {
        return {
            indexArr: [],
            pageSizeOptions: [5, 10, 20, 30], // 下拉选择每页多少项
            pageSize: 5,
            selected: 1, // 当前页码
            totalNum: '100', // 数据项的总数
            pageAmount: 0, // 分页后，总的页码数
            prevMore: false,
            nextMore: false,
            isOnlyOne: false
        }
    },
    methods: {
        init() {
            let y = this.totalNum % this.pageSize // 总条目数 除以 每页条目数的余数
            let s = Math.floor(this.totalNum / this.pageSize) // 总条目数 除以 每页条目数的商
            this.pageAmount = (y === 0) ? s : (s + 1) // 总的页码数
            if (this.pageAmount > 7) { // 若总页数大于7页
                for (let i = 2; i < 7; i++) {
                    this.indexArr.push(i) // 初始状态push：2到6进去
                }
                this.nextMore = true
            } else if (this.pageAmount <= 7 && this.pageAmount > 1) {
                for (let i = 2; i < this.pageAmount; i++) {
                    this.indexArr.push(i) // 初始状态push：2到pageAmount进去
                }
            } else {
                this.isOnlyOne = true // 只有一页
            }
            console.log('每页' + this.pageSize + '条数据')
            console.log('这是第' + this.selected + '页')
        },
        jumpTo(pageIndex) {
            this.selected = pageIndex
            //  首先判断页码是否大于7
            if (this.pageAmount > 7) { //  > 7
                this.prevMore = pageIndex > 4 // 是否有prevMore 按钮
                this.nextMore = pageIndex < (this.pageAmount - 3)// 是否有nextMore 按钮
                if (pageIndex <= 4) { // 点击1到4页
                    this.indexArr = [2, 3, 4, 5, 6]
                } else if (pageIndex > 4 && pageIndex < (this.pageAmount - 3)) { // 点击第5页至倒数第5页
                    this.indexArr = []
                    this.indexArr.push(pageIndex - 2)
                    this.indexArr.push(pageIndex - 1)
                    this.indexArr.push(pageIndex)
                    this.indexArr.push(pageIndex + 1)
                    this.indexArr.push(pageIndex + 2)
                } else if (pageIndex >= (this.pageAmount - 3)) { // 点击倒数第4页到最后1页
                    this.indexArr = []
                    this.indexArr.push(this.pageAmount - 5)
                    this.indexArr.push(this.pageAmount - 4)
                    this.indexArr.push(this.pageAmount - 3)
                    this.indexArr.push(this.pageAmount - 2)
                    this.indexArr.push(this.pageAmount - 1)
                }
            }

            console.log('每页' + this.pageSize + '条数据')
            console.log('这是第' + this.selected + '页')
        },
        prevPage(selected) { // 上一页事件
            if (selected > 1) {
                this.jumpTo(selected - 1)
            }
        },
        nextPage(selected) { // 下一页事件
            if (selected < this.pageAmount) {
                this.jumpTo(selected + 1)
            }
        },
        jumpNext() {
            if (this.selected + 3 <= this.pageAmount) {
                this.jumpTo(this.selected + 3)
            } else this.jumpTo(this.pageAmount) // 往后翻3页
        },
        jumpPrev() {
            if (this.selected - 3 >= 1) {
                this.jumpTo(this.selected - 3)
            } else this.jumpTo(1) // 往前翻3页
        },
        changePageSize(e) {
            this.pageSize = e.target.value
            this.indexArr = []
            this.init()
            console.log('每页的条数变成了：' + this.pageSize)
        }
    },
    mounted() {
        this.init()
    }
}
</script>
