import express from "express";
import con from "../lib/db.js";
import jwt from "jsonwebtoken";
const router = express.Router();

router.post("/adminLogin", (req, res) => {
  const sql = "SELECT * from users WHERE email = ? and password = ?";
  
  // Check credentials
  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) {
      return res.status(500).json({ loginStatus: false, Error: "Database query error" });
    }

    if (result.length > 0) {
      const user = result[0]; // Matched user

      // Generate a token
      const token = jwt.sign(
        { role: "admin", email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      res.cookie("token", token);
      return res.json({ loginStatus: true, message: "Login successful" });
    } else {
      return res.json({ loginStatus: false, Error: "Wrong Email or Password" });
    }
  });

});

export { router as authRouter };
