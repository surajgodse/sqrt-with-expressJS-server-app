const express = require("express");
const cors = require("cors");
const fs = require("fs");
const port = process.env.PORT || 9000;

const app = express();
app.use(cors());

app.get("/compute", (req, res)=>{
	let num = req.query.number;
	let n = parseFloat(num);
	let r = n ** 0.5;
	let msg = "Square Root of " + n + " is " + r.toFixed(2);

	let logdata = msg + " " + new Date().toString() + "\n";
	fs.appendFile("result.txt", logdata, (err)=>{
		if(err)
			console.log(err);
	});


	res.json({"msg":msg});
});

app.listen(port, ()=>{console.log("Ready @ " + port);});