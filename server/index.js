const express = require('express'); // not sure what this does
const cors = require('cors') // where to find this? Express docs!!! ???
const bp = require('body-parser');
const db = require('./db/db')

const app = express(); // not sure what this does
// res.json? -- use with bp.json()
// going to need to require db from filepath

// require path?
// when to use app.use(express.static(public/client)) ?? or res.sendFile() ??

// res.end() ??
// app.use(cors()); // when to include this??
app.use(bp.json());
const port = 8080;
// get all -- find -- err handler
// listening for get requests. get route
app.get('/api/cows', (req, res) => { // ajax axios fetch
  // send the response back to front end after it has been parsed and err handled
  console.log(res.body)
  // res.send('howdy')
  res.sendStatus(201);

  // res.send(data => res.body(data))
  // fetch('http://')
  // .then(data => res.json(data)) // app.use(bp.json()) ?
  // .then(data => res.send(data))
  // .catch(err => err)
});
// create/save() status code 201 -- err handler
app.post('/api/cows', (req, res) => { // app.post('/', (req, res) => {res.json(req.body);});
  // console.log(req.body)
  db.createCow(req.body) // don't forget to module.exports = {createCow} from db.js and require db here!
  res.send('hi there')
  // db.newCow(req.body)
  // .then(() => res.sendStatus(201))
  // .catch(err => err)
  // .save() // params?? body??
  // .then(() => ) // res.status(201)
  // .catch(err = console.log(err)) // err => err ? console.error(err) ? throw err ?
})

app.listen(port, () => console.log(`Server is running on port ${port}`));
// why did Cow List open in 3000/3001 ??? difference between client server and server server??

/*
- Create a RESTful API for a resource named cows that responds to the following endpoints:
  GET - request url: - /api/cows - read all cow data - NO request body
  POST - /api/cows - create new cow data - request(AND RESP!) body: {name: 'Milkshake', description: '...'} - creates now record in database
-- Your web server should 100% be interfacing with a database for this phase. Confirm this functionality is working properly with Postman

Client/Postman gives request from React utilizing index.html to server/index.js. Server routes (& parses) request to database.
Database takes request and uses a function to get/post/update/delete data on server and sends back a response to server/index.js.

Server sends (parses) response back to React which updates state/props and DOM
DOM html React state props components
Server cors express body-parser port app.use(db.json) app.get((req,res)params,body,send,status,err,db.func,.then()) app.post app.listen
mongoDB mongoose connect connection -- createStudent() = stuObj => { studentSchema = new mongoose.Schema({name: String})); --
Student = new mongoose.model('student', studentSchema) - newStudent = new Student(stuObj) - newStudent.save() - module.exports = {
createStudent} -

*/