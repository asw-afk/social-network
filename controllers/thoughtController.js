const { User, Thought} = require('../models');


module.exports = {

    async getThought( req, res) {
        try {
            const thoughts = await Thought.find({})
                .select('-__v;)');
            res.json(Thought);
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

    }


}