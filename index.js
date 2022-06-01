const express = require('express');
const app = express();
const connectDB = require('./db/connect')
require('dotenv').config();
const productRoute = require('./routes/route')
const notFound = require('./middlewares/not-found')
const port = process.env.PORT;


const hostname = '0.0.0.0';
//middlewares
app.use(express.json());

//routes
app.use('/api/v1/products', productRoute)

app.use(notFound)

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on ${port}`))
    }

    catch(error){
        console.log(error);
    }
}

start();

