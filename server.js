var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urelencoded({
    extended: false
}))

app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js')(app);

app.listen(PORT, function() {
    console.log("Listening on PORT %d", PORT);
});