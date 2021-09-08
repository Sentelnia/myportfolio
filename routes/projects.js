const express = require('express');
const projectsRoutes  = express.Router();

const Project = require('../models/Projects.model')


///////////////////////////////* GET all projects *////////////////////////////
projectsRoutes.get('/projects', (req, res, next) => {
  Project.find()
  .then(allProjectsFromDB => {
    res.status(200).json({allProjectsFromDB})
  })
  .catch(err => {
    res.status(400).json({message : err})
  })
});


module.exports = projectsRoutes;
