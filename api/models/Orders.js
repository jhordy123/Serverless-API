//===============================================//
const mongoose = require('mongoose');
const  Schema = mongoose.Schema

const Order = mongoose.model('Order', new Schema({
    meal_id: {type: Schema.Types.ObjectId, ref:'Meals'},
    user_id: String
}))

module.exports = Order;


