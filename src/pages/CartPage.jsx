import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';

const CartPage = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? <p>No items in cart.</p> :
        cart.map(item => (
          <div key={item.id} className="mb-2 border-b pb-2">
            <h4>{item.name}-({item.quantity}) - ${item.price}</h4>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-500 text-sm"
            >
              Remove
            </button>
          </div>
        ))
      }
      <div className="mt-4 font-bold">Total: ${total.toFixed(2)}</div>
    </div>
  );
};

export default CartPage;
