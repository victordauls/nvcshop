/** @format */

let body = document.querySelector("body"),
  clothes = document.querySelector(".cloth"),
  collection = document.querySelector(".collection-box"),
  clothlist = document.querySelector(".clothes"),
  productdiv = document.querySelector(".productdiv"),
  homecollection = document.querySelector(".collection"),
  home = document.querySelector(".hone"),
  shoes = document.querySelector(".shoes"),
  shoeslist = document.querySelector(".shoeslist"),
  bags = document.querySelector(".bags"),
  glasslist = document.querySelector(".glasslist"),
  glasses = document.querySelector(".glasses"),
  jewelry = document.querySelector(".jewelry"),
  themebutton = document.querySelector(".btnn"),
  asidebutton = document.querySelector(".bar"),
  aside = document.querySelector("aside"),
  closeaside = document.querySelector(".x-mark"),
  parent = document.querySelector(".parent"),
  welcome_background = document.querySelector(".welcome-background"),
  welcome_button = document.querySelector(".welcome-button"),
  gucci_cart = document.querySelector(".gucci_cart"),
  guccishoe = document.querySelector(".guccishoe"),
  gucci_price = document.querySelector(".gucci_price"),
  cart_figure = document.querySelector(".cart_figure"),
  nikeshoe = document.querySelector(".nikeshoe"),
  nike_price = document.querySelector(".nike_price"),
  nike_product = document.querySelector(".nike_product"),
  items_added = document.querySelector(".items_added"),
  cart_div = document.querySelector(".cart_div"),
  close_cart = document.querySelector(".close_cart"),
  cartss = document.querySelector(".cartss"),
  cart_image = document.querySelector(".cart_image"),
  cartname = document.querySelector(".cartname"),
  cartprice = document.querySelector(".cartprice"),
  cartdes = document.querySelector(".cartdes");

clothes.addEventListener("click", clothitems);
function clothitems() {
  collection.innerHTML = "";
  aside.style.left = "-700px";
  clothlist.style.display = "contents";
  collection.appendChild(clothlist);
}

shoes.addEventListener("click", shoebar);
function shoebar() {
  collection.innerHTML = "";
  aside.style.left = "-700px";
  shoeslist.style.display = "contents";
  collection.appendChild(shoeslist);
}

bags.addEventListener("click", homebar);
function homebar() {
  collection.innerHTML = "";
  aside.style.left = "-700px";
  homecollection.style.display = "contents";
  collection.appendChild(homecollection);
}
glasses.addEventListener("click", glassbar);
function glassbar() {
  collection.innerHTML = "";
  aside.style.left = "-700px";
  glasslist.style.display = "contents";
  collection.appendChild(glasslist);
}

jewelry.addEventListener("click", jewelrylist);
function jewelrylist() {
  aside.style.left = "-700px";
  alert("there is no jewelry avialable check back later");
}

asidebutton.addEventListener("click", () => {
  aside.style.left = "0";
});
closeaside.addEventListener("click", () => {
  aside.style.left = "-700px";
});

welcome_button.addEventListener("click", () => {
  welcome_background.style.display = "none";
});
welcome_background.addEventListener("click", () => {
  welcome_background.style.display = "none";
});

cart_figure.textContent = 0;

items_added.innerHTML = "";
console.log(items_added);

collection.addEventListener("click", (e) => {
  e.preventDefault();
  addItemTocart(e);
});
let cartItems = [];
function addItemTocart(e) {
  cart_figure.textContent++;

  if (e.target.parentElement.parentElement.classList.contains("items")) {
    const item_image = e.target.parentElement.parentElement.firstElementChild;
    const item_price = e.target.parentElement.firstElementChild.textContent;
    const item_description = e.target.previousElementSibling.textContent;
    let content = {
      description: item_description,
      price: exractInitials(item_price),
      image: item_image,
    };

    let delete_cart = document.createElement("div");
    delete_cart.className = "cart_image";
    delete_cart.textContent = "X";
    let cartprice = document.createElement("p");
    cartprice.textContent = `${content.price}`;
    cartprice.className = "cartprice";
    let cartname = document.createElement("p");
    cartname.className = "cartname";
    cartname.textContent = `${content.description}`;

    let cartdes = document.createElement("div");
    cartdes.className = "cartdes";
    cartdes.appendChild(cartname);
    cartdes.appendChild(cartprice);

    let div_cart = document.createElement("div");

    div_cart.className = "items_add";
    div_cart.style.borderBottom = "1px solid black";
    div_cart.style.borderTop = "1px solid black";
    div_cart.style.borderRadius = "10px";
    div_cart.style.background = "black";

    div_cart.appendChild(cartdes);
    div_cart.appendChild(delete_cart);

    items_added.appendChild(div_cart);

    cartItems.push(content);

    delete_cart.addEventListener("click", () => {
      items_added.removeChild(div_cart);
    });
  }

  getCartItems(cartItems);
}

// function emptycard() {
//   if (items_added.innerHTML !== div_cart) {
//     // console.log("your cart is empty");
//   }
// }

function getCartItems(value) {
  return console.log(value);
}

function exractInitials(value) {
  let newValue = Number(value.slice(1));
  return newValue;
}

// nikeshoe.addEventListener("click", (e) => {
//   e.preventDefault();
//   cart_figure.textContent++;

//   let shoelist = {
//     product_name: nike_product.textContent,
//     product_price: nike_price.textContent,
//   };

//   let div = document.createElement("div");
//   div.textContent = `${shoelist.product_name}  ${shoelist.product_price}`;
//   items_added.appendChild(div);
// });

// let element = `<h1> ${shoeslist.} </h1>
// `// DOMException.innerHTML = body

close_cart.addEventListener("click", () => {
  cart_div.style.display = "none";
});

cartss.addEventListener("click", () => {
  cart_div.style.display = "flex";
});

// collection.parentElement.previousElementSibling;
// collection.parentElement.previousElementSibling;
//
