import Link from 'next/link';
import styles from '../styles/singles.module.css';
import { getAll } from '../lib/products';
import Image from 'next/image';
import Nav from '../components/nav';

export default function Products({ products }) {
  return (
    <div>
      <Nav />
      <h1>Essential Oils Collection</h1>
      {products.map((product) => {
        return (
          <div key={product._id}>
            <Image
              src={product.image.md}
              alt="Tidal Essential oils products"
              width={477}
              height={449}
            />
            <h1 className={styles.button_feel}>
              <Link
                href={`/products/[id]]`}
                as={`/products/${product.endpoint}`}
              >
                {product.title_long}
              </Link>
            </h1>

            <h2>{product.tagline_1}</h2>
            <h2>{product.tagline_2}</h2>
            {/* <Link
              className="btn-primary"
              href={`/products/[id]]`}
              as={`/products/${product.endpoint}`}
            > */}
            <a className="btn-primary">MORE DETAILS</a>
            {/* </Link> */}
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps(context) {
  const products = await getAll();
  return {
    props: { products },
  };
}
