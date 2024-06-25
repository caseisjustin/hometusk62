import Module from '../models/module.js';

export const createModule = async (req, res) => {
  try {
    const { title, description, courseId } = req.body;
    const module = await Module.create({ title, description, courseId });
    res.status(201).json(module);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllModules = async (req, res) => {
  try {
    const modules = await Module.findAll();
    res.status(200).json(modules);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getModuleById = async (req, res) => {
  try {
    const module = await Module.findByPk(req.params.id);
    if (!module) {
      res.status(404).json({ error: 'Module not found' });
      return;
    }
    res.status(200).json(module);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateModule = async (req, res) => {
  try {
    const { title, description, courseId } = req.body;
    const module = await Module.findByPk(req.params.id);
    if (!module) {
      res.status(404).json({ error: 'Module not found' });
      return;
    }
    await module.update({ title, description, courseId });
    res.status(200).json(module);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteModule = async (req, res) => {
  try {
    const module = await Module.findByPk(req.params.id);
    if (!module) {
      res.status(404).json({ error: 'Module not found' });
      return;
    }
    await module.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
