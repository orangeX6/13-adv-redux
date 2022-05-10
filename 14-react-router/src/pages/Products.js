import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A toy train</Link>
        </li>
        <li>
          <Link to="/products/p2">A Novel</Link>
        </li>
        <li>
          <Link to="/products/p3">A football</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
