const express = require('express');
const app = express();
const PORT = 3000;

const cricketRoutes = require('./routes/cricketRoutes');

app.use(express.json());
app.use('/cricket', cricketRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
