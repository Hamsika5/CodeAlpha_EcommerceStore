const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const productRoutes = require("./routes/productRoutes");

const app = express();

// Enable CORS
app.use(cors());

app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
console.log("MongoDB Connected");
})
.catch((err)=>{
console.log(err);
});

// Routes
app.get("/",(req,res)=>{
res.send("Backend Running");
});

app.use("/products", productRoutes);

// Start Server
app.listen(5000,()=>{
console.log("Server Started");
});


