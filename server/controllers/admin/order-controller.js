const Order = require("../../models/Order");

const getAllOrdersOfAllUsers = async(req,res) => {
    try {
  
      const orders = await Order.find({ }) 
      if(!orders.length){
        return res.status(404).json({
          success : false,
          message : "No Orders Found"
        })
      }
  
      res.status(200).json({
        success : true,
        data: orders
      })
  
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Some error occured",
      });
    }
  }



const getOrderDetailsForAdmin= async(req,res) => {
  try {
    const {id} = req.params;

    const order = await Order.findById(id)
    if(!order){
      return res.status(404).json({
        success : false,
        message : "Order Not Found!"
      })
    }
    
    res.status(200).json({
      success : true,
      data: order
    })


  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
}

  module.exports = {getAllOrdersOfAllUsers, getOrderDetailsForAdmin} 