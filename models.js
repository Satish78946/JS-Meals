const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Meal = sequelize.define('Meal', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
});

sequelize.sync()
    .then(() => console.log('Meals table created...'))
    .catch(err => console.log('Error: ' + err));

module.exports = Meal;
