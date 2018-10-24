## Welcome to Ax UI
[![Github](https://img.shields.io/badge/GitHub-Follow-brightgreen.svg?longCache=true&style=popout-square)](https://github.com/Alexixyc)

[![Blog](https://img.shields.io/badge/Blog-AlexiXiang-brightgreen.svg?longCache=true&style=popout-square)](http://alexixyc.cn)

> pagination：
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

> select：
```html
    <ax-select
        class="ax-select"
        v-model="selectedVal"
        @change="change"
        :disabled="false"
        :placeholder="'DIY placeholder~'">
        <ax-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">
        </ax-option>
    </ax-select>

    <script>
    ......
    ...
    data() {
        return {
            options: [{
                value: 'one',
                label: 'option1'
            }, {
                value: 'two',
                label: 'option2',
                disabled: true
            }, {
                value: 'three',
                label: 'option3'
            }],
            selectedVal: ''
        }
    },
    methods: {
        change(obj) {
            console.log(obj)
        }
    }
    </script>
```

......
......

----
### To be continue...
----
