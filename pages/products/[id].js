import { getAll } from '../../lib/products';
// import { ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb';
import Image from 'next/image';
// import styles from '../../styles/singles.module.css';

export default function ProductDetail({ product }) {
  // Render post...
  return (
    <div style={{ backgroundColor: `${product.color}` }}>
      <h1>Product Title: {product.title_long} </h1>
      <h3>ID: {product._id} </h3>
      <Image
        src={product.image.lg}
        alt="Tidal Essential oils products"
        width={716}
        height={673}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const products = await getAll();
  const paths = products.map((product) => ({
    params: { id: product.endpoint },
  }));
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { id } }) {
  const client = await clientPromise;
  const db = client.db('tidalDatabase');
  const data = await db.collection('tidal-products').findOne({ endpoint: id });
  const product = await JSON.parse(JSON.stringify(data));
  return { props: { product }, revalidate: 15 };
}
