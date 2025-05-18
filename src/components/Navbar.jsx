import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const totalItems = useSelector(state => state.cart.reduce((a, b) => a + b.quantity, 0));

  return (
    <nav className="flex justify-between p-4 bg-blue-600 text-white">
      <Link to="/">E-Shop</Link>
      <Link to="/cart"> Cart ({totalItems})</Link>
    </nav>
  );
};

export default Navbar;
