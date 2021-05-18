# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
```
node -v 12.5.0

创建react初始化项目： npx create-react-app my-app

引入electron: yarn add electron -D

根目录新建 main.js

引入区分开发环境或生产环境的库： yarn add electron-is-dev

修改package.json 文件：在版本号下面加一个 "main":"main.js"

在script 下添加一个命令 "dev":"electron ."

先启动start，在启动dev

引入：concurrently 插件 可以一次运行多个命令 yarn add concurrently -D "dev": "concurrently \"electron .\" \"yarn dev\""同时运行两条命令中间用空格隔开(用 concurrently 后会发现有开始运行时有一段白屏的时间 下面马上解决它)

引入 wait-on:插件：当一个程序运行完成后再向下继续执行：yarn add wait-on -D
修改命令为："dev": "concurrently \"wait-on http://localhost:3000 && electron .\" \"yarn dev\""

我们写的是桌面应用现在发现每次都会自动打开浏览器我们还有手动关闭它（解决这个问题 create-react-app 提供了一个环境变量 cross-env：解决跨平台环境变量问题 ）

引入 cross-env： yarn add cross-env -D
修改命令："dev": "concurrently \"wait-on http://localhost:3000 && electron .\" \"cross-env BROWSER=none yarn dev\""

引入 bootstrap 库 yarn add bootstrap --save

引入 devtron(打开控制台插件)：yarn add devtron -D
在main.js中加入下面两行
    require('devtron').install
    mainWindow.webContents.openDevTools()
    配置完成后重新运行即可

```
### 图标svg 和 font icon 相比较优势
```
1、SVG 可以完全的控制，用任何的css属性控制它；fontIcon 本身是字符只能用字符相关的属性控制
2、使用fontIcon 通常需要下载几个比较大的字符集 而用到的图标可能只有几个
3、使用 fontIcon 当加载失败的时候还可能出现各种各样的 bug 浏览器可能把 fontIcon 识别成各种各样的字符

svg 图标的获取途径之一：使用 fontawesome react ；图标库插件：react-fontawesome
安装方式：（其中 react-fontawesome 这是跟图标的组件）
    网站：https://fontawesome.com/how-to-use/on-the-web/using-with/react
    yarn add @fortawesome/react-fontawesome
    yarn add @fortawesome/free-solid-svg-icons
    yarn add @fortawesome/fontawesome-svg-core
    <!-- 公司 logo 图标 -->
    yarn add @fortawesome/free-brands-svg-icons
使用：
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faSearch } from '@fortawesome/free-solid-svg-icons'
```
```
安装 PropTypes：类型定义插件，类似typeScript
    yarn add PropTypes

```