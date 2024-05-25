const express = require('express');
const router = express.Router();
const Meal = require('../models/meal');

router.get('/', async (req, res) => {
    const meals = await Meal.findAll();
    res.json(meals);
});

router.post('/', async (req, res) => {
    const { name, description, price } = req.body;
    const newMeal = await Meal.create({ name, description, price });
    res.json(newMeal);
});

module.exports = router;
