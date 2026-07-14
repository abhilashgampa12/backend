const express = require("express");
const router = express.Router();

const {
  getAllProperties,
  getPropertyById,
  addProperty,
  updateProperty,
  deleteProperty,
} = require("../controllers/propertyController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", getAllProperties);

router.get("/:id", getPropertyById);

router.post("/", addProperty);

router.put("/:id", updateProperty);

router.delete("/:id", deleteProperty);

module.exports = router;