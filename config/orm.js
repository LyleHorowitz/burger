var connection = require('./connection.js');


var orm = {

    allBurgers: function(callback) {
        var s = 'SELECT id, burger_name, devoured, time FROM burgers ORDER BY time desc';
        connection.query(s, function(err, allBurgersData) {
            if (err) {
                throw err;
            }
            callback(allBurgersData)
        });
    },

    addBurger: function(newBurger, callback) {
        var s = 'INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)';
        connection.query(s, [newBurger, 0], function(err, result) {
            if (err) {
                throw err;
            }
            console.log("inserted");
            callback();
        });
    },

    eatBurger: function(burgerId, callback) {
        var s = 'UPDATE burgers SET devoured=1 WHERE id = ?';
        connection.query(s, [burgerId], function(err, result) {
            if (err) {
                throw err;
            }
            console.log("deleted " + burgerId);
            callback();
        })
    }
};
module.exports = orm;