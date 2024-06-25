import { DataTypes } from 'sequelize';
import { sequelize } from '../config/index.js';
import Course from './course.js';

const Module = sequelize.define('Module', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Course,
      key: 'id',
    },
  }
});

export default Module;
