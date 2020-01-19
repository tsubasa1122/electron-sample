const { app } = require('electron');
const { BrowserWindow } = require('electron');

app.on('ready', () => {
  const browserWindow = new BrowserWindow();
  browserWindow.loadURL(`file://${__dirname}/browser.html`);
})
