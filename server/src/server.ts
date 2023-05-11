import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3500;

// will take regexp as argument
app.get("^/$|/index(.html)?", (req, res) => {
  // send a file as response
  res.sendFile(path.join(__dirname, "views", "index.html"));
})

app.get("/new-page.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
})

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
