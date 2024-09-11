const { app, BrowserWindow } = require('electron');

//import { join } from 'path';
//import isDev from 'electron-is-dev';

const {join} = require('path');

const isDev = true;

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });

    // Load the app from a URL or local file depending on the environment
    const startUrl = isDev ? 'http://localhost:3000' : `file://${join(__dirname, '../build/index.html')}`;
    mainWindow.loadURL(startUrl);

    // Open the DevTools automatically if developing
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }
}

app.on('ready', createWindow);
