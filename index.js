import express from "express";

const app = express();

app.use(express.static("public"));

const port = 3000;

const date = new Date();

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

const dayOfWeek = daysOfWeek[date.getDay()]; // Gets the day of the week as a string
const month = months[date.getMonth()]; // Gets the month as a string
const day = date.getDate(); // Gets the day of the month as a number
const year = date.getFullYear(); // Gets the full year as a number

const formattedDate = `${dayOfWeek} | ${month} ${day}, ${year}`;

let info = {
	title: "Billpay & Budget",
	currentDate: {
		day: dayOfWeek,
		month,
		date: day,
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
	res.render("index.ejs", { info });
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
