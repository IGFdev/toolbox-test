const express = require('express');
const cors = require('cors');

const fileRoutes = require('./routes/fileRoutes');

const app = express();

app.use(cors());

app.use('/files', fileRoutes);

app.use((req, res) => {
  res.status(404);
  res.set('Content-Type', 'application/json');
  return res.json({msg: 'Error 404: not found'});
})

app.listen(3001, () => {
  console.log('Servidor corriendo en puerto 3001 | http://localhost:3001');
});