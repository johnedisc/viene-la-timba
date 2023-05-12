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
  res.redirect(301, "new.html"); // (statusCode, redirect file) sends 302 by default
})

//route handlers chained with NEXT within ()

app.get('/hello(.html)?', (req, res, next) => {
  console.log('attempted to load hello.html');
  next()
}, (req, res) => {
  res.send('hi');
})

// chaining with NEXT with prewritten functions

const one = (req: any, res: any, next: Function) => {
  console.log('one');
  next();
}

const two = (req: any, res: any, next: Function) => {
  console.log('two');
  next();
}

const three = (req: any, res: any) => {
  console.log('three.');
  res.send('done');
}

app.get('/chain(.html)?', [one, two, three]);

// last route is default
app.get('/*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
})

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
