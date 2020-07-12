npm run dev // 启动本地
npm run build // 打包线上环境




react Link传递参数三种方式
1、通过url进行拼接 path='/detail/:id/:name' 接收参数 this.props.match.params.name  需要在路由表进行配置
   优点：子页面刷新时因为url里带有参数，依然有这个值 
   缺点：如果需要传递多个参数不方便

2、通过query传递参数 <Link  to={{ pathname: '/detail/', query:{id: obj.id, name: obj.name, push_time: obj.push_time}}}>title</Link>
   接收参数  this.props.location.query
3、通过state传递参数 和query查不同的是  state传参是加密的 不再地址栏展示 query是公开的 在地址栏展示
   2、3缺点：刷新页面 参数会丢失


module.exports={fn}  导出   require引入 或者  import utils from './util' 或者 import {storage } from './../../utils'

export 单个导出   不能直接将exports变量指向一个值 因为这样等于切断了 exports与module.expoets的联系

export const appid = appid
export function getAppid() {
  return '123456'
}

导入  import { appid,getAppid } from './util'   
导入  import * as utils from './util'
导入  let utils = require("./../../utils")


export default 为模块指定默认输出  ------只能用一次------
const app = function(){}
export default app

导入  import utils from './../../utils'
导入 let utils = require("./../../utils")    utils.default.set("ke11y",886)


























This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
