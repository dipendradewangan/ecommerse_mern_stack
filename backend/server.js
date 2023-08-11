const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({path : 'backend/config/config.env'})
const connectDb = require('./config/database')

connectDb();


app.listen(process.env.PORT,()=>{
    console.log(`app is running on http://localhost:${process.env.PORT}`)
})