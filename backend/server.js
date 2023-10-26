const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/internData');
    console.log('db connected')
}
const dataSchema = new mongoose.Schema({
    category: String,
    country: String
});

const Data = mongoose.model('Data', dataSchema);


const server = express();

server.use(cors());
server.use(bodyParser.json());

// CRUD - Create
server.post('/internData', async (req, res) => {

    let data = new Data();
    data.category = req.body.category;
    data.country = req.body.country;
    const doc = await data.save();

    console.log(doc);
    res.json(doc);  // send back data(docs) to client side.
})

server.get('/internData', async (req, res) => {
    const docs = await Data.find({});
    res.json(docs)  // send back data(docs) to client side.
})


server.listen(8080, () => {
    console.log('server started')
})