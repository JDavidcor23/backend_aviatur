const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const data = require('../data.json')

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(data);
});


router.post('/', (req, res) =>{
    const id = String(data.length + 1);
    const newHotel = {...req.body, id};
    data.push(newHotel)
    res.json(data);
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name,stars,price,image,amenities} = req.body;
    _.each(data, (d, i) => {
        if (d.id === id) {
            d.name = name;
            d.stars = stars;
            d.price = price;
            d.image = image;
            d.amenities = amenities;
        }
    })
    res.json(data);
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    _.each(data, (d, i) =>{
        if(d.id == id){
            data.splice(i,1)
        }
    })
    res.json(data);
});
module.exports = router;