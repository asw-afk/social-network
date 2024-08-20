const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        
    },
    thoughts:[
        {
            type: Schema.Types.ObjectId,
            ref: 'thoughts'
        }  
    ],
    // friends: [
    //        {
    //            _id: friends, 
    //            ref: 'friendSchema'

    //        }
    // ]
    });

//create virtual for friend count 
// friendSchema
// .virtual('getFriendCount')
// .get(function () {
//     return this.friends.length
// });

// const Friend = model('friend', friendSchema)

const User = model('user', userSchema);

module.exports = User;