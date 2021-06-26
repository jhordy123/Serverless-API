
const express = require("express") ; // importamos el pakete de express
const mongoose = require("mongoose");  //importamos el pakete de mongosse
const bodyParser = require("body-parser"); // importar body-parser
const cors = require("cors"); // importar el pakte de cors

var meals = require('./routes/meals');
var orders = require('./routes/orders');
const Note = require('./models/notes');


const app = express()   // nos retorna difeentes metodos , para usarlo cn app
app.use(express.json())  // app.use(express.json()) --> ojo con esto es casi similar .
app.use(cors())        

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology:true,})
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
         console.log('error connecting to MongoDB:', error.message)
    })
 // (1) para poder conectado con nuetra base de datos




app.get('/api/index',(req, res)=>{   // (/)--> que se ejecute en la raiz , tambien se puede poner "/api/index"  esto nos da la direcion del archivo que queremos debolver.
    
    Note.find({})
        .then(notes =>{
            res.json(notes)
            //console.log(notes)    //para verificar en la consola si las respuesta esta acorde con lo que esperamos
        })
    
})



//*con o aterior esperamos la paticion el ruta indicada por get
// Con lo siguiente usamos app.use() que nos da mas practicidad
//gracias a  clase express.Router para crear manejadores de rutas montables y modulares
//esto ya en cada sub directorio de router/meals o router/orders, donde se usa express.Router


app.use('/api/meals', meals);
app.use('/api/orders', orders);

module.exports = app ;




