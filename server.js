const express = require('express');

const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const colors = require('colors');
const connectDb = require('./config/connectDb');
const path = require('path');


//config dotenv file
dotenv.config();

//database call
// connectDb();

//rest object
const app = express();


//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


//routes

//user routes
app.use('/api/v1/users', require('./routes/userRoute'));

//transaction routes

app.use('/api/v1/transactions', require('./routes/transactionRoutes'))


//static files reaching to our frontend

app.use(express.static(path.join(__dirname, './client/build')));
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// app.get('/', (req, res)=>{
//     res.send("Hello from server");
// })

//PORT

const PORT = 3000 || process.env.PORT;

connectDb().then(() => {
    console.log("db connected");
    app.listen(PORT, ()=>{
        console.log(`Server running at port ${PORT}`);
    })
})

