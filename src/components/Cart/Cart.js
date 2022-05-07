import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);

  const cart = items.map((item) => {
    return <CartItem item={item} key={item.title} />;
  });

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {/* <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        /> */}
        {cart}
      </ul>
      <div className={classes.total}>
        <h3>Total Amount </h3>
        <h2>$35</h2>
      </div>
    </Card>
  );
};

export default Cart;
