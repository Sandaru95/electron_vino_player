const { BrowserWindow, app } = require("electron");

// Placeholders
let win;

app.whenReady().then(() => {
    win = new BrowserWindow({
        width: 800,
        height: 650,
    });
    // Loading File
    win.loadFile("./src/index.html");
});