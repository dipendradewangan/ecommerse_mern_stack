const express = require('express');
const productRouter = require('./routes/productRoutes');
const userRouter = require("./routes/userRoutes");
const errorMiddleware = require('./middleware/error');
const app = express();

app.use(express.json())
app.use("/api", productRouter);
app.use("/api", userRouter)

// error middleware

app.use(errorMiddleware)

module.exports = app;