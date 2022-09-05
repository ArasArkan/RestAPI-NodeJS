import express from "express";
import bodyParser from "body-parser";
import userManager from "./routes/userManager.js"

const app = express();
const port = 4000;
app.use(bodyParser.json());

app.use('/apiv1', userManager);

app.listen(port, function() {
    console.log("Server is starting! Port number is:" + port);
});
