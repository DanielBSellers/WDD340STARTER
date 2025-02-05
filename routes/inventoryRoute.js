// Needed Resources 
const express = require("express")
const router = express.Router() 
const utilities = require("../utilities")
const invController = require("../controllers/invController")

if (!invController.buildInventory) {
    console.error("This page isn't working. It's not you.  It's me");
  }

// Route to build inventory by classification view
router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));

//Inventory route
router.get("/detail/:vehicleId", utilities.handleErrors(invController.buildByVehicleId));

// Route to render the inventory page
router.get("/", utilities.handleErrors(invController.buildInventory));

module.exports = router;