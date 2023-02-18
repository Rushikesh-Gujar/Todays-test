// Add User API

const express = require("express");
const mongoose = require("mongoose");
const url = 'mongodb://localhost/AlienDBex'



router.post("/addUser", async(req, res) => {
    const { name, age, phoneNumber, location } = req.body;
    const user = new User({ name, age, phoneNumber, location });
    await user.save().then(() => res.send("User added successfully"));
});

module.exports = router;

// Get User API based on nearby geolocation coordinates

const express = require("express");
const mongoose = require("mongoose");




router.get("/getUserByLocation", async(req, res) => {
    const { lat, lng } = req.query;
    const userList = await User.find({
        location: {
            $near: {
                $maxDistance: 1000,
                $geometry: {
                    type: "Point",
                    coordinates: [parseFloat(lng), parseFloat(lat)],
                },
            },
        },
    });
    res.send(userList);
});

module.exports = router;

// Get User API based on partial matching name

const express = require("express");
const mongoose = require("mongoose");


router.get("/getUserByName", async(req, res) => {
    const { name } = req.query;
    const userList = await User.find({ name: { $regex: name, $options: "i" } });
    res.send(userList);
});

module.exports = router;

// Update User API

const express = require("express");
const mongoose = require("mongoose");


router.put("/updateUser", async(req, res) => {
    const { id, name, age, phoneNumber, location } = req.body;
    await User.findByIdAndUpdate(
        id, { name, age, phoneNumber, location }, { new: true }
    ).then(() => res.send("User updated successfully"));
});

module.exports = router;

// Delete User API

const express = require("express");
const mongoose = require("mongoose");
const User = mongoose.model("User");

const router = express.Router();

router.delete("/deleteUser", async(req, res) => {
    const { id } = req.query;
    await User.findByIdAndDelete(id).then(() => res.send("User deleted successfully"));
});

module.exports = router;