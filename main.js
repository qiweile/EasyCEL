const { app, BrowserWindow} = require('electron')
// 区分开发环境还是生产环境的插件
const isDev = require('electron-is-dev')
let mainWindow;
app.on('ready', () => {
    require('devtron').install
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 680,
        webPreferences: {
            nodeIntegration: true,
        }
    })
    const urlLocation = isDev ? 'http://localhost:3000' : 'dummyurl'
    mainWindow.loadURL(urlLocation)
    mainWindow.webContents.openDevTools()
})