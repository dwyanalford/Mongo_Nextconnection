export default function Products({ products }) {
  return (
    <div>
      <h1>Essential Oils Collection</h1>
      {products.map((product, index) => {
        return (
          <div className="" key={index}>
            <h2>{product.title_long}</h2>
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

export async function getServerSideProps(context) {
  const product_data = await fetch('http://localhost:3000/api/products', {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
    },
  });
  const products = await product_data.json();
  return {
    props: { products },
  };
}
