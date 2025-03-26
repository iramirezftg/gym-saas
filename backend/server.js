const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./src/routes/auth.routes');
app.use('/api/auth', authRoutes);

app.get('/api/ping', (req, res) => res.send('pong'));

app.listen(process.env.PORT, () =>
  console.log(`Backend running on port ${process.env.PORT}`)
);