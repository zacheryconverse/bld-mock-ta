const express = require('express'); // not sure what this does
const cors = require('cors') // where to find this? Express docs!!! ???
const app = express(); // not sure what this does
const bp = require('body-parser'); // or use res.json?
// when to use app.use(express.static(public/client)) ?? or res.sendFile() ??

res.end() ??
app.use(cors());
const port = 8080;
// get all -- find -- err handler
app.get('/api/cows', (req, res) => {
  .then(data => res.json(data))
  .then(data => res.send(data))
  .catch(err => err)
});
// create/save() status code 201 -- err handler
app.post('/api/cows', (req, res) => {
  .save()
  .then(() => )
  .catch(err = console.log(err)) // err => err ? console.err(err) ?
})

app.listen(port, () => console.log(`Server is running on port ${port}`));
// why did Cow List open in 3000/3001 ??? difference between client server and server server??

/*
- Create a RESTful API for a resource named cows that responds to the following endpoints:
  GET - request url: - /api/cows - read all cow data - NO request body
  POST - /api/cows - create new cow data - request(AND RESP!) body: {name: 'Milkshake', description: '...'} - creates now record in database
-- Your web server should 100% be interfacing with a database for this phase. Confirm this functionality is working properly with Postman
 */