export default() => {
	document.body.className += 'show-loader';
	document.body.querySelector('.mat_list')
		.style.opacity = 0;
};
