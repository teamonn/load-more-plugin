# load-more-plugin

> Vuejs实现的移动端上拉加载请求下一页数据的分页插件.

## 该组件使用文档

### 引入该组件
vue 文件的 script 标签中
``` js
import LoadMore from './components/LoadMore'
...
export default {
  components: {
    LoadMore
  }
}
```

### 虚拟 dom 中插入该组件

vue 文件的 template 中
``` html
...
<load-more
  :loadingIcon="loadingIcon"
  :isLoading="isLoading"
  :text="loadText"
  :reserveDistance="reserveDistance"
  @load="loadNextPage"
/>
...
```
### 参数说明

``` js
loadingIcon     // 加载动画的图片src
isLoading       // 是否正在加载数据
text            // loading组件的文字
reserveDistance // 不触发父组件回调的最大距离
load            // 需要加载时的回调函数
```
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

