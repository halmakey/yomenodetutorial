var readline = require("readline-sync");
var sl = require("sleep");

module.exports.test = function() {
	console.log("test");
};

module.exports.ask = function(question) {
    return readline.question(question);
};

module.exports.yn = function(message) {
	return readline.keyInYN("よろしいですか?");
}

module.exports.sel = function(selection, question) {
	return readline.keyInSelect(selection, question, {cancel: false});
};

module.exports.ln = function() {
	console.log("");	
};

module.exports.pak = function(message) {
    readline.question(message || "press any key to continue...");
};

module.exports.clear = function() {
	process.stdout.write('\u001B[2J\u001B[0;0f');
};

module.exports.wait = function() {
	console.log();
	sl.sleep(1);
};