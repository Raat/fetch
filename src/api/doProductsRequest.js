// Force timeout to test loader
function timeout(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export default async () => {
	await timeout(3000);
  // Await response of fetch call
  // PRODUCT_LIST_URL is defined in the webpack config
	const response = await fetch(PRODUCT_LIST_URL);
  // Only proceed once promise is resolved
	const data = await response.json();
  // Only proceed once second promise is resolved
	return data;
};

