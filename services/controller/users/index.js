const User = require('../../model/users');

let users = [
    {
        "userId": 1,
        "id": 1,
        "name": "John",
        "role": "Admin"
    },
    {
        "userId": 2,
        "id": 2,
        "name": "Jack",
        "role": "Admin"
    },
];

module.exports = {
    index(req, res) {
        User.getUsers((err, users) => {
            if (err) {
                res.send(err);
            }
            res.json(users);
        });
    },
    get(req, res) {
        let { id } = req.params;
        User.getUserById(id, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    },
    create(req, res) {
        User.addUser(req.body.data, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
};  