const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://FOODHUB:devendra143@cluster0.72jyjvg.mongodb.net/?retryWrites=true&w=majority'
const mongoDB =async() =>{
   await mongoose.connect(mongoURI, { useNewUrlParser: true}, (err,result)=>{
    if(err) console.log("___",err)
    else{
        console.log("connected");
    }
    });
    
}

module.exports = mongoDB;


