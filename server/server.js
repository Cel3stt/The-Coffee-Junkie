const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
const cors = require('cors')

// --------------------- Database connection ---------------------

mongoose
  .connect(
    "mongodb+srv://CelestJerez:TCJSPWDd7JbAXveBAG02024@tcjecommercecluster.lz123.mongodb.net/"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
    cors({
        origin: 'http://localhost:5173/',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders:[
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        credentials : true
    })
);

app.use(cookieParser());
app.use(express.json())

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))