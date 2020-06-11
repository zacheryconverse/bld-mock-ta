const mongoose = require('mongoose');
const url = 'mongodb://localhost/cows';
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const cowSchema = new mongoose.Schema({
    name: String,
    description: String
});

const Cow = mongoose.model('Cow', cowSchema);

const createCow = cow => {
    const newCow = new Cow(cow);

    return newCow
        .save()
        .then(() => true)
        .catch(err => err);
};

const findAll = () => {
    return Cow.find()
    .then(data => {
        return data;
    })
    .catch(err => err);
};

module.exports = {
    createCow,
    findAll
};

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => console.log('Connected to db'));
// db.once('open', () => {
//     const cowSchema = new mongoose.Schema({
//         name: String,
//         description: String
//     });

//     const Cow = mongoose.model('Cow', cowSchema);

//     const buttercup = new Cow({name: 'Buttercup', description: 'a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock.'});
//     console.log(buttercup.name);
//     // buttercup.save((err) => {
//     //     if (err) console.error(err);
//     //     console.log('hi');
//     // });
//     Cow.find((err, cows) => {
//         if (err) console.error(err);
//         console.log(cows);
//     })
//     Cow.find({name: /^butter/ }, (err) => {
//         if (err) console.log(err);
//         console.log('bye');
//     });
// });

