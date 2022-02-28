export default function ProductByID({ aProduct }) {
  // Render post...
  return (
    <div>
      <h1>Product-ID: {aProduct[0]._id} </h1>
      <h1>Name: {aProduct[0].title_short} </h1>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: true, // false or 'blocking'
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const data = await fetch(`http://localhost:3000/api/products/${params.id}`);
  const aProduct = await data.json();

  // Pass post data to the page via props
  return { props: { aProduct } };
}
