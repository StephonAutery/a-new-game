const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const routes = require("./routes");

const app = express();

// middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    }),
    bodyParser.json(),
    passport.initialize()
);
// app.use(bodyParser.json());

// dbconfig
const db = require("./config/keys").mongoURI;
// connect to mongoDB
mongoose.connect(
    db,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }
)
    .then(() => console.log("- mongoDB successfully connected -"))
    .catch(err => console.log(err));

// passport middleware
// app.use(passport.initialize());

// passport config
require("./config/passport")(passport);

// routes
// app.use("/api/users", users);
app.use(routes);

const port = process.env.PORT || 3001; // config for Heroku Deployment

app.listen(port, () => console.log(`server running on port ${port} !`));