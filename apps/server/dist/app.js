import express from "express";
const app = express();
app.get("/", (req, res, next) => {
    res.json({ message: "Welcome to Todoist Server API" });
});
export default app;
