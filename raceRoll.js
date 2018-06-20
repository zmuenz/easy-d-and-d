const races = ["dwarf", "elf", "gnome", "half-elf", "half-orc", "halfling", "human"];

var charRace = races[Math.floor(Math.random() * races.length)];

// once race is chosen, adjust player stats based on race modifiers

switch (charRace) {
    case "dwarf":
        stats.Con = stats.Con + 2;
        stats.Wis = stats.Wis + 2;
        stats.Cha = stats.Cha - 2;
        break;

    case "elf":
        stats.Dex = stats.Dex + 2;
        stats.Int = stats.Int + 2;
        stats.Con = stats.Con - 2;
        break;

    case "gnome":
        stats.Con = stats.Con + 2;
        stats.Cha = stats.Cha + 2;
        stats.Str = stats.Str - 2;
        break;

    case "half-elf":
        var randStat = stats[Math.floor(Math.random() * stats.length)];
        randStat = randStat + 2;
        break;

    case "half-orc":
        var randStat = stats[Math.floor(Math.random() * stats.length)];
        randStat = randStat + 2;
        break;

    case "halfling":
        stats.Dex = stats.Dex + 2;
        stats.Cha = stats.Cha + 2;
        stats.Str = stats.Str - 2; 
        break;

    case "human":
        var randStat = stats[Math.floor(Math.random() * stats.length)];
        randStat = randStat + 2;
        break;
};