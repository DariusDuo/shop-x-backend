const express = require('express');
const { populate } = require('../models/shopItem');
const ShopItem = require('../models/shopItem');
const router = express.Router();

// sukurti nauja item
router.post('/api/shop/items/new', (req, res) => {
  console.log(req.body);

  const newItemData = {
    title: 'Autum best',
    price: 299.99,
    image: 'foot_autum_01_',
    color: 'green',
    size: 'normal',
    sizeQty: [
      { size: 'small', quantity: 3 },
      { size: 'medium', quantity: 3 },
      { size: 'large', quantity: 3 },
    ],
    images: [1, 2, 3, 4],
    sku: 'autum_01',
    category: '60e5f1741373aa3612958d38',
  };
  const newItem = new ShopItem(newItemData);

  newItem
    .save()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

// gauti visus items
router.get('/api/shop/items', async (req, res) => {
  try {
    const items = await ShopItem.find().populate('category');
    res.json(items);
  } catch (err) {
    res.status(500).json('internal error');
  }
});

// gauti single item
router.get('/api/shop/items/:id', async (req, res) => {
  try {
    const item = await ShopItem.findById(req.params.id);
    res.json(item);
  } catch (err) {
    res.status(500).json('internal error');
  }
});

module.exports = router;
