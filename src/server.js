import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.send("hello, world");
});

const handleListen = () => console.log("Listening on http://localhost:3000");
app.listen(3000, handleListen);
