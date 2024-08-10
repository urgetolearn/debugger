
const vscode = require('vscode');



/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "debugger" is now active!');

	const disposable = vscode.commands.registerCommand('debugger.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Debugger!');
	});
	const disposable1 = vscode.commands.registerCommand(
		"Connection-profile.button1",
		function () {
		  vscode.window.showInformationMessage("Clicked button1!");
		  console.log("Button1");
		}
	  );
	  const disposable2 = vscode.commands.registerCommand(
		"Connection-profile.button2",
		function () {
		  vscode.window.showInformationMessage("Clicked button2!");
		  console.log("Button2");
		}
	  );
	
	  context.subscriptions.push(disposable1);
	  context.subscriptions.push(disposable2);

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
