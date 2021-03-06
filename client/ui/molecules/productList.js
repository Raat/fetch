import {productListClass} from '../actions';
// eslint-disable-next-line no-unused-vars
import styles from './productList.css';

export default() => `
    <div class="mat_list_title">
      <h1>Product list</h1>
    </div>
    <ul class='${productListClass} mat_list'>
      <li>No products available. Click the button to load products.</li>
    </ul>
`;
