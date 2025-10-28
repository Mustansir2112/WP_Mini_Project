const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  const { fullName, email, password } = req.body;
  // Add your signup logic here
  console.log('Signup attempt with:', { fullName, email, password });
  res.send({ message: 'Signup successful' });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Add your login logic here
  console.log('Login attempt with:', { email, password });
  res.send({ message: 'Login successful' });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
