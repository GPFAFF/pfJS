import express from 'express';
import path from 'path';

const port = 5555;
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './src/index.html'));
});

app.listen(port, (error) => {
  if (error) {
    console.log('Error', error)
  } else {
    console.log(`pfJS listening on port ${port}!`)
  }
});
