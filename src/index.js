import '@babel/polyfill';
import express from 'express';
import createStore from './store/createStore';

const port = process.env.port || 3000;
const app = express();

app.use((req, _res, next) => {
  console.log(`${new Date()} -- Requested path: ROOT${req.url}`);
  next();
});

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();
  res.send(`You're at ${req.url}`);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});