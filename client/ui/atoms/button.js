import {getProducts} from '../actions';
// eslint-disable-next-line no-unused-vars
import style from './button.css';

export default() => {
	const functionName = 'getProducts';
	// Bind function to the window scope for the onclick event
	window[NAMESPACE][functionName] = getProducts;
	// Return button with the correct function name
	return `
    <button type="button" onClick=${NAMESPACE}.${functionName}() class="md-btn md-btn-raised md-btn-ripple">Click to load products</button>
  `;
};
