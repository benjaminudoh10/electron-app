const {app, BrowserWindow} = require('electron') 
const url = require('url') 
const path = require('path')  
const fs = require('fs')

let win  

function createWindow () { 
   win = new BrowserWindow({
      fullscreen: false,
      width: 1400,
      height: 800,
      webPreferences: {
         nodeIntegration: true
      }
   })
   win.loadURL(url.format({ 
      pathname: path.join(__dirname, 'index.html'), 
      protocol: 'file:',
      slashes: true 
   }))
   win.on('closed', () => {
      win = null
   })
}

app.on('ready', createWindow)

// For macOS
app.on('activate', () => {
   if (win === null) {
      createWindow()
   }
})
