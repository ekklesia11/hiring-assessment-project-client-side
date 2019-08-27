const express = require('express');
const fetch = require('node-fetch')
const cors = require('cors')
const app = express();

const PORT = process.env.PORT || 5000;

const data = {
  users: []
};

app.use(cors())

app.use(async (req, res, next) => {
  let users = await fetch('https://koreanjson.com/users')
  .then(res => res.json())
  .then(users => users)
  data.users = users;
  next();
})

app.get('/', (req, res) => {
    res.send(JSON.stringify(data.users))
})

app.get('/:id', (req, res) => {
  let user = data.users.filter(user => user.id === Number(req.params.id))
  res.send(JSON.stringify(user[0]));
})

app.get('/todos/:id', async (req, res) => {
  let todos = await fetch(`https://koreanjson.com/todos?userId=${req.params.id}`)
    .then(res => res.json())
    .then(todos => todos)
  res.send(JSON.stringify(todos));
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}....`)
})