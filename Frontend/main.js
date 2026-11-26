const products = getAvailableProducts(); // console.log(products);
// newProductList = [];
// for (let i = 0; i < products.length; i++) {
//   newProductList.push({
//     item: products[i].name,
//     price: products[i].price,
//     rating: products[i].rating,
//   });
// }

function renderProducts() {
  const productList = document.getElementById("productList");
  for (let i = 0; i < products.length; i++) {
    const li = document.createElement("li");
    li.textContent = `item: ${products[i].name} | Price: ${products[i].price} | rating: ${products[i].rating}`;
    productList.appendChild(li);
  }
  return productList;
}
console.log(renderProducts(products));
