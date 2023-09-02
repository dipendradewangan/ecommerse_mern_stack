const express = require('express');
const productRouter = require('./routes/productRoutes');
const userRouter = require("./routes/userRoutes");
const errorMiddleware = require('./middleware/error');
const cookieParser = require("cookie-parser")
const app = express();


// middlewares
app.use(cookieParser());
app.use(express.json())


// routes
app.use("/api", productRouter);
app.use("/api", userRouter)

// error middleware

app.use(errorMiddleware)

module.exports = app;