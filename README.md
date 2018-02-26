# load-more-plugin

> Vuejs实现的移动端上拉加载请求下一页数据的分页插件.

## Demo

### 引入组件
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
## API

``` js
- loadingIcon     // 加载动画的图片src(可选)
- isLoading       // 是否正在加载数据，默认undefined(可选)
- text            // loading组件的文字(必填)
- reserveDistance // 不触发父组件回调的最大距离，默认200(可选)
```

另外需要注意的一点就是，在父组件中实例化的时候需要挂载一个回调函数，方便该组件在需要的时候回调父组件的加载下一页方法。

如demo中，```@load="loadNextPage"``` loadNextPage()表示需要加载时的回调函数，必填

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

## License

This content is released under the [teamonn](https://github.com/teamonn) License.


