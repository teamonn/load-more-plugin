# load-more-plugin

> Vuejs实现的移动端上拉加载请求下一页数据的分页加载组件.

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
  :loadingText="loadingText"
  :loadedText="loadedText"
  :status="status"
  :reserveDistance="reserveDistance"
  @load="loadNextPage"
/>

...
```
## API

``` js
loadingIcon     // 加载动画的图片src(可选)
loadingText     // 正在加载显示的文字(可选)
loadedText      // 加载完成显示的文字(可选)
status          // 加载的状态值(必填)，0: 隐藏，1: 正在加载，2: 加载完成
reserveDistance // 不触发父组件回调的最大距离，默认200(可选)
```

另外需要注意的一点就是，在父组件中实例化的时候需要挂载一个回调函数，方便该组件在需要的时候回调父组件的加载下一页方法。

如demo中，```@load="loadNextPage"``` loadNextPage()表示需要加载时的回调函数，必填

回调方法设置状态值应该按照子组件给出的映射关系来设定，如：

``` js
loadNextPage () {

  ...

  this.status = LoadMore.LOAD_STATUS.LOADING // 按照组件映射关系，更改为加载中状态

  ...
}
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

## License

This content is released under the [teamonn](https://github.com/teamonn) License.


