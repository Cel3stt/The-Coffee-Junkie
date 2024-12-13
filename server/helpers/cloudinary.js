const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "thecoffeejunkiecloudinarykey",
  api_key: "542967767523922",
  api_secret: "X68xsX_VNxxqXnjdLMqdU1flWKY",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({storage})
module.exports = {upload, imageUploadUtil}
