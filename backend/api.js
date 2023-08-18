import express from 'express';
import { database } from './database.js';
import cors from 'cors';


const app = express();
const port = 5000;
app.use(express.json());
app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  console.log("fnjdnf")
  res.send('Hello, World!');
});

app.get('/api/bog/users', (req, res) => {
    res.json(database).status(200);
});


app.get('/api/bog/users/:id', (req, res) => {
    const user = database.filter((user) => user.id === req.params.id)[0]
    res.json(user).status(200)
});


app.post('/api/bog/users', (req, res) => {
  database.push(req.body)
});

app.put('/api/bog/users/:id', (req, res) => {
  //todo
});

app.delete('/api/bog/users/:id', (req, res) => {
  //todo
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
