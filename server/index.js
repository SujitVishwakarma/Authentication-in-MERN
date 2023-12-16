const express = require("express");
const app = express();

require("./db/connection.js");
const router = require('./routes/router.js');
const cors = require('cors');
const cookiParser = require("cookie-parser");
const port = 8009;



// app.get("/",(req, res)=>{
//     res.status(201).json("Server is created ")
// });

app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(router);

app.listen(port, ()=>{
    console.log(`Server start at port no: ${port}`);
})