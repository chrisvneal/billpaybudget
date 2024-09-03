import express from "express";

const app = express();

app.use(express.static("public"));

const port = 3000;

let info = {
	title: "Billpay & Budget",
	user: {
		firstName: "Chris",
		lastName: "Neal",
	},
	getFullName: function () {
		return `${this.user.firstName} ${this.user.lastName}`;
	},
};

app.get("/", (req, res) => {
	res.render("index.ejs", { info });
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
