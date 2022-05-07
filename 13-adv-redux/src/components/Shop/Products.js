import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 15,
    title: 'Pen Drive',
    description: 'A 16gb storage device',
  },
  {
    id: 'p2',
    price: 7,
    title: 'WaterMelon',
    description: 'To keep you cool and refreshed during summer',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => {
          return (
            
          )
        })}
        <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        />
      </ul>
    </section>
  );
};

export default Products;
