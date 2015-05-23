var readline = require("readline-sync");

module.exports.test = function() {
	console.log("test");
};

module.exports.pak = function() {
    readline.question(".");
};

module.exports.clear = function() {
	console.log('\033[2J');
}

module.exports.wait = function() {
	var sl = require("sleep");
	sl.sleep(1);
}