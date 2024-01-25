const mongoose = require('mongoose');

const mongoURI = 'mongodb://FOODHUB:devendra143@ac-glmja1r-shard-00-00.72jyjvg.mongodb.net:27017,ac-glmja1r-shard-00-01.72jyjvg.mongodb.net:27017,ac-glmja1r-shard-00-02.72jyjvg.mongodb.net:27017/FOODHUB?ssl=true&replicaSet=atlas-cqsbbr-shard-0&authSource=admin&retryWrites=true&w=majority'


//const mongoURI = 'mongodb+srv://FOODHUB:devendra143@cluster0.72jyjvg.mongodb.net/?retryWrites=true&w=majority';
// const mongoURI = 'mongodb://FOODHUB:devendra143@ac-glmja1r-shard-00-00.72jyjvg.mongodb.net:27017,ac-glmja1r-shard-00-01.72jyjvg.mongodb.net:27017,ac-glmja1r-shard-00-02.72jyjvg.mongodb.net:27017/FOODHUB?ssl=true&replicaSet=atlas-cqsbbr-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("___", err)
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("food_category");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err);
                    else {
                        global.food_items = data;
                        global.foodCategory = catData;
                    }
                })
                // if(err) console.log(err);
                // else{ 
                //     global.food_items = data;
                //    // console.log(global.food_items)
                // }
            })
        }
    });

}

module.exports = mongoDB;


