const express = require('express');
const router = express.Router();
const { getProducts } = require('../services/services');

router.get('/:companyname/:categoryname/products', async (req, res) => {
  try {
    const { companyname, categoryname} = req.params;
    let { minPrice, maxPrice ,top} = req.query;

    const products = await getProducts(companyname, categoryname, top, minPrice, maxPrice);

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
