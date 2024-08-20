const { User, Thought} = require('../models');


module.exports = {

    async getThought( req, res) {
        try {
            const thoughts = await Thought.find({})
                .select('-__v');
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleThought(req, res) {
      try{
        const thought = await Thought.findOne({ _id: req.params.thoughtId})
        .select('-__v');

         !tag
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.json(thought)           

        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createThought(req,res) {
        try {
            const thought = await Thought.create(req.res);
            res.json(thought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(er);
        }
    },

    async deleteThought (req, res) {
        try{
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId});
        if ( !thought ) {
            return res.status(404).json({ message: 'No thought with that ID, head empty'});

        }

        await User.deleteMany({ _id: {$in: User.thought} });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateThought( req, res) {
        try {
            const thought = await Thought.findOneAndUpate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true}
            );

            if (!thought);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};