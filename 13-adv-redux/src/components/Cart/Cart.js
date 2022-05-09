import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.totalAmount);

  const cart = items.map((item) => {
    return (
      <CartItem
        key={item.id}
        item={{
          id: item.id,
          title: item.name,
          quantity: item.quantity,
          total: item.total,
          price: item.price,
        }}
      />
    );
  });

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cart}</ul>
      <div className={classes.total}>
        <h3>Total Amount </h3>
        <h2>${total}</h2>
      </div>
    </Card>
  );
};

export default Cart;
