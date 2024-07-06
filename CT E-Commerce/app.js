const path = require("path");
const express = require("express");
const app = express();
const port = 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.post("/", async (req, res) => {
  const categories = await fetch(
    "https://fakestoreapi.com/products/categories"
  ).then((res) => {
    return res.json();
  });
  const products = await fetch("https://fakestoreapi.com/products/").then(
    (res) => {
      return res.json();
    }
  );
  const data = {
    categories,
    products,
  };
  res.send(data);
});

app.post("/products/category", (req, res) => {
  const { category } = req.body;
  fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      res.send(data);
    });
});

app.post("/products/product", (req, res) => {
  const { productId } = req.body;
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      res.send(data);
    });
});

app.post("/cart", (req, res) => {
  fetch("https://fakestoreapi.com/carts/5")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      res.send(data);
    });
});

app.listen(port, () => {
  console.log(`http://localhost:` + port);
});
