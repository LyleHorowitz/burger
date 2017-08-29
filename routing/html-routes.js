var path = require('path');
var orm = require('../config/orm.js');

module.exports = function(app) {

    app.get('/', function(request, response) {

        orm.allBurgers(function(allBurgersData) {
            response.render('index', { allBurgersData });
        })
    });
}