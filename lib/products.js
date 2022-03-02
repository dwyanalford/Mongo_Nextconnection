export async function getProducts() {
  const res = await fetch('http://localhost:3000/api/products/');
  const products = await res.json();
  return products;
}

export async function getOneProduct(id) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const product = JSON.stringify(res);
  return product;
}
