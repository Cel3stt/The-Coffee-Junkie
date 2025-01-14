const mongoose = require('mongoose');

const WishlistItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
});

const wishlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true, // Ensures one wishlist per user
  },
  items: [WishlistItemSchema],
});

module.exports = mongoose.model("Wishlist", wishlistSchema);
