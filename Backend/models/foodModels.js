const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    varients : [],
    prices : [],
    category :{
        types:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    }
},{timestamp:true}
);

const foodModel=mongoose.model('food',foodSchema);
module.exports = foodModel;
