import Product from './product.interface';
import User from './user.interface';

interface Order {
  id: string;
  user_id: string;
  status: string;
  date: string;
  user: User;
  products: Product[];
}

export default Order;
