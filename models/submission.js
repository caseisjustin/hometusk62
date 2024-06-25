import { DataTypes } from 'sequelize';
import { sequelize } from '../config/index.js';
import Assignment from './assignment.js';
import User from './user.js';

const Submission = sequelize.define('Submission', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  grade: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: true,
  },
  assignmentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Assignment,
      key: 'id',
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  }
});

export default Submission;
