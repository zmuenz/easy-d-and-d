let charStats = [];

let stats = {
    Str: 0,
    Dex: 0,
    Con: 0,
    Int: 0,
    Wis: 0,
    Cha: 0
};

function bubbleSort(items) {
	var length = items.length;
	for (var i = (length - 1); i >= 0; i--) {
		//Number of passes
		for (var j = (length - i); j > 0; j--) {
			//Compare the adjacent positions
			if (items[j] < items[j - 1]) {
				//Swap the numbers
				var tmp = items[j];
				items[j] = items[j - 1];
				items[j - 1] = tmp;
			}
		}
    }
    return items;
};

function statRolls() {
    let diceRolls = [];

    for (var i = 0; i < 4; i++) {
        let currentRoll = Math.floor((Math.random() * 6) + 1);
        diceRolls.push(currentRoll);
        console.log(currentRoll);
    };

    bubbleSort(diceRolls);
    diceRolls.shift();
    var sum = diceRolls.reduce(function(a, b) { return a + b; }, 0);
    charStats.push(sum);
};

function setStats() {
    stats.Str = charStats[0];
    stats.Dex = charStats[1];
    stats.Con = charStats[2];
    stats.Int = charStats[3];
    stats.Wis = charStats[4];
    stats.Cha = charStats[5];
}

function rollStats() {
    for (var x = 0; x < 6; x++) {
        statRolls();
    };
    setStats();
};

rollStats();
console.log(charStats);
console.log(stats);