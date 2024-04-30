const User = require("./userSchema");
// Create operation
const createData = async (req, res) => {
  try {
    const newData = new MyModel(req.body);
    await newData.save();
    res.status(201).json(newData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Fetch one data by ID
const getDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await MyModel.findById(id);
    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update operation
const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = await MyModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete operation
const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    await MyModel.findByIdAndDelete(id);
    res.json({ message: "Data deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// Fetch all data
const getAllData = async (req, res) => {
  try {
    const data = await MyModel.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Fetch users with regex match
const getUsersWithRegex = async (req, res) => {
  try {
    const { regex } = req.params;
    const REGEXP = new RegExp(regex, "i"); // 'i' flag for case-insensitive matching
    const users = await FinanceUser.find({ transactee: REGEXP });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllData,
  createData,
  getDataById,
  updateData,
  deleteData,
  getUsersWithRegex,
};
