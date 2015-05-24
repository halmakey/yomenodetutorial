var util = require("../util");

module.exports = function() {
	var sel = util.sel(["泊まる (10G)", "やめとく"], "へいらっしゃい。泊まっていくかい？");
	
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