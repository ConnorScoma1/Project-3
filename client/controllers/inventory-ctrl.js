const Inventory = require('../../models/Inventory')

const createInventory = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must enter in some Inventory',
        })
    }

    const inventory = new Inventory(body)

    if (!Inventory) {
        return res.status(400).json({ success: false })
    }

    inventory
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: inventory._id,
                message: 'Inventory created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Inventory not created!',
            })
        })
}

const updateInventory = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide information to update',
        })
    }

  Inventory.findOne({ _id: req.params.id }, (err, inventory) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Inventory not found!',
      });
    };
    inventory.productName = body.productName
    inventory.productType = body.productType
    inventory.description = body.description
    inventory.quantity = body.quantity
      
    inventory
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: inventory._id,
          message: 'Inventory updated!',
        });
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Inventory not updated!',
        });
      });
  });
}

const deleteInventory = async (req, res) => {
    await Inventory.findOneAndDelete({ _id: req.params.id }, (err, inventory) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!inventory) {
            return res
                .status(404)
                .json({ success: false, error: `Inventory not found` })
        }

        return res.status(200).json({ success: true, data: inventory })
    }).catch(err => console.log(err))
}

const getInventoryById = async (req, res) => {
    await Inventory.findOne({ _id: req.params.id }, (err, inventory) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!inventory) {
            return res
                .status(404)
                .json({ success: false, error: `Inventory not found` })
        }
        return res.status(200).json({ success: true, data: inventory })
    }).catch(err => console.log(err))
}

const getInventory = async (req, res) => {
    await Inventory.find({}, (err, inventory) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!inventory.length) {
            return res
                .status(404)
                .json({ success: false, error: `Inventory not found` })
        }
        return res.status(200).json({ success: true, data: inventory })
    }).catch(err => console.log(err))
}

module.exports = {
    createInventory,
    updateInventory,
    deleteInventory,
    getInventory,
    getInventoryById,
}