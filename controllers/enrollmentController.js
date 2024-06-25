import Enrollment from '../models/enrollment.js';

export const enrollUser = async (req, res) => {
  try {
    const { userId, courseId } = req.body;
    const enrollment = await Enrollment.create({ userId, courseId });
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.findAll();
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getCoursesByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const enrollments = await Enrollment.findAll({ where: { userId }, include: 'Course' });
    res.status(200).json(enrollments.map(enrollment => enrollment.Course));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getUsersByCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const enrollments = await Enrollment.findAll({ where: { courseId }, include: 'User' });
    res.status(200).json(enrollments.map(enrollment => enrollment.User));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteEnrollment = async (req, res) => {
  try {
    const enrollment = await Enrollment.findByPk(req.params.id);
    if (!enrollment) {
      res.status(404).json({ error: 'Enrollment not found' });
      return;
    }
    await enrollment.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
