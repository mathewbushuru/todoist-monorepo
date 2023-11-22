import app from "./app.js";

// Start server
app.listen(process.env.PORT || 3001, () => {
  console.log(`Todoist server running on port ${process.env.PORT || 3001}`);
});
