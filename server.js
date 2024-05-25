const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/jsmeals', { useNewUrlParser: true, useUnifiedTopology: true });

const MealSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const Meal = mongoose.model('Meal', MealSchema);

// Routes
app.get('/meals', async (req, res) => {
  const meals = await Meal.find();
  res.json(meals);
});

app.post('/meals', async (req, res) => {
  const newMeal = new Meal(req.body);
  await newMeal.save();
  res.json(newMeal);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
