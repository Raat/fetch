import 'babel-polyfill'; // eslint-disable-line import/no-unassigned-import
import 'whatwg-fetch'; // eslint-disable-line import/no-unassigned-import
import {app} from './ui/organisms';

const init = () => {
	console.log('test');
	const appContainer = document.getElementById('app');
	console.log(app);
	appContainer.innerHTML = app;
};

init();
