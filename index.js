const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('js_meals', 'root', 'your_password', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
