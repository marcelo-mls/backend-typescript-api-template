import app from './app';

const PORT = 3001;

app.get('/example', (_req, res) => {
  return res.status(200).json('Hello, World!');
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));