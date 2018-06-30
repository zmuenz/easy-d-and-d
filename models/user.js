var bcrypt = require("bcrypt-nodejs");


module.exports = function (Sequelize, DataTypes) {
    var User = Sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4, 10]
            }
        },
        //Sequelize.ENUM did not work 
        status: {
            type: DataTypes.STRING
            // values: ['active', 'inactive']
        }
    });

    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    //    Before a User is created, we will automatically hash their password
    User.hook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
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