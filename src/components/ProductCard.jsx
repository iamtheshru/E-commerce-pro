import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-2" />
        <h3 className="font-bold">{product.name}</h3>
        <p>${product.price}</p>
      </Link>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
