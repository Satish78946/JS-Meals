import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [newMeal, setNewMeal] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/meals')
      .then(response => setMeals(response.data))
      .catch(error => console.error(error));
  }, []);

  const addMeal = () => {
    axios.post('http://localhost:5000/meals', newMeal)
      .then(response => setMeals([...meals, response.data]))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>JS Meals</h1>
      <div>
        <h2>Add a new meal</h2>
        <input
          type="text"
          placeholder="Name"
          value={newMeal.name}
          onChange={(e) => setNewMeal({ ...newMeal, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMeal.description}
          onChange={(e) => setNewMeal({ ...newMeal, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newMeal.price}
          onChange={(e) => setNewMeal({ ...newMeal, price: e.target.value })}
        />
        <button onClick={addMeal}>Add Meal</button>
      </div>
      <div>
        <h2>Meal List</h2>
        <ul>
          {meals.map(meal => (
            <li key={meal._id}>
              <h3>{meal.name}</h3>
              <p>{meal.description}</p>
              <p>${meal.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
