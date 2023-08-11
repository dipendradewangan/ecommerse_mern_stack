const express = require('express');
const productRouter = require('./routes/productRoutes');
const app = express();

app.use(express.json())
app.use("/", productRouter);


module.exports = app;