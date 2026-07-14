const Property = require("../models/Property");

// Get all properties
const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get property by ID
const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    res.json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add property
const addProperty = async (req, res) => {
  try {
    const property = new Property({
      title: req.body.title,
      price: req.body.price,
      location: req.body.location,
    });

    const savedProperty = await property.save();

    res.status(201).json({
      message: "Property added successfully",
      property: savedProperty,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update property
const updateProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    res.json({
      message: "Property updated successfully",
      property,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete property
const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    res.json({
      message: "Property deleted successfully",
      property,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllProperties,
  getPropertyById,
  addProperty,
  updateProperty,
  deleteProperty,
};