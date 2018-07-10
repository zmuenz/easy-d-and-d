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
        animal_handling: {
            type: DataTypes.INTEGER
        },
        arcana: {
            type: DataTypes.INTEGER
        },
        athletics: {
            type: DataTypes.INTEGER
        },
        deception: {
            type: DataTypes.INTEGER
        },
        history: {
            type: DataTypes.INTEGER,
        },
        insight: {
            type: DataTypes.INTEGER,
        },
        intimidation: {
            type: DataTypes.INTEGER,
        },
        investigation: {
            type: DataTypes.INTEGER,
        },
        medicine: {
            type: DataTypes.INTEGER,
        },
        nature: {
            type: DataTypes.INTEGER,
        },
        perception: {
            type: DataTypes.INTEGER,
        },
        performance: {
            type: DataTypes.INTEGER,
        },
        persuasion: {
            type: DataTypes.INTEGER,
        },
        religion: {
            type: DataTypes.INTEGER,
        },
        sleight: {
            type: DataTypes.INTEGER,
        },
        stealth: {
            type: DataTypes.INTEGER,
        },
        survival: {
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


