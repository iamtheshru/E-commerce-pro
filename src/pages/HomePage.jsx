import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard.jsx';

const HomePage = () => {
  const products = useSelector(state => state.products);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-4 p-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;
