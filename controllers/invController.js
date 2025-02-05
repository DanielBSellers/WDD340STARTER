const invModel = require("../models/inventory-model");
const invController = {};
const utilities = require("../utilities/");

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invController.buildByClassificationId = async function (req, res, next) {
  try {
    const classificationId = req.params.classificationId;
    console.log("Classification ID:", classificationId);
    console.log("test");
    let nav = await utilities.getNav();
    const vehicleData = await invModel.getInventoryByClassificationId(classificationId);
    
    if (!vehicleData || vehicleData.length === 0) {
      throw new Error("Sorry. We don't have that vehicle.");
    }
    res.render("inventory/classification", {
      title: "Inventory by Classification",
      nav,
      vehicles: vehicleData,
    });
  } catch (err) {
    next(err);
  }
};

/* ***************************
 *  Build the inventory home page
 * ************************** */
invController.buildInventory = async function (req, res, next) {
  try {
    let nav = await utilities.getNav();
    res.render("inventory/inventory", {
      title: "Inventory",
      nav,
      message: "Welcome to the Inventory Page",
    });
  } catch (err) {
    next(err);
  }
};

/* ***************************
 *  Build vehicle detail view
 * ************************** */
invController.buildByVehicleId = async function (req, res, next) {
  try {
    const vehicleId = req.params.vehicleId;
    let nav = await utilities.getNav();
    const vehicle = await invModel.getVehicleById(vehicleId);
    if (!vehicle) {
      throw new Error("Vehicle not found.");
    }
    res.render("inventory/detail", {
      title: `${vehicle.inv_make} ${vehicle.inv_model}`,
      nav,
      vehicle,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = invController;