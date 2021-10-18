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


///////////////////////*   CREATE project *//////////////
projectsRoutes.post('/projects',(req, res)=>{

  const {title, subtitle, imgUrl, linkUrl, tech, fonctionalite, description} = req.body;
  Project.create({
    title,
    subtitle,
    imgUrl,
    linkUrl,
    tech,
    fonctionalite,
    description
  })
  .then(newProject => {
    res.status(201).json(newProject);
  })
  .catch(err => {
    res.status(400).json({message:err});
  })
})


///////////////////////*  GET project détail *//////////////
projectsRoutes.get('/projects/:id', (req, res) => {
  Project.findById(req.params.id)
  .then(project => {
    res.status(200).json(project);
  })
  .catch(err => {
    res.status(400).json({message:err})
  })
})




module.exports = projectsRoutes;
