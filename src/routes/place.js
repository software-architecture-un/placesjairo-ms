let express = require('express');
let router = express.Router();

//QuerySring => query property on the request object 
//Localhost:3000/place?name=aldana&calificacion=10 
router.get('/place', (req, res) => {
    if(req.query.name){
        res.send(`Tu estas solicitando un lugar: ${req.query.name}`);
    }else{
        res.send('Tu estas solicitando un lugar');
    }    
});

//Params propertyon the request object
//Localhost:3000/place/aldana
router.get('/place/:name', (req, res) => {
    res.send(`Tu estas solicitando un lugar: ${req.params.name}`);
});

router.get('/error', (req, res)=>{
    throw new Error('This is a forced error.');
});
module.exports = router; 