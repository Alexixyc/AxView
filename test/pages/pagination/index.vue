<template>
    <div>
        <ax-pagination
            :total="total"
            :currentPage="currentPage"
            :pageSize="pageSize"
            @changePage="changePage">
        </ax-pagination>
    </div>
</template>
<script>
import pagination from '@/packages/pagination/index.vue'
export default {
    components: {
        'ax-pagination': pagination
    },
    data() {
        return {
            total: 120,
            currentPage: 1,
            pageSize: 6
        }
    },
    methods: {
        changePage(val) {
            console.log(val)
            this.currentPage = val
        }
    }
}
</script>

