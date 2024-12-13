const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    image: null,
    title: String,
    description: String,
    category: String,
    brand: String,
    price: Number,
    sku: Number,
    lowStockThreshold: Number,
    salePrice: Number,
    totalStock: Number,
    features: String,
    warrantyPeriod: String,
    status: String,
    averageReview: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', ProductSchema)
