const axios = require('axios');
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3ODI2MDQzLCJpYXQiOjE3MTc4MjU3NDMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjEyZTNkNzhkLWZlZTQtNGU2OS1iYzAyLThiOTI2NzUwY2ZjZCIsInN1YiI6Imt1bmoyMTEzMjAxQGFrZ2VjLmFjLmluIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiIxMmUzZDc4ZC1mZWU0LTRlNjktYmMwMi04YjkyNjc1MGNmY2QiLCJjbGllbnRTZWNyZXQiOiJYcWJRWnhiekdmQWtDRGR2Iiwib3duZXJOYW1lIjoia3VuaiBndXB0YSIsIm93bmVyRW1haWwiOiJrdW5qMjExMzIwMUBha2dlYy5hYy5pbiIsInJvbGxObyI6IjIxMDAyNzAxMzAxMDIifQ.o31YZElSXoDuDAFXQ3ft5u6A7rCp0jVjnBE9A7mPbes"
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
