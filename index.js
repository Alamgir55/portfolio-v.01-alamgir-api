
const express = require('express');
const server = express();

const portfolioRoutes = require('./router/portfolios');

server.get('/test', (req, res) => {
  return res.json({message: 'test is working'});
})

server.use('/api/v1/portfolios', portfolioRoutes);


const PORT = parseInt(process.env.PORT, 10) || 3001;
server.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log('Server ready on port ', PORT);
})
