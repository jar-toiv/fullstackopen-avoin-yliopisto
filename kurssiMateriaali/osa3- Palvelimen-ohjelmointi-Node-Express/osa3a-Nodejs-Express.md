# Nodejs and Express

## Starting Nodejs

Create project folder and go to the root of it. initialize npm init and fill wanted fields.
Create index.js to the root with log("hello") to test program.
Terminal npm start if you have the script set up. Terminal should output log

```
  "scripts": {
    "start": "node index.js",
  }
```

## Simple web server

**NOTE this is not Express**
Change to code and you can visit the url when npm start is done. You should see hello world.

```
Non Express server from node package.
const http = require('http')

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Hello World')
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

```

```
const http = require('http');

let notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true,
  },
];
const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(notes));
});
const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);

```

## Express

npm install express

Change to code to use express now

```
const express = require('express')
const app = express()

let notes = [
  ...
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
```

## Nodemon

npm install --save-dev nodemon

File watcher, no more refresh page when updating SERVERSIDE project files.
Browser still requires reload, bc hotload is not enabled atm.

```
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

//# REST

URL -- verb -- functionality
notes/10 -- GET -- fetches a single resource
notes -- GET -- fetches all resources in the collection
notes -- POST -- creates a new resource based on the request data
notes/10 -- DELETE -- removes the identified resource
notes/10 -- PUT -- replaces the entire identified resource with the request data
notes/10 -- PATCH -- replaces a part of the identified resource with the request data

## Fetching a single resource

```
app.get('/api/notes/:id', (request, response) => {
  const id = request.params.id
  const note = notes.find(note => note.id === id)
  response.json(note)
})

```

Expanded with find

```
app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id) OR const id = +request.params.id
    const note = notes.find(note => note.id === id)

if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

```

## Deleting resources

Not sending back data just a correct statuscode

```
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})
```

## Receiving data

**Add json [parser](https://expressjs.com/en/api.html) always**
app.use(express.json())

Posting data to server as json

```
app.post('/api/notes', (request, response) => {
  const note = request.body
  console.log(note)
  response.json(note)
})
```

### Postman setup

Add new folder when you save POST request to url localhost:3001/api/notes
Add body => JSON with object:

```
{
    "content": "postman is good in testing backend",
    "important": true
}
```

Answer to VSCODE.

[nodemon] starting `node index.js`
Server running on port 3001
{ content: 'postman is good in testing backend', important: true }
