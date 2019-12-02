const mongoose = require('mongoose')
const mongoDB = 'mongodb://127.0.0.1/users'
mongoose.connect(mongoDB, { useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const schema = new mongoose.Schema({
  rowid: {type: Number, required: true, unique: true},
  pseudo: {type: String},
  firstname: {type: String},
  lastname: {type: String},
  email: {type: String},
  password: {type: String}
})

const user = mongoose.model('User', schema)

module.exports = {
  get: (userId) => {
    return await user.findOne({rowid: userId})
  },

  count: () => {
    return await user.count()
  },

  getAll: (limit, offset) => {
    return await user.find().skip(offset).limit(limit)
  },

  insert: (params) => {
    let id = await user.count()
    let add_user = new user({
      rowid: id,
      pseudo: params.pseudo,
      firstname: params.firstname,
      lastname: params.lastname,
      email: params.email,
      password: params.password
    })
    return await add_user.save()
  },

  update: (userId, params) => {
    let update_user = await user.findOne({rowid: userId})
    
    if(params.pseudo)
      update_user.pseudo = params.pseudo
    if(params.firstname)
      update_user.firstname = params.firstname
    if(params.lastname)
      update_user.lastname = params.lastname
    if(params.email)
      update_user.email = params.email
    if(params.password)
      update_user.password = params.password

    return await update_user.save()
  },

  remove: (userId) => {
    return await user.deleteOne({rowid: userId})
  }

}
