import { server } from '../config/index';

export async function getAll() {
  const res = await fetch(`${server}/api/products/all`);
  const allProducts = await res.json();
  return allProducts;
}

export async function getSingles() {
  const res = await fetch(`${server}/api/products/singles`);
  const singles = await res.json();
  return singles;
}

export async function getSets() {
  const res = await fetch(`${server}/api/products/sets`);
  const singles = await res.json();
  return singles;
}
