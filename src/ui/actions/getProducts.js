import {doProductsRequest} from '../../api';

const getProducts = () => {
	doProductsRequest()
    .then(data => console.log(data))
    .catch(err => console.log(err.message));
};

export default getProducts;
