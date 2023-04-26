const { app, BrowserWindow, ipcMain } = require("electron")
const path = require('path')
const { sklCourses } = require("hdu-lis");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        }
    })
    ipcMain.handle('ping', () => 'pong')
    win.loadFile("index.html")
    
    sklCourses("22270318", "skz@yhdm4.com").then((res) => {
        console.log(res);
    })
}

app.whenReady().then(() => {
    createWindow()
    
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})