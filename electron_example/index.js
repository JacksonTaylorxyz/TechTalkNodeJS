const {app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

// Global window instance
let win;

// Used as the callback for when the app is ready.
function createWindow() {
    win = new BrowserWindow({width: 640, height: 480});

    // Load an html page into the window
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
    console.log('Window started');
}

// When the environment is ready, call to create a window
app.on('ready', createWindow);
console.log('End of file');

