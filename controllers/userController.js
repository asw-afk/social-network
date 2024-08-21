const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

module.exports = {
  async getUser(req, res) {
    try {
      const users = await User.find().select("-__v");

      console.log("Getting users");
      return res.json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select("-__v")
        .lean();

      if (!user) {
        return res.status(404).json({ message: "no User with that id found" });
      }

      res.json({
        user,
        // Thought: await Thought(req.params.userId),
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });
      console.log("Deleting user");

      if (!user) {
        return res.status(404).json({ message: "No user found" });
      }

    

      res.json({ message: "User successfully deleted " });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async addThought(req, res) {
    try {
      console.log("You are thinking your thought");
      console.log(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { thought: req.body } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: "No user found with that id :(" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async removeThought(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { thought: { thoughtId: req.params.thoughtId } } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "No user found with that id " });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
