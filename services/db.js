const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

const Model = Sequelize.Model;

class User extends Model {}
User.init({
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  photo: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  authType: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'user'
});

User.sync({ force: true });

module.exports = { User };