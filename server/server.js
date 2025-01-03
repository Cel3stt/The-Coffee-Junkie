const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
const cors = require('cors')
const authRouter = require('./routes/auth/auth-routes')
const adminProductRouter = require('./routes/admin/products-routes')
const shopProductRouter = require('./routes/shop/products-routes')
const shopCartRouter = require('./routes/shop/cart-routes')
const shopAddressRouter = require('./routes/shop/address-routes')

// --------------------- Database connection ---------------------

mongoose
  .connect(
    "mongodb+srv://CelestJerez:TCJSPWDd7JbAXveBAG02024@tcjecommercecluster.lz123.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
    cors({
        origin: 'http://localhost:5173', 
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
app.use('/api/auth', authRouter)
app.use('/api/admin/products', adminProductRouter)
app.use('/api/shop/products', shopProductRouter)
app.use('/api/shop/cart', shopCartRouter)
app.use('/api/shop/address', shopAddressRouter)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))