import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector(state => state.products.find(p => p.id === +id));
  const dispatch = useDispatch();

  if (!product) return <p className="p-4">Product not found.</p>;

  return (
    <div className="p-4">
      <img src={product.image} className="w-60 h-60 object-contain mb-4" />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
