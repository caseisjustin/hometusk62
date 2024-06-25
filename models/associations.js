import User from './user.js';
import Course from './course.js';
import Module from './module.js';
import Lesson from './lesson.js';
import Enrollment from './enrollment.js';
import Assignment from './assignment.js';
import Submission from './submission.js';

Course.hasMany(Module, { foreignKey: 'courseId' });
Module.belongsTo(Course, { foreignKey: 'courseId' });

Module.hasMany(Lesson, { foreignKey: 'moduleId' });
Lesson.belongsTo(Module, { foreignKey: 'moduleId' });

Lesson.hasMany(Assignment, { foreignKey: 'lessonId' });
Assignment.belongsTo(Lesson, { foreignKey: 'lessonId' });

Assignment.hasMany(Submission, { foreignKey: 'assignmentId' });
Submission.belongsTo(Assignment, { foreignKey: 'assignmentId' });

User.hasMany(Submission, { foreignKey: 'userId' });
Submission.belongsTo(User, { foreignKey: 'userId' });

User.belongsToMany(Course, { through: Enrollment, foreignKey: 'userId' });
Course.belongsToMany(User, { through: Enrollment, foreignKey: 'courseId' });

export {
  User,
  Course,
  Module,
  Lesson,
  Enrollment,
  Assignment,
  Submission,
};
