const mongoose = require('mongoose');
// make an endpoint with /cows ?? is this a third server???
// http://mongodb://localhost/cows
mongoose.connect('mongodb://localhost/cows', {useNewUrlParser: true, useUnifiedTopology: true});

const createCow = cowObject => {
  const cowSchema = new mongoose.Schema({
    name: String,
    description: String
  });

  const Cow = new mongoose.model('Cow', cowSchema);
  // if there are syntax errors in this function, it may seem like it's working, but actually not saving
  // anything but an empty object on the database. use postman and compass to verify -- and check syntax!!
  const newCow = new Cow(cowObject);

  newCow.save();

}

const findAllCows = () => {
  Cow.find((err, cows) => console.log(cows))
};





// const db = mongoose.connection;
// // db.on('open', () => console.log('connected to the db')
// db.on('open', () => {
//   const cowSchema = new mongoose.Schema({
//   name: String,
//   description: String
// });

// const Cow = mongoose.model('Cow', cowSchema);

// const bessie = new Cow({ name: 'Bessie', description: 'A cute cow'});
// console.log(bessie.name);

// bessie.save();
// })
// Cow.find((err, cows) => console.log(cows))

// cowSchema.methods.speak = () => {
//   const greeting = this.name
//   ? "Moo name is " + this.name
//   : "I don't have a name";
//   console.log(greeting);
// }

// var Cow = mongoose.model('Cow', cowSchema);

// });
// mongoose.save()
// query ?

// findAll
// function all(req) {

// }

// function newCow(req.body) {
  // save
  // if err
// }
//
module.exports = {
  createCow,
};