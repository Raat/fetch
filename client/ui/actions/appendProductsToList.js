// Class to set the innerHTML on.
const productListClass = 'js-append-products';

// Function to render a li for every product in the response
// CURRENCY is set in the webpack config
function renderList(products) {
	const list = `
        ${products.map(product => `<li>${product.name} ${CURRENCY} ${product.price}</li>`).join(' ')}
    `;
	return list;
}

// Append the list items to the ul
const appendProductsToList = products => {
	const listContainer = document.querySelector(`.${productListClass}`);
	listContainer.innerHTML = renderList(products);
};

export {appendProductsToList, productListClass};
