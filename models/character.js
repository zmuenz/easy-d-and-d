module.exports = function (sequelize, DataTypes) {
    var Character = sequelize.define("Character", {
        username: DataTypes.STRING,
        character_name: DataTypes.STRING,
        gender: DataTypes.STRING,
        race: DataTypes.STRING,
        class: DataTypes.STRING,
        dex: DataTypes.INTEGER,
        int: DataTypes.INTEGER,
        cha: DataTypes.INTEGER,
        str: DataTypes.INTEGER,
        con: DataTypes.INTEGER,
        wis: DataTypes.INTEGER,
        acrobatics: DataTypes.INTEGER,
        animal_handling: DataTypes.INTEGER,
        arcana: DataTypes.INTEGER,
        athletics: DataTypes.INTEGER,
        deception: DataTypes.INTEGER,
        history: DataTypes.INTEGER,
        insight: DataTypes.INTEGER,
        intimidation: DataTypes.INTEGER,
        investigation: DataTypes.INTEGER,
        medicine: DataTypes.INTEGER,
        nature: DataTypes.INTEGER,
        perception: DataTypes.INTEGER,
        performance: DataTypes.INTEGER,
        persuasion: DataTypes.INTEGER,
        religion: DataTypes.INTEGER,
        sleight: DataTypes.INTEGER,
        stealth: DataTypes.INTEGER,
        survival: DataTypes.INTEGER
    });

    Character.associate = function (models) {
        // We're saying that a Dish Review should belong to a User
        // A Dish Review can't be created without a User due to the foreign key constraint
        Character.belongsTo(models.User, {
          onDelete: 'CASCADE'
        });
      };

    return Character;
};