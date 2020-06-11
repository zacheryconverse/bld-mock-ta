const express = require('express');
const cors = require('cors');
const bp = require('body-parser');
const db = require('./db/db');
const app = express();
const port = 8080;

app.use(cors());

app.use(bp.json());
app.use(bp.urlencoded({extended: true}))

// post a cow ***
    // this only sends a successful post request. It does not create a new cow
// app.post('/cows', (req, res) => {
//     res.send(req.body)
// })

app.post('/api/cows', (req, res) => {
    db.createCow(req.body)
    .then(() => {
        // console.log()
        res.sendStatus(201);
    })
    .catch(err => err)
})

// app.post('/cows', (req, res) => {
//     Cow.save(err => {
//         if (err) throw ('err');
//         res.send();
//     });
// });

// get all cows ***
// app.get('/cows', (req, res) => {
//     res.send(req.body)
// })

app.get('/api/cows', (req, res) => {
    // Cow.find((err, cows) => {
    //     if (err) throw ('err');
    //     .then(cow => res.send(cow))
        // res.send();
        // });
    db.findAll(req.body)
    .then(data => res.send(data))
    .catch(err => err)
});

app.listen(port, () => console.log(`Server is running on port ${port}`));