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

app.get('/*', async (req, res) => {
  // console.log(req.url)
  let url = req.url;
  let id = url.split('/')[1];
  if (req.url === '/') {
    res.send(JSON.stringify(data.users))
  } else if (!isNaN(Number(id))) {
    let user = data.users.filter(user => user.id === Number(id))
    res.send(JSON.stringify(user[0]));
  } else {
    let last = id[id.length - 1];
    let todos = await fetch(`https://koreanjson.com/todos?userId=${last}`)
      .then(res => res.json())
      .then(todos => todos)
    res.send(JSON.stringify(todos));
  }
})








app.listen(PORT, () => {
  console.log(`Listening on ${PORT}....`)
})