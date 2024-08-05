const vscode = require('vscode');

function activate(context) {
  const connectionProfileProvider = new ConnectionProfileProvider();
  vscode.window.registerTreeDataProvider('connection-profile', connectionProfileProvider);
}

class ConnectionProfileProvider {
  getTreeItem(element) {
    return element;
  }

  getChildren(element) {
    if (!element) {
      return Promise.resolve([
        new vscode.TreeItem('Profile 1', vscode.TreeItemCollapsibleState.None),
        new vscode.TreeItem('Profile 2', vscode.TreeItemCollapsibleState.None)
      ]);
    }
    return Promise.resolve([]);
  }
}

module.exports = {
  activate
};
