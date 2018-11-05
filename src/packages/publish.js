import AxPagination from './pagination/index.js';
import AxSelect from './select/index.js';
import AxOption from './option/index.js';
import AxInput from './input/index.js';
import AxDatePicker from './date-picker/index.js'
// ...如果还有的话继续添加

const components = [
    AxPagination,
    AxSelect,
    AxOption,
    AxInput,
    AxDatePicker
  // ...如果还有的话继续添加
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  AxPagination,
  AxSelect,
  AxOption,
  AxInput,
  AxDatePicker
  // ...如果还有的话继续添加
}