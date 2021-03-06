const mongoose = require('mongoose');
const {Schema}= mongoose;

const projectSchema = new Schema({
  title:{
    type :String
  },
  subtitle:{
    type :String
  },
  imgUrl:{
    type : String
  },
  linkUrl:{
    type: String
  },
  tech: {
    type: Array
  },
  fonctionalite: {
    type: Array
  },
  description:{
    type: String
  }},
  {timestamps:true
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;