const express = require('express');
const { Mongoose } = require('mongoose');
const Meal = require('../models/Meals');

const router = express.Router();

router.get('/',(req,res)=>{
    Meal.find({}).exec().then(x=> res.status(200).send(x))
  
});

router.get('/:id',(req, res)=>{
    Meal.findById(req.params.id)
        .exec()
        .then(x => res.status(200).send(x))
});

router.post('/',(req,res)=>{
    /*
    const meal = req.body;
    if(!(meal.name && meal.NotaDecs)){  // nos da este error si la nota a crear carece de "content" and "important"
        return res.status(400).json({
          error: 'note content is missing... (falta el contenido de la nota...)'
        })
      }

    const newMeal = new Meal({
        name: meal.name,
        NotaDecs: meal.NotaDecs
    })
    newMeal.save()
       .then(savedMeal=>{
           res.json(savedMeal)
       })
    */

    Meal.create(req.body).then(x => res.status(201).send(x))  // es un poco mas corto que el primero ver en el futuro los pro y contras
    
});

router.put('/:id',(req,res)=>{
  /*
  Meal.findOneAndUpdate(req.params.id, req.body) // con esto se elimina no en forma selectiva si no se empieza a eliminar
    .then(() => res.sendStatus(204))             //// desde el primer termina en la tabla en la base de datos.
  */

  const {id} = req.params;
  const meal = req.body;     // sacamos la info del pedido con la nueva nota a remplazar 

  const newMealInfo ={    ///creamos la nueva nota  que remplazara a la indicada. 
    name: meal.name,
    NotaDecs: meal.NotaDecs
  }
  Meal.findByIdAndUpdate(id,newMealInfo, {new: true})
    .then(result =>{
        res.json(result); // nos devuelve la nueva nota cargada.

    })
    
});

router.delete('/:id',(req,res)=>{
    /*
    Meal.findOneAndDelete(req.params.id).exec() // con esto se elimina no en forma selectiva si no se empieza a eliminar 
        .then(()=> res.sendStatus(204))         // desde el primer termina en la tabla en la base de datos.
    */
    
    const {id} = req.params;
    Meal.findByIdAndRemove(id).exec().then(() => res.sendStatus(204).end())
    
});

module.exports = router