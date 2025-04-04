const pool = require('../config/db');

async function createUser(name, email, hashedPassword) {
  const res = await pool.query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
    [name, email, hashedPassword]
  );
  return res.rows[0];
}

async function findUserByEmail(email) {
  const res = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return res.rows[0];
}

module.exports = { createUser, findUserByEmail };