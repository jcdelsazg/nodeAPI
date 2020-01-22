import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send(`Node and Express server running and port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your serve is running on port ${PORT}`);
});
