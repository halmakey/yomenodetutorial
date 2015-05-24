var util = require("./util");
var mob = require("./mob");

console.log("ZION");
util.wait();
util.pak();
util.clear();

global.players = [mob.createPlayer()];
global.gold = 10;

var day = 1;

var time = ["朝", "昼", "夜"];

while(day < 10) {
	var step = 0;

	util.clear();

	while(step < 3) {

		console.log("Day " + day + " " + time[step]);
		util.wait();
	
		step += field();
		console.log();
	}
	day++;
}

function field() {
	var sel = util.sel(["洞窟", "酒場", "宿屋", "中断"], "どこへ行く？");
	switch (sel) {
		case 0:
			return require("./map/cave")();
		case 1:
			return require("./map/pub")();
		case 2:
			return require("./map/inn")();
		default:
			process.exit();
			return 0;
	}
}