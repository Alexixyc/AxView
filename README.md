## Welcome to Ax UI

> 分页组件pagination
```html
    <ax-pagination
        :total="total"
        :currentPage="currentPage"
        :pageSize="pageSize"
        @changePage="changePage">
    </ax-pagination>

    <script>
    ......
    ...
    data() {
        return {
            total: 120,
            currentPage: 1,
            pageSize: 10
        }
    },
    methods: {
        changePage(val) {
            console.log(val)
            this.currentPage = val
        }
    }
    </script>
```