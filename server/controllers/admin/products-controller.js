const { imageUploadUtil } = require("../../helpers/cloudinary");
const Product = require("../../models/Product");

const handleImageUpload = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const url = "data:" + req.file.mimetype + ";base64," + b64;
    const result = await imageUploadUtil(url);
    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error occured",
    });
  }
};

// ==================================================
// Add new product
// ==================================================

const addProduct = async (req, res) => {
  try {
    console.log('Incoming data:', req.body);

    const {
      image,
      title,
      description,
      category,
      brand,
      price,
      sku,
  
      salePrice,
      totalStock,
      features,
      warrantyPeriod,
      status,
      averageReview,
    } = req.body;

    // Helper function to safely convert to number
    const safeNumber = (value, defaultValue = null) => {
      if (value === '' || value === undefined || value === null) return defaultValue;
      const num = Number(value);
      return isNaN(num) ? defaultValue : num;
    };

    const productData = {
      image: image || '',
      title: title || '',
      description: description || '',
      category: category || '',
      brand: brand || '',
      price: safeNumber(price, 0),
      sku: safeNumber(sku, null),  // Allow null for SKU if invalid
      salePrice: safeNumber(salePrice, null),
      totalStock: safeNumber(totalStock, 0),
      features: Array.isArray(features) ? features : [],
      warrantyPeriod: warrantyPeriod || '',
      status: status || 'draft',
      averageReview: safeNumber(averageReview, 0)
    };

    console.log('Processed data:', productData);

    // Validate required fields
    if (!productData.title) {
      return res.status(400).json({
        success: false,
        message: 'Title is required'
      });
    }

    const newlyCreatedProduct = new Product(productData);
    const savedProduct = await newlyCreatedProduct.save();

    res.status(201).json({
      success: true,
      data: savedProduct
    });

  } catch (error) {
    console.error('Error details:', {
      message: error.message,
      errors: error.errors,
      stack: error.stack
    });

    res.status(500).json({
      success: false,
      message: "Failed to add product",
      error: error.message
    });
  }
};

// ==================================================
// Fetch product
// ==================================================
const fetchAllProducts = async (req, res) => {
  try {
    const listOfProducts = await Product.find({});
    res.status(200).json({
      success: true,
      data: listOfProducts,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error Occured",
    });
  }
};

// ==================================================
// Edit product
// ==================================================
const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      image,
      title,
      description,
      category,
      brand,
      price,
      sku,

      salePrice,
      totalStock,
      features,
      warrantyPeriod,
      status,
      averageReview,
    } = req.body;

    const findProduct = await Product.findById(id);
    if (!findProduct)
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });

    findProduct.image = image || findProduct.image;
    findProduct.title = title || findProduct.title;
    findProduct.description = description || findProduct.description;
    findProduct.category = category || findProduct.category;
    findProduct.brand = brand || findProduct.brand;
    findProduct.price = price === '' ? 0 : price|| findProduct.price;
    findProduct.sku = sku || findProduct.sku;
    
    findProduct.salePrice = salePrice === '' ? 0 : salePrice || findProduct.salePrice;
    findProduct.totalStock = totalStock || findProduct.totalStock;
    findProduct.features = features || findProduct.features;
    findProduct.warrantyPeriod = warrantyPeriod || findProduct.warrantyPeriod;
    findProduct.status = status || findProduct.status;
    findProduct.averageReview = averageReview || findProduct.averageReview;

    await findProduct.save()
    res.status(200).json({
        status : true,
        data : findProduct
    })
  }

 
   catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error Occured",
    });
  }
};

// ==================================================
// Delete product
// ==================================================
const deleteProduct = async (req, res) => {
  try {

    const {id} = req.params
    const product = await Product.findByIdAndDelete(id)

    if (!product)
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });

        res.status(200).json({
            success : true,
            message : 'Product deleted successfully'
        })
  
  } 
  catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error Occured",
    });
  }
};

module.exports = {
  handleImageUpload,
  addProduct,
  fetchAllProducts,
  editProduct,
  deleteProduct,
};
