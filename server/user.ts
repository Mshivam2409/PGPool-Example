import pgpoolClient from './database';
import sequelize from "sequelize";

const User = pgpoolClient.define('user', {
    // attributes
    username: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize.DataTypes.STRING,
        allowNull: false
    }
}, {
    // options
});



export default User