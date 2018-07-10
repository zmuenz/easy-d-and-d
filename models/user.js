module.exports = function (Sequelize, DataTypes) {
    var User = Sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.TEXT,
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.TEXT,
        },
        lastName: {
        type: DataTypes.TEXT,
        },
        //Sequelize.ENUM did not work 
        status: {
            type: DataTypes.ENUM,
            values: ['active', 'inactive']
        }
    });

    User.associate = function (models) {
        // Associating User with their character
        // When a User is deleted, also delete any associated characters
        User.hasMany(models.Character, {
            onDelete: "cascade"
        });
    };

    return User;
};