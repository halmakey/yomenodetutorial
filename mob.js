/// <reference path="typings/node/node.d.ts" />

var util = require("./util");

function createMob() {
	return {
		name: "???",
		hp: 100,
		mhp: 100,
		mp: 10,
		mmp: 10,
		atk: 10,
		def: 0,
		
		say: function say(message) {
			console.log(this.name + "「" + message + "」");	
		},
	};
};
module.exports.createMob = createMob;

function createPlayer() {
	var player = module.exports.createMob();	
	do {
		util.clear();
		player.name = util.ask("名前は？:");
		
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
