## Welcome to Ax-View
[![Github](https://img.shields.io/badge/GitHub-Follow-brightgreen.svg?longCache=true&style=popout-square)](https://github.com/Alexixyc/AlexiComponents)

[![Blog](https://img.shields.io/badge/Blog-AlexiXiang-brightgreen.svg?longCache=true&style=popout-square)](http://alexixyc.cn)

### Get Started
```js
    npm install ax-view --save
```

main.js
```js
    import Vue from 'vue'
    import App from './App.vue'
    import AxView from 'ax-view'

    Vue.use(AxView)

    new Vue({
        el: '#app',
        render: h => h(App)
    })
```

> pagination:
```html
    <ax-pagination
        :total="total"
        :currentPage="currentPage"
        :pageSize="pageSize"
        @changePage="changePage">
    </ax-pagination>

    <script>
    ......
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

> select:
```html
    <ax-select
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

> input:
```html
    <ax-input
        v-model="inputVal"
        placeholder="please enter your name."
        @focus="focus"
        @blur="blur"
        @change="change"
        :width="240"
        :disabled="false"
        :readonly="false">
    </ax-input>
    <script>
    ......
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
    </script>
```

> date-picker:
```html
    <div>
        <ax-date-picker
            class="ax-date-picker"
            v-model="date"
            :disabled="false"
            :placeholder="'请选择会议日期'"
            @change="change">
        </ax-date-picker>
        <ax-date-picker
            class="ax-date-picker"
            v-model="dateRange"
            type="daterange"
            :disabled="false"
            :startPlaceholder="'开始日期'"
            :endPlaceholder="'结束日期'"
            @change="change">
        </ax-date-picker>
    </div>
    <script>
    ......
    data() {
        return {
            date: new Date()
        }
    },
    methods: {
        change(val) {
            console.log('change监听', val)
        }
    }
    </script>
```



......
......

----
### To be continue...
----
