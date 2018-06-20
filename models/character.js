module.exports = function (sequelize, DataTypes) {
    var PlayerCharacter = sequelize.define("PlayerCharacter", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 200]
            }
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 60]
            }
        },
        race: {
            type: DataTypes.STRING,
            allowNull: false
        },
        class: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1, 200]
        }
    });

    return PlayerCharacter;
};
