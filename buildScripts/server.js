import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';

const port = 5555;
const app = express();
const complier = webpack(config);

app.use(require('webpack-dev-middleware')(complier, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', (req, res) => {
  res.json([
    {"id": 1, "firstName": "Greg", "lastName": "Pfaff", "email": "greg.pfaff1@gmail.com"},
    {"id": 2, "firstName": "Greg2", "lastName": "Pfaff2", "email": "greg.pfaff2@gmail.com"},
    {"id": 3, "firstName": "Greg3", "lastName": "Pfaff3", "email": "greg.pfaff3@gmail.com"}
  ]);
});

app.listen(port, (error) => {
  /* eslint-disable no-console */
  (error) ? console.log('Error', error) : console.log(`pfJS listening on port ${port}!`);
});
