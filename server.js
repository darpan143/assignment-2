const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const productRoutes = require('./routes/product');

const app = express();

connectDB();

// middleware
app.use(bodyParser.json());

// Router
app.use('/api', productRoutes);

app.get('/', (req, res) => {
    res.send({'message':'Welcome to DressStore application.'});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));