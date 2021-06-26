const { Mongoose } = require("mongoose")

//const Schema = mongoose.Schema
//const model = mongoose.model  // estos dos ultimos es identico a la definicion de la linea que siga a continuacion

const {Schema,model} = require("mongoose")


const noteSchema = new Schema({
    content: String,
    date: Date,
    important: Boolean
})

noteSchema.set('toJSON',{
    transform :(document,returnedObject)=>{
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Note = model('Note',noteSchema) // crea una instacia de este modelo.


module.exports = Note 