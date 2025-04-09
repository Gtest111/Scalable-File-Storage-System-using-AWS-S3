const express = require('express');
require('dotenv').config();
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.use('/api', uploadRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
