import { DataTypes } from 'sequelize';
import { sequelize } from '../config/index.js';
import Lesson from './lesson.js';

const Assignment = sequelize.define('Assignment', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  lessonId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Lesson,
      key: 'id',
    },
  }
});

export default Assignment;
