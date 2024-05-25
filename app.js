const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mealRoutes = require('./routes/meals');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api/meals', mealRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
