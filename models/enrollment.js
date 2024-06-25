import { DataTypes } from 'sequelize';
import { sequelize } from '../config/index.js';
import Course from './course.js';
import User from './user.js';

const Enrollment = sequelize.define('Enrollment', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
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

export default Enrollment;
