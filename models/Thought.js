const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            reguired: true, 
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.Now
        },
        username: {
            type: 'Username',
            ref: 'User'
        },
        reactions:[reactionSchema],
    },
)


module.exports = User;