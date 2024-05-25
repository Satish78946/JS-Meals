document.addEventListener('DOMContentLoaded', () => {
    const mealForm = document.getElementById('meal-form');
    const mealList = document.getElementById('meal-list');

    const fetchMeals = async () => {
        const response = await fetch('/api/meals');
        const meals = await response.json();
        mealList.innerHTML = meals.map(meal => `
            <div class="meal">
                <h3>${meal.name}</h3>
                <p>${meal.description}</p>
                <p>Price: $${meal.price}</p>
            </div>
        `).join('');
    };

    mealForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;

        const response = await fetch('/api/meals', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, description, price })
        });

        if (response.ok) {
            fetchMeals();
            mealForm.reset();
        }
    });

    fetchMeals();
});
