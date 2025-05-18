import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';

const CartPage = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="py-3 px-4">Product</th>
            <th className="py-3 px-4">Description</th>
            <th className="py-3 px-4">Price</th>
            <th className="py-3 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 ? <p>No items in cart.</p> :
            cart.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-4 px-4 flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <span className="font-medium">{item.name}</span>
                </td>
                <td>{item.description}</td>
                <td className="py-4 px-4 text-gray-700">Rs.{item.price}</td>

                <td className="py-4 px-4">
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-500 hover:text-red-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className="mt-4 font-bold">Total: ${total.toFixed(2)}</div>
    </>
  );
};

export default CartPage;
