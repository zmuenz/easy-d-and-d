module.exports = function (Sequelize, DataTypes) {
    var Character = Sequelize.define("Character", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        userName: {
            type: DataTypes.STRING,
        },
        character_name: {
            type: DataTypes.STRING
        },
        gender: {
            type: DataTypes.STRING
        },
        alignment: {
            type: DataTypes.STRING
        },
        race: {
            type: DataTypes.STRING
        },
        class: {
            type: DataTypes.STRING
        },
        dex: {
            type: DataTypes.INTEGER
        },
        intel: {
            type: DataTypes.INTEGER
        },
        cha: {
            type: DataTypes.INTEGER
        },
        stre: {
            type: DataTypes.INTEGER
        },
        con: {
            type: DataTypes.INTEGER
        },
        wis: {
            type: DataTypes.INTEGER
        },
        acrobatics: {
            type: DataTypes.INTEGER
        },
        appraise: {
            type: DataTypes.INTEGER
        },
        bluff: {
            type: DataTypes.INTEGER
        },
        climb: {
            type: DataTypes.INTEGER
        },
        craft: {
            type: DataTypes.INTEGER,
        },
        diplomacy: {
            type: DataTypes.INTEGER,
        },
        disable_device: {
            type: DataTypes.INTEGER,
        },
        disguise: {
            type: DataTypes.INTEGER,
        },
        escape_artist: {
            type: DataTypes.INTEGER,
        },
        fly: {
            type: DataTypes.INTEGER,
        },
        handle_animal: {
            type: DataTypes.INTEGER,
        },
        heal: {
            type: DataTypes.INTEGER,
        },
        intimidate: {
            type: DataTypes.INTEGER,
        },
        knowledge_arcana: {
            type: DataTypes.INTEGER
        },
        knowledge_dungeoneering: {
            type: DataTypes.INTEGER,
        },
        knowledge_engineering: {
            type: DataTypes.INTEGER,
        },
        knowledge_geography: {
            type: DataTypes.INTEGER,
        },
        knowledge_history: {
            type: DataTypes.INTEGER,
        },
        knowledge_local: {
            type: DataTypes.INTEGER,
        },
        knowledge_nature: {
            type: DataTypes.INTEGER,
        },
        knowledge_nobility: {
            type: DataTypes.INTEGER,
        },
        knowledge_planes: {
            type: DataTypes.INTEGER,
        },
        knowledge_religion: {
            type: DataTypes.INTEGER,
        },
        linguistics: {
            type: DataTypes.INTEGER,
        },
        perception: {
            type: DataTypes.INTEGER,
        },
        perform: {
            type: DataTypes.INTEGER,
        },
        profession: {
            type: DataTypes.INTEGER,
        },
        sense_motive: {
            type: DataTypes.INTEGER
        },
        sleight_of_hand: {
            type: DataTypes.INTEGER,
        },
        spellcraft: {
            type: DataTypes.INTEGER,
        },
        stealth: {
            type: DataTypes.INTEGER,
        },
        survival: {
            type: DataTypes.INTEGER,
        },
        swim: {
            type: DataTypes.INTEGER,
        },
        use_magic_device: {
            type: DataTypes.INTEGER,
        }
    });
    // To help the tables join 
    Character.associate = (models) => {
        Character.belongsTo(models.User, {
          foreignKey: 'user_id',
          onDelete: 'CASCADE',
        })
      };
    return Character;
};


