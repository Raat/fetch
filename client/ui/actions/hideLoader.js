export default() => {
	document.body.querySelector('.mat_list')
		.style.opacity = 1;
	document.body.className = document.body.className.replace('show-loader', '');
};
