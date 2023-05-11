import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3500;

// will take regexp as argument
app.get("^/$|/index(.html)?", (req, res) => {
  // send a file as response
  res.sendFile(path.join(__dirname, "views", "index.html"));
})

// 6.50.41
app.get("/new(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new.html"));
})

app.get("/old(.html)?", (req, res) => {
  res.redirect("new.html");
})

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
