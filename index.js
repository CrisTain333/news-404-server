const express = require("express");
const app = express();
const cors = require("cors");
const port =  5000;

app.use(cors());

const categories = require("./Data/categories.json");
const news = require("./Data/news.json");

app.get('/news',(req,res)=>{
res.send(news);
})

app.get("/", (req, res) => {
  res.send("News API Running");
});

app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.get('/news/:id',(req,res)=>{
    const id = req.params.id;
    const singleNews = news.find(n => n._id === id)
    res.send(singleNews);
})

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "08") {
    res.send(news);
  }
  {
    const selectedNews = news.filter((n) => n.category_id === id);
    res.send(selectedNews);
    console.log(selectedNews);
  }
});

app.listen(port, () => {
  console.log("News -404 Server running on port", port);
});
