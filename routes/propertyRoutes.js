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

router.post("/", protect, addProperty);

router.put("/:id", protect, updateProperty);

router.delete("/:id", protect, deleteProperty);

module.exports = router;