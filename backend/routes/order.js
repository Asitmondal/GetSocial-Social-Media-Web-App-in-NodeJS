const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const Order = require("../models/Order");
const { render } = require("ejs");

//Upadte Order
router.get("/updateorder", (req, res) => res.render("updateorder"));
// Add Order
router.get("/addorder", (req, res) => res.render("addorder"));
// Total order
router.get("/agentdash", async (req, res) => {
  try {
    const totalCouriers = await Order.countDocuments({});
    res.json({ total: totalCouriers });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});



router.post("/addorder", (req, res) => {
  const { pickupad,dropad } = req.body;
  const agentId = "6651b5a4da1b80436ea99401";
  const status="In"
  //const orderId = "6651cc75e7dfafff0466620a";
  ///console.log(pickupad, dropad, status);
  let errors = [];

  if (errors.length > 0) {
    res.render("addorder", {
      errors,
      agentId,
      pickupad,
      dropad,
      status,
    });
  } else {
    const newOrder = new Order({
      agentId,
      pickupad,
      dropad,
      status,
    }
    
  );
  newOrder.save();
   // console.log(newOrder);
    res.redirect("../dashboard");
  }
});


router.post("/updateorder", (req, res) => {
  const {  orderId, status } = req.body; 
  Order.findById({ _id:orderId }).then((order) => {
    //console.log(order, orderId);
    let errors = [];

    if (errors.length > 0) {
      errors,
    agentId,
  pickupad,
  dropad,
  status
    } else {
      const updaOrder = new Order({
        agentId: order.agentId,
        orderId: order.orderId,
        pickupad: order.pickupad,
        dropad: order.dropad,
        status:status
      });
      updaOrder.save();
      //console.log(updaOrder);
      res.redirect("../dashboard");
    }
  });

});

module.exports = router;
