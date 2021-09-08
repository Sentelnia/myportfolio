const mongoose = require('mongoose');
const {Schema}= mongoose;

const projectSchema = new Schema({
  title:{
    type :String,
  },
  imageUrl:{
    type : String,
  },
  linkUrl:{
    type: String,
  },
  tech: {
    type: Array,
  }
})

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;