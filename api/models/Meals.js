//===============================================//
const mongoose = require('mongoose');
const {Schema, model} = mongoose.Schema

/*
const Meals = mongoose.model('Meal', new Schema({
    name: String,
    desc: String
}))

module.exports = Meals;

*/

/* OTRO METODO SIMILAR...*/

var NoteMeals = new mongoose.Schema({
    name: String,
    NotaDecs: String,
})

const Meal = mongoose.model('Meal',NoteMeals)

module.exports = Meal

