import express from 'express';
import webpack from 'webpack';
import path from 'path';
/* eslint-disable import/default*/
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

app.listen(port, (error) => {
  /* eslint-disable no-console */
  (error) ? console.log('Error', error) : console.log(`pfJS listening on port ${port}!`);
});
