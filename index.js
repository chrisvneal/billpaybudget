import express from "express";

const app = express();

const port = 3000;

let info = {
	title: "Billpay & Budget",
	user: "Chris Neal",
};

app.get("/", (req, res) => {
	res.render("index.ejs", { info });
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
