const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
	res.send("Welcome to the Stuneckt Blogging api.");
});

app.all("*", (req, res, next) => {
	res.send("Requested URL not found.");
});

module.exports = app;
