const mongoose = require('mongoose');

const connectDb = ()=>{
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("Db is connected success fully")
    }).catch((error)=>{
        console.log(error)
    })
}



module.exports = connectDb;