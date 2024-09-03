import express from "express";

const app = express();

app.use(express.static("public"));

const port = 3000;

const newDate = new Date();

const daysOfWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const day = daysOfWeek[newDate.getDay()];
const month = months[newDate.getMonth()];
const date = newDate.getDate();
const year = newDate.getFullYear();

let info = {
	title: "Billpay & Budget",
	currentDate: {
		day,
		month,
		date,
		year,
	},
	user: {
		firstName: "Chris",
		lastName: "Neal",
	},
	getFullName: function () {
		return `${this.user.firstName} ${this.user.lastName}`;
	},
};

app.get("/", (req, res) => {
	res.render("index.ejs", { info, pageTitle: "Monthly Living Expenses" });
});

app.get("/debtplan", (req, res) => {
	res.render("debtplan.ejs", { info, pageTitle: "Debt Plan" });
});

app.get("/budget", (req, res) => {
	res.render("budget.ejs", { info, pageTitle: "Monthly Budget" });
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
