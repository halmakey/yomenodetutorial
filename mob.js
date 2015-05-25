/// <reference path="typings/node/node.d.ts" />

var util = require("./util");
var readline = require("readline-sync");

function createMob(name) {
	return {
		name: name || "?",
		hp: 100,
		mhp: 100,
		mp: 10,
		mmp: 10,
		atk: 10,
		def: 0,
		
		message: function (message) {
			return this.name + "「" + message + "」";
		},
		say: function (message) {
			console.log(this.message(message));
		},
		sel: function (selection, message) {
			return readline.keyInSelect(selection, this.message(message), {cancel: false});
		},
		yn: function(message) {
			return readline.keyInYN(this.message(message));
		}
	};
};
module.exports.createMob = createMob;

function createPlayer() {
	var player = module.exports.createMob();	
	do {
		util.clear();
		player = createMob(util.ask("名前は？:"));
		
		console.log();
		info(player);
	} while(!util.yn());
	return player;
};
module.exports.createPlayer = createPlayer;

function info(mob) {
	console.log("NAME: " + mob.name);
	console.log("HP: " + mob.hp + " / " + mob.mhp);
};
module.exports.info = info;
