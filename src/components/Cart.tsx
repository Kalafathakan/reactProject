import CartItem from './CartItem';
import { CartItemType } from './MenuAPI';

type CartProps = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: string) => void;
};

const Cart = ({ cartItems, addToCart, removeFromCart }: CartProps) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((total: number, item) => total + item.quantity * item.price, 0);

  return (
    <div className='cart-wrapper'>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.food_id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <br />
      <h4>Total: ${calculateTotal(cartItems).toFixed(2)}</h4>
    </div>
  );
};


export default Cart;
