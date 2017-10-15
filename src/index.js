import 'babel-polyfill'; // eslint-disable-line import/no-unassigned-import
import 'whatwg-fetch'; // eslint-disable-line import/no-unassigned-import
import {app} from './ui/organisms';

const init = () => {
	// Set namespace for click functions
	// NAMESPACE is defined in the webpack config
	window[NAMESPACE] = {};
	// Set innerHTML for the app
	const appContainer = document.getElementById('app');
	appContainer.innerHTML = app();
};

init();
