const mongoose = require('mongoose')
const dbURL = process.env.DATABASE_URL


async function dbInit(){
    await mongoose.connect (dbURL)
}

module.exports ={
    dbInit
}
