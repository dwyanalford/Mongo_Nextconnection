import { getProducts, getOneProduct } from '../../lib/products';

export default function ProductByID({ product }) {
  // Render post...
  console.log('product to props:' + product);
  const singleProducts = product[0];
  console.log('singleProducts:' + singleProducts);
  return (
    <div>
      <h1>Product Title: {singleProducts.title_short} </h1>
      <h3>ID: {singleProducts.id} </h3>
    </div>
  );
}

export async function getStaticPaths() {
  const products = await getProducts();
  const paths = products.map((product) => ({
    params: { id: product._id },
  }));
  //console.log(products);
  console.log(paths);
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { id } }) {
  const product = await getOneProduct(id);
  console.log('getOneProduct in [id]:' + product);
  // Pass data to the page via props
  return { props: { product } };
}
