const Inventory = require('../../models/Inventory');
const express = require('express');
const router = express.Router();

//find all inventory 
router.get('/', (req, res) => {
    Inventory.find({})
      .then(inventory => res.json(inventory));
});
  
//add inventory
router.post('/', (req, res) => {
    Inventory
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(500).json(err));
});

router.put('/:id', (req, res) => {
    Inventory
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
    Inventory
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
    Inventory
        .findById({ _id: req.params.id })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(500).json(err));
});
module.exports = router;
