import { DataTypes } from 'sequelize';
import { sequelize } from '../config/index.js';
import Module from './module.js';

const Lesson = sequelize.define('Lesson', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  moduleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Module,
      key: 'id',
    },
  }
});

export default Lesson;
