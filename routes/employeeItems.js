const router = require("express").Router();
//import todo model
const employeeItemsModel = require("../models/employeeItems");

//create first route --add Todo Item to database
router.post("/api/item", async (req, res) => {
  try {
    const addEmployee = new employeeItemsModel({
      email: req.body.email,
      name: req.body.name,
      staffId: req.body.staffId,
    });
    //save this item in database
    const saveItem = await addEmployee.save();
    res.status(200).json(saveItem);
  } catch (err) {
    res.json(err);
  }
});

//create second route -- get data from database
router.get("/api/items", async (req, res) => {
  try {
    const allEmployees = await employeeItemsModel.find({});
    res.status(200).json(allEmployees);
  } catch (err) {
    res.json(err);
  }
});

//update item
router.put("/api/item/:id", async (req, res) => {
  try {
    //find the item by its id and update it
    const updateEmployee = await employeeItemsModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body }
    );
    res.status(200).json(updateEmployee);
  } catch (err) {
    res.json(err);
  }
});

//Delete item from database
router.delete("/api/item/:id", async (req, res) => {
  try {
    //find the item by its id and delete it
    await employeeItemsModel.findByIdAndDelete(req.params.id);

    res.status(200).json("Employee Deleted");
  } catch (err) {
    res.json(err);
  }
});

//export router
module.exports = router;
