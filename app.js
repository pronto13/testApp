const _                 = require('lodash'),
      bodyParser        = require('body-parser'),
      express           = require('express'),
      flash             = require('connect-flash'),
      LocalStrategy     = require('passport-local'),
      methodOverride    = require('method-override'),
      mongoose          = require('mongoose'),
      passport          = require('passport');

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.render("landing");
});

app.listen(3000, () => {
  console.log("server is running");
});
