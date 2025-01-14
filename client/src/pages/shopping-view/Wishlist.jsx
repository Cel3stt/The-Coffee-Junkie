import React from 'react';
import { useSelector } from 'react-redux';

function WishlistPage() {
  const { wishlistItems } = useSelector((state) => state.shopWishlist);

  return (
    <div className="wishlist-page">
      <h1>Your Wishlist</h1>
      <ul>
        {Array.isArray(wishlistItems) && wishlistItems.length > 0 ? (
          wishlistItems.map(item => (
            <li key={item.productId}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <p>₱{item.price.toLocaleString()}</p>
            </li>
          ))
        ) : (
          <p>No items in your wishlist.</p>
        )}
      </ul>
    </div>
  );
}

export default WishlistPage;
