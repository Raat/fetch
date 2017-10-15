import {doProductsRequest} from '../../api';
import {showLoader, hideLoader, appendProductsToList} from './';

export default() => {
	showLoader();
	// Do the request en then append the products to the list
	doProductsRequest()
		.then(products => appendProductsToList(products))
		.catch(err => console.log(err.message))
		.then(() => hideLoader());
};
