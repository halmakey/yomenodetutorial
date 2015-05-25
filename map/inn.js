var util = require("../util");
var mob = require("../mob");

module.exports = function() {
	var sel = mob.createMob("宿屋").yn("へいらっしゃい。一泊Gだよ。泊まっていくかい？");
	switch (sel) {
		case 0:
			if (global.gold < 10) {
				global.players[0].say("お金がなかった・・・");
				return 0;
			}
			global.players[0].say("泊まろう。このなけなしの10Gを払ってでも・・・！");
			util.wait();
			global.gold -= 10;
			global.players.forEach(function (player) {
				player.hp = player.mhp;
				player.mp = player.mmp;
			});
			return 3;
		default:
			global.players[0].say("さいなら！");
			return 0;
	}
}