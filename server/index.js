import express from 'express';
import cors from 'cors';
import { authRouter } from './Routes/authRoutes.js';
// import { ProductRouter } from './Routes/productRoutes.js';
import con from './lib/db.js';
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: ["http://localhost:5173"], // Your frontend URL
    methods: ["GET", "POST", "PUT"],
    credentials: true,
}));
app.use(express.json());

// Routes
app.use('/auth', authRouter)

// app.use('/products', ProductRouter);
app.post('/api/products', (req, res) => {
  const { name, description, price, stock_quantity, category_id, SKU, image, status, warranty_period, lowStock_Threshold } = req.body;

  if (!name || !description || !price || !stock_quantity || !category_id || !SKU || !image) {
      return res.status(400).json({ error: "All required fields must be provided." });
  }

  // Check for duplicate SKU
  const checkSkuQuery = `SELECT * FROM product WHERE SKU = ?`;
  con.query(checkSkuQuery, [SKU], (err, result) => {
      if (err) {
          console.error('Database Error:', err);
          return res.status(500).json({ error: 'Database error', details: err.message });
      }

      if (result.length > 0) {
          // SKU already exists
          return res.status(400).json({ error: `Product with SKU '${SKU}' already exists.` });
      }

      // If SKU does not exist, proceed with insertion
      const sql = `INSERT INTO product (name, description, price, stock_quantity, category_id, SKU, image, status, warranty_period, lowStock_Threshold) VALUES (?)`;
      const values = [
          name,
          description,
          price,
          stock_quantity,
          category_id,
          SKU,
          image,
          status || 'Available',
          warranty_period || 'None',
          lowStock_Threshold || 10,
      ];

      con.query(sql, [values], (err, data) => {
          if (err) {
              console.error('Database Error:', err);
              return res.status(500).json({ error: 'Database error', details: err.message });
          }
          return res.status(201).json({ message: 'Product has been created successfully', productId: data.insertId });
      });
  });
});



// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

