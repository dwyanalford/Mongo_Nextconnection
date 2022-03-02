import Link from 'next/link';
import styles from '../styles/singles.module.css';
import { getProducts } from '../lib/products';

export default function Products({ products }) {
  return (
    <div>
      <h1>Essential Oils Collection</h1>
      {products.map((product) => {
        console.log('product map:' + product._id);
        return (
          <div key={product._id}>
            <h2>
              <Link href={`/products/${product._id}`}>
                <a className={styles.button_feel}>{product.title_long}</a>
              </Link>
            </h2>

            <h3>Price:&nbsp;{product.price}</h3>
            <p>Origin:&nbsp;{product.origin}</p>
            <p>Odor:&nbsp;{product.odor}</p>
            <p>Description:&nbsp;{product.description}</p>
            <p>Category:&nbsp;{product.category}</p>
            <code>Scientific Name:&nbsp;{product.chemical}</code>
            <br />
            <code>Extraction Method:&nbsp;{product.extraction}</code>
            <br />
            <code>Ingredients:&nbsp;{product.ingredients}</code>
            <h4>UPC:&nbsp;{product.UPC}</h4>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps(context) {
  const products = await getProducts();
  return {
    props: { products },
  };
}
