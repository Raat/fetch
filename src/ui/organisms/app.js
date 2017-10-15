import {productList} from '../molecules';
import {button, loader} from '../atoms';
import style from './app.css';

export default () => `
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
