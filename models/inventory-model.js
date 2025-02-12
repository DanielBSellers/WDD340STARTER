const pool = require("../database/")

/* ***************************
 *  Get all classification data
 * ************************** */
async function getClassifications(){
  return await pool.query("SELECT * FROM public.classification ORDER BY classification_name")
}

/* ***************************
 *  Get all inventory items and classification_name by classification_id
 * ************************** */
async function getInventoryByClassificationId(classificationId) {
  try {
    const sql = "SELECT * FROM inventory WHERE classification_id = $1";
    const data = await pool.query(sql, [classificationId]);
    return data.rows;
  } catch (error) {
    console.error("Error fetching inventory:", error);
    return null;
  }
}

async function getVehicleById(vehicleId) {
  try {
    const sql = "SELECT * FROM inventory WHERE inv_id = $1";
    const data = await pool.query(sql, [vehicleId]);
    return data.rows[0];
  } catch (error) {
    console.error("Error fetching vehicle details:", error);
    return null;
  }
}


module.exports = {getInventoryByClassificationId,getClassifications, getVehicleById};