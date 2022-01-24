const express = require("express");
require("dotenv").config();
const app = express();
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const authMiddleWare = require("./middleware/auth");
const schema = require("./schema/UserSchcema");

app.get("/", (req, res) => {
	res.send("Hello world");
});

mongoose.connect(
	`mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.8ohlm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
);

mongoose.connection.once("open", () => {
	console.log("conneted to database");
});
app.use(authMiddleWare);
app.use(
	"/graphql",
	authMiddleWare,
	graphqlHTTP({
		schema,
	}),
);

app.listen(5000, () => {
	console.log("Server is up and running on port 5000");
});