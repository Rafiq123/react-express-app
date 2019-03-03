const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

//get User List
module.exports.getUsers = function (callBack, limit) {
    User.find(callBack).limit(limit)
};

//get User by Id
module.exports.getUserById = function (id, callBack, limit) {
    User.findById(id, callBack).limit(limit)
};

module.exports.addUser = function (user, callBack) {
    User.create(user, callBack);
};