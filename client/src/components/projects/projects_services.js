/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

export default {
  service : axios.create({
    baseURL: "http://localhost:5000",
    withCredentials:true
  }),

  getProjects(){
    return this.service.get('/projects')
    .then(allProjects => allProjects.data)
  },

  getProject(id){
    return this.service.get(`/projects/${id}`)
    .then(project => project.data)
  }
}