var util = require("./util");
var rl = require("readline-sync");

util.clear();
console.log("SLIME QUEST II\n");

rl.question("Press any key to start!");

var day = 1;

while(day < 4) {
	util.clear();
	console.log("DAY " + day + "\n");
	util.wait();
		
	var commands = ["お昼寝する", "おやつを食べる", "歌をうたう"];
	var selection = rl.keyInSelect(commands, "今日は 何を しようかな:");
	util.wait();
	
	switch(selection) {
		case 0:
		    console.log("zzz..."); 
			break;
		case 1:
			console.log("もぐもぐ...おいしい！");
			break;
		case 2:
			console.log("らんらん♪");
			break;
		default:
			console.log("おわり");
			process.exit();
			break;
	}
	util.wait();
	day++;
}

console.log('\033[2J');
console.log("そして スライムの 4 日間は おわった。");
console.log("〜 完 〜");
