const express = require('express');
const app = express();
const categoriesRoutes = require('./routes/categories');

app.use('/categories', categoriesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
