const axios = require('axios');
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3ODI3MTQ4LCJpYXQiOjE3MTc4MjY4NDgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImQ2YjdlMWYwLTU0ZTYtNDQ4ZC1iOTM1LWVhMWE0OTgzMzUyMyIsInN1YiI6Imt1bmpndXB0YTU0QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6ImdvTWFydCIsImNsaWVudElEIjoiZDZiN2UxZjAtNTRlNi00NDhkLWI5MzUtZWExYTQ5ODMzNTIzIiwiY2xpZW50U2VjcmV0IjoiZVpUdFdmbm1ZeUF5eVpEVCIsIm93bmVyTmFtZSI6Imt1bmogZ3VwdGEiLCJvd25lckVtYWlsIjoia3Vuamd1cHRhNTRAZ21haWwuY29tIiwicm9sbE5vIjoiMjEwMDI3MDEzMDEwMiJ9.Bqx2Gsmm237tVVNIikazJhHliRbyeqzehQpAKm0HCeE"
const fetchProductsFromAPI = async (company, category, top, minPrice, maxPrice) => {
  try {
    const response = await axios.get(`http://20.244.56.144/test/companies/${company}/categories/${category}/products`, {
      params: {
        minPrice,
        maxPrice,
        top
      },
      headers: {
        'Authorization': `Bearer ${API_KEY}` 
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching from API:`, error);
    return [];
  }
};

// Main function to get top products
const getProducts = async (company, category, top, minPrice, maxPrice) => {
  const products = await fetchProductsFromAPI(company, category, top, minPrice, maxPrice);

  return products.map(product => ({
    ...product,
    id: product.productName.replace(/\s+/g, '-').toLowerCase() // Generating a unique ID
  }));
};

module.exports = {
  getProducts
};
