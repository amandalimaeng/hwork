const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  bio: String,
  avatar: {
    type: String,
    required: true,
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'Dev',
  }],
  tecnologias:{
    type:String,
  },
  tecnologiasArray: [{
    type: String
    
  }],
}, {
  timestamps: true,
});

module.exports = model('Dev', DevSchema);
