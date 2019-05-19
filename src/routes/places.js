let PlacesModel = require('../models/places_model');
let express = require('express');
let router = express.Router();

//Create a new place
//POST localhost:3000/places
router.post('/places', (req, res) => {
    if(!req.body){
        return res.status(400).send('El cuerpo de la solicitud esta vacio');
    }

    let model = new PlacesModel(req.body);
    model.save()
        .then(doc => {
            if(!doc || doc.length ===0){
                return res.status(500).send(doc);
            } 
            res.status(201).send(doc);           
        })
        .catch(err => {
            res.status(500).json(err);
        })

});

//GET
router.get('/places', (req, res) => {

    if(!req.query.name){
        return res.status(400).send('parámetro url faltante : name'); 
    }

    PlacesModel.findOne({
        name: req.query.name
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err);
    })
});
/*
router.get((req, res) => {
    
    PlacesModel.find({
        name: req.query
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err);
    })
});*/

//UPDATE
router.put('/places', (req, res) => {

    if(!req.query.name){
        return res.status(400).send('parámetro url faltante : name'); 
    }

    PlacesModel.findOneAndUpdate({
        name: req.query.name
    }, req.body, {
        new: true
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

//DELETE
router.delete('/places', (req, res) => {

    if(!req.query.name){
        return res.status(400).send('parámetro url faltante : name'); 
    }

    PlacesModel.findOneAndRemove({
        name: req.query.name
    })

    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

module.exports = router; 