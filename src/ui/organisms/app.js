import {productList} from '../molecules';
import {button, loader} from '../atoms';
// eslint-disable-next-line no-unused-vars
import style from './app.css';

export default() => `
  <div class="container">
    <div class="card">
      ${loader()}
      ${productList()}
        <div class="button-wrapper">
          ${button()}
        </div>
      </div>
    </div>
  </div>
`;
