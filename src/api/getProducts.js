
function timeout(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export default async () => {
	await timeout(3000);
    // Await response of fetch call
	const response = await fetch(PRODUCT_LIST_URL);
	console.log(response);
    // Only proceed once promise is resolved
	const data = await response.json();
    // Only proceed once second promise is resolved
	return data;
};

