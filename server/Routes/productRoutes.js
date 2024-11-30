import express from 'express';
import con from '../lib/db.js'; 


const router = express.Router();
// POST route to add a product
router.post("/", (req, res) => {
    const q = `INSERT INTO product (name, description, price, stock_quantity, category_id, SKU, image) VALUES (?)`
    
    const values = [
        req.body.name,
        req.body.description,
        req.body.price,
        req.body.stock_quantity,
        req.body.category_id,
        
    ]

    con.query(q, [values], (err,data) => {
        if (err) return res.json(err);
        return res.json("Product has been created successfully")
    })
});



export { router as ProductRouter };
