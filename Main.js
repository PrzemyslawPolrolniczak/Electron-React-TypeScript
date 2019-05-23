"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Main {
    static onWindowAllClosed() {
        if (process.platform !== 'darwin') {
            Main.application.quit();
        }
    }
    static onClose() {
        Main.mainWindow = null;
    }
    static onReady() {
        Main.mainWindow = new Main.BrowserWindow({ width: 800, height: 600 });
        Main.mainWindow
            .loadURL('file://' + __dirname + '/index.html');
        Main.mainWindow.on('closed', Main.onClose);
    }
    static main(app, browserWindow) {
        Main.BrowserWindow = browserWindow;
        Main.application = app;
        Main.application.on('window-all-closed', Main.onWindowAllClosed);
        Main.application.on('ready', Main.onReady);
    }
}
exports.default = Main;
//file:///C:/Users/Przemek/Desktop/TypeScript/electron/src/index.html
//# sourceMappingURL=Main.js.map