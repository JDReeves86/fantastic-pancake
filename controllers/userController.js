// const router = require("express").Router();
const User = require("../models/user");

module.exports = {
  async getUsers(req, res) {
    try {
      const userData = await User.find({});

      !userData
        ? res.status(404).json({ message: "No users found!" })
        : res.status(200).json(userData);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async getSingleUser(req, res) {
    try {
      const userData = await User.findById(req.params.id);

      !userData
        ? res.status(404).json({ message: "No users found by that ID!" })
        : res.status(200).json(userData);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async createUser(req, res) {
    try {
      const userData = await User.create({
        username: req.body.username,
        email: req.body.email,
      });

      /* What is the difference between this syntax and the one above? */
      // const userData = await new User({
      //   username: req.body.username,
      //   email: req.body.email
      // })
      // userData.save()

      !userData
        ? res.status(404).json({ message: "No users found by that ID!" })
        : res.status(200).json(userData);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async editUser(req, res) {
    try {
      const userData = await User.findByIdAndUpdate(req.params.id, {
        username: req.body.username,
        email: req.body.email,
      });

      !userData
        ? res.status(404).json({ message: "No users found by that ID!" })
        : res.status(200).json(userData);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async deleteUser(req, res) {
    try {
      const userData = await User.findByIdAndDelete(req.params.id);

      !userData
        ? res.status(404).json({ message: "No users found by that ID!" })
        : res.status(200).json(userData);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async addFriend(req, res) {
    try {
      const userData = await User.findByIdAndUpdate(req.params.id, {
        $addToSet: { friends: req.params.friendID },
      });

      !userData
        ? res.status(404).json({ message: "No users found by that ID!" })
        : res.status(200).json(userData);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async deleteFriend(req, res) {
    try {
      const userData = await User.findByIdAndUpdate(req.params.id, {
        $pull: { friends: req.params.friendID },
      });

      !userData
        ? res.status(404).json({ message: "No users found by that ID!" })
        : res.status(200).json(userData);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};
