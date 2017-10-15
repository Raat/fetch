import 'babel-polyfill'; // eslint-disable-line import/no-unassigned-import
import 'whatwg-fetch'; // eslint-disable-line import/no-unassigned-import
import {app} from './ui/organisms';
import {getProducts} from './api';

const init = () => {
	console.log('test');
	const appContainer = document.getElementById('app');
	console.log(app);
	appContainer.innerHTML = app;
	getProducts()
    .then(data => console.log(data))
    .catch(err => console.log(err.message));
};

init();
