module.exports = function (sequelize, DataTypes) {
    var character = sequelize.define("character", {
        username: DataTypes.STRING,
        character_name: DataTypes.STRING,
        gender: DataTypes.STRING,
        race: DataTypes.STRING,
        class: DataTypes.STRING,
        dex: DataTypes.INTEGER,
        intel: DataTypes.INTEGER,
        cha: DataTypes.INTEGER,
        stre: DataTypes.INTEGER,
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
        survival: DataTypes.INTEGER,
    });
    // To help the tables join 
    // Character.associate = (models) => {
    //     Character.belongsTo(models.User, {
    //       foreignKey: 'userId',
    //       onDelete: 'CASCADE',
    //     })
    //   };
    return character;
};


