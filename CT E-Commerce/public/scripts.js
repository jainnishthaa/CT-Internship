async function onload() {
  const { data } = await axios.post("/");
  productDetail.classList.add("hidden");
  cartDetail.classList.add("hidden");
  main.classList.remove("hidden");
  fetchCategories(data.categories);
  fetchProducts(data.products);
}
onload();

const categoryList = document.querySelector(".category-list");
const productList = document.querySelector(".product-list");
const main = document.querySelector(".main");
const productDetail = document.querySelector(".product-detail");
const cartDetail = document.querySelector(".cart-detail");
const megamart = document.querySelector(".logo");
const cart = document.querySelector(".cart");
const cartDetailList=document.querySelector(".cart-detail-list")

async function fetchCategories(categories) {
  try {
    categories.forEach(async (category) => {
      const product = await fetch(
        `https://fakestoreapi.com/products/category/${category}?limit=1`
      );
      const productData = await product.json();
      const img = productData[0].image;
      const categoryItem = document.createElement("div");
      categoryItem.classList.add("category-item");
      categoryItem.innerHTML = `
          <div class="circle" style="width: 100px; height: 100px; border-radius: 50%; background-color:#F5F5F5; display: flex; justify-content: center; align-items: center;">
          <img src="${img}" alt="category image" style="width: 70%; height: 70%;">
          </div>
          <p style="cursor: pointer;">${category}</p>`;
      categoryList.appendChild(categoryItem);
    });
  } catch (err) {
    console.error("Error fetching categories:", err);
  }
}

function fetchProducts(products) {
  try {
    const heading = document.getElementById("heading");
    heading.innerText = "Products";
    products.forEach((product) => {
      const productItem = document.createElement("div");
      productItem.classList.add("product-item", `${product.id}`);
      productItem.innerHTML = `
              <div style="height: 189px; background-color: #f5f5f5; display: flex; justify-content: center; align-items: center; border-radius: 10% 10% 0% 0%;">
              <img src="${product.image}" alt="${product.title}" style="width:70%; height:70%;">
              </div>
              <div style="cursor: pointer; height: auto; border-radius: 10%; padding: 0 10px;">
              <p>${product.title}</p>
              <p>₹${product.price}</p>
              </div>
          `;
      productList.appendChild(productItem);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function showproducts(products, category) {
  productList.innerHTML = "";
  const heading = document.getElementById("heading");
  heading.innerText = `${category} brands`;
  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item", `${product.id}`);
    productItem.innerHTML = `
        <div style="height: 189px; background-color: #f5f5f5; display: flex; justify-content: center; align-items: center; border-radius: 10% 10% 0% 0%;">
        <img src="${product.image}" alt="${product.title}" style="width:70%; height:70%;">
        </div>
        <div style="cursor: pointer; height: auto; border-radius: 10%; padding: 0 10px;">
        <p>${product.title}</p>
        <p>₹${product.price}</p>
        </div>
    `;
    productList.appendChild(productItem);
  });
}

function showproduct(product) {
  main.classList.add("hidden");
  cartDetail.classList.add("hidden");
  productDetail.classList.remove("hidden");
  let img = document.querySelector(".product-detail-img");
  img.innerHTML = `<img src=${product.image}>`;
  let detail = document.querySelector(".product-detail-info");
  detail.innerHTML = `<h1>${product.title}</h1>
  <p>${product.description}</p>
  <h3>₹${product.price}</h3>
  <h4>${product.category}</h4>
  <p>${product.rating.rate}</p>
  `;
}

function showcart(cart) {
  main.classList.add("hidden");
  productDetail.classList.add("hidden");
  cartDetail.classList.remove("hidden");
  cartDetailList.innerHTML = "";
  let products = cart.products;
  products.forEach(async (product) => {
    const { data } = await axios.post("/products/product", {
      productId: product.productId,
    });
    const productItem = document.createElement("div");
    productItem.classList.add("product-item", `${data.id}`);
    productItem.innerHTML = `
        <div style="height: 189px; background-color: #f5f5f5; display: flex; justify-content: center; align-items: center; border-radius: 10% 10% 0% 0%;">
        <img src="${data.image}" alt="${data.title}" style="width:70%; height:70%;">
        </div>
        <div style="cursor: pointer;  border-radius: 10%; padding: 0 10px;">
        <p>${data.title}</p>
        <p>₹${data.price}</p>
        <p> quantity : ${product.quantity}</p>
        </div>`;
    cartDetailList.appendChild(productItem);
  });
}

megamart.addEventListener("click", () => {
  productDetail.classList.add("hidden");
  cartDetail.classList.add("hidden");
  main.classList.remove("hidden");
});

categoryList.addEventListener("click", async (ev) => {
  let category = ev.target.innerText;
  selectedItem = ev.target.previousElementSibling;
  const categoryItems = document.querySelectorAll(".circle");
  categoryItems.forEach((item) => {
    item.classList.remove("active");
  });
  selectedItem.classList.add("active");
  console.log(category);
  try {
    const { data } = await axios.post("/products/category", {
      category: category,
    });
    showproducts(data, category);
  } catch (err) {
    console.log(err);
  }
});

productList.addEventListener("click", async (ev) => {
  let product = ev.target.parentElement;
  while (!product.classList.contains("product-item")) {
    product = product.parentElement;
  }
  let productId = product.classList[1];
  try {
    const { data } = await axios.post("/products/product", {
      productId: productId,
    });
    showproduct(data);
  } catch (err) {
    console.log(err);
  }
});

cart.addEventListener("click", async () => {
  try {
    const { data } = await axios.post("/cart");
    showcart(data);
  } catch (err) {
    console.log(err);
  }
});
