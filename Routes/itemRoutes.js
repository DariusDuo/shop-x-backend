const express = require('express');
const ShopItem = require('../models/shopItem');
const router = express.Router();

// sukurti nauja item
router.post('/api/shop/items/new', (req, res) => {
  console.log(req.body);

  const newItemData = {
    title: 'Feather Slim Fit Denim Jeans',

    price: 1299.95,

    salePrice: 999.9,

    image: 'denim_01_',

    color: 'indigo',

    sizeQty: [
      { size: 'small', quantity: 7 },

      { size: 'medium', quantity: 7 },

      { size: 'large', quantity: 7 },
    ],

    images: [1, 2, 3],

    sku: '01',

    category: '60e5f1611373aa3612958d36',
  };
  const newItem = new ShopItem(newItemData);

  newItem
    .save()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

// gauti visus items

// gauti single item

module.exports = router;
