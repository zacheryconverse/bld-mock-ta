const express = require('express'); // not sure what this does
const cors = require('cors') // where to find this? Express docs!!! ???

const app = express(); // not sure what this does

app.use(cors());
const port = 8080;

app.listen(port, () => console.log(`Server is running on port ${port}`));
// why did Cow List open in 3000/3001 ??? difference between client server and server server??

/*
- Create a RESTful API for a resource named cows that responds to the following endpoints:
  GET - request url: - /api/cows - read all cow data - NO request body
  POST - /api/cows - create new cow data - request(AND RESP!) body: {name: 'Milkshake', description: '...'} - creates now record in database
-- Your web server should 100% be interfacing with a database for this phase. Confirm this functionality is working properly with Postman
 */