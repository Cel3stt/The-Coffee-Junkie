const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: ''
    },
    brand: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0,
      min: 0
    },
    sku: {
      type: String,
      sparse: true,  
      default: null,
      match: /^[a-zA-Z0-9-]+$/, 
      maxlength: 20,           
      trim: true              
    },
    lowStockThreshold: {
      type: Number,
      sparse: true,
      default: null
    },
    salePrice: {
      type: Number,
      sparse: true,
      default: null
    },
    totalStock: {
      type: Number,
      default: 0,
      min: 0
    },
    features: {
      type: [String],
      default: []
    },
    warrantyPeriod: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: 'draft'
    },
    color: {
      type: String,
      default: 'draft'
    },
    averageReview: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', ProductSchema);
