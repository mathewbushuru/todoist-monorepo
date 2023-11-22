// Third party imports
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
const app = express();
// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Routes
app.get("/", (req, res, next) => {
    res.json({ message: "Welcome to Todoist Server API" });
});
app.use((req, res, next) => {
    const errorMessage = "404 Error - Not Found!";
    console.log(errorMessage);
    return res.status(404).json({ errorMessage });
});
app.use((error, req, res, next) => {
    console.error(error);
    return res
        .status(500)
        .json({ errorMessage: "Something went wrong...", ...error });
});
export default app;
