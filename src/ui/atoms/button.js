import {getProducts} from '../actions';

window.getProducts = getProducts;

console.log(window);

const markup = `
  <button onClick=getProducts()>Click to load products</button>
`;

export default markup;
