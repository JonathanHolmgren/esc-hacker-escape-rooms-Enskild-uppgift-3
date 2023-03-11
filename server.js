import http from "http";
import express from "express";

const app = express();



const PORT = process.env.PORT || 3080;

//express.static.mime.define({'text/css': ['css']});



app.use(express.static("www"));


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));


