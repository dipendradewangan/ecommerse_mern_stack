const express = require('express');
const productRouter = require('./routes/productRoutes');
const userRouter = require("./routes/userRoutes");
const app = express();

app.use(express.json())
app.use("/api", productRouter);
app.use("/", userRouter)

// error middleware

app.use((err, req, res, next)=>{
    res.status(err.statusCode || 500).json({
        success : false,
        message : err.message || "Internal server error"
    })
})

module.exports = app;