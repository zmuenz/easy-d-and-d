const races = ["dwarf", "elf", "gnome", "half-elf", "half-orc", "halfling", "human"];

var charRace = races[Math.floor(Math.random() * races.length)];

// once race is chosen, adjust player stats based on race modifiers

switch (document.getElementById('race').value) {
    case "Dwarf":
        stats.con = stats.con + 2;
        stats.wis = stats.wis + 2;
        stats.cha = stats.cha - 2;
        break;

    case "Elf":
        stats.dex = stats.dex + 2;
        stats.int = stats.int + 2;
        stats.con = stats.con - 2;
        break;

    case "Gnome":
        stats.con = stats.con + 2;
        stats.cha = stats.cha + 2;
        stats.str = stats.str - 2;
        break;

    case "Half-elf":
        var randStat = stats[Math.floor(Math.random() * stats.length)];
        randStat = randStat + 2;
        break;

    case "Half-orc":
        var randStat = stats[Math.floor(Math.random() * stats.length)];
        randStat = randStat + 2;
        break;

    case "Halfling":
        stats.dex = stats.dex + 2;
        stats.cha = stats.cha + 2;
        stats.str = stats.str - 2;
        break;

    case "Human":
        var randStat = stats[Math.floor(Math.random() * stats.length)];
        randStat = randStat + 2;
        break;
};