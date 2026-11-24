const { app, BrowserWindow } = require('electron/main');
const path = require('node:path');

function createWindow() {
  const win = new BrowserWindow({
    width: 380,
    height: 520,
    transparent: true,
    frame:false,
    alwaysOnTop:true,
    resizable:false,
    backgroundColor:'#00000000',
    webPreferences: {
      preload: path.join(__dirname, '..', 'preload', 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

    win.loadFile(path.join(__dirname, '..', 'renderer', 'index.html'));
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }

});
