const express = require('express')

const InventoryCtrl = require('../../client/controllers/inventoryController');

const router = express.Router();

router.post('/inventory', InventoryCtrl.createInventory);
router.put('/inventory/:id', InventoryCtrl.updateInventory);
router.delete('/inventory/:id', InventoryCtrl.deleteInventory);
router.get('/inventory/:id', InventoryCtrl.getInventoryById);
router.get('/inventory', InventoryCtrl.getInventory);

module.exports = router; 