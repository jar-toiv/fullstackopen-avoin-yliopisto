# Getting data from server

## Recourses and useful links

Event loop [link](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
Web workers [link](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)

## Tools

### JSON [Server](https://github.com/typicode/json-server)

Install globally if used in other projects in this course.
Navigate to project folder.
If you do not create db.json the server will create it autom. with dummy data.
When server runs go to http://localhost:3001/notes and you should see data in JSON form.

```
npm install -g json-server
```

```
adding Dev dependency
npm install json-server --save-dev
```

Add script to package.json to add watch to run server faster.

```
 "server": "json-server -p3001 --watch db.json"
```

Run the server.
Define the port 3001 for now. Default was 3000

```json-server --port 3001 --watch db.json

```

Create file at root called db.json for **Notes** course teaching program.

```
db.json content:
{
  "notes": [
    {
      "id": 1,
      "content": "HTML is easy",
      "important": true
    },
    {
      "id": 2,
      "content": "Browser can execute only JavaScript",
      "important": false
    },
    {
      "id": 3,
      "content": "GET and POST are the most important methods of HTTP protocol",
      "important": true
    }
  ]
}
```

### Axios

**Axios uses content-type: "application/json; charset=utf-8" to handle the string that comes from server.**

JS [library](https://github.com/axios/axios) to coms between browser and server.
Axios returns promise that has one of 3 states:

- Pending
- [PromiseSate "fulfilled"] - [PromiseResult **OBJECT**]
- [PromiseState "rejected"]- [PromiseState AxiosError] which is **OBJECT** with message, name, code, config, request. etc

Remember to install into project folder.
Remember to import import axios from "axios"

```
npm install axios
```

Testing what axios gives with working and non working url:

```
import axios from 'axios';

const promise = axios.get('http://localhost:3001/notes');
console.log(promise);

const promise2 = axios.get('http://localhost:3001/foobar');
console.log(promise2);

```

We wait promise from the url and then if we want to handle it use (.then) event handler

```
const promise = axios.get('http://localhost:3001/notes')

promise.then(response => {
  console.log(response)
})
```

### Consuming the promise

Using .then to consume the promise

```
const promise = axios.get('http://localhost:3001/notes').then((response) => {
  const notes = response.data;
  console.log(notes);
});
```

## Fetching data from server

**HACK** Just to test db basicly.

Modify main.jsx to connect localhost with argument notes then consume successful promise into notes variable.
Use React virtual DOM to render <App with notes as object>

**NOT RECOMENDED** use App.jsx instead to axios.get method

```
Main.jsx

import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App'

axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
})
```

## Featching data from server in APP.jsx ( axios and useEffect)

Return main.jsx back to render only APP no more notes from main.jsx.

```
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

### Effect hook with axios

1. useEffect:
   The useEffect hook is a part of the React Hooks API. It allows you to perform side effects (like data fetching, manual DOM manipulations, setting up subscriptions, etc.) in function components.

2. The hook takes two arguments: **a function where you place your effect**, and **a dependency array**.

3. An empty dependency array ([]) means the useEffect will only run once. This is useful for operations like data fetching on component mount where you only want the operation to occur once and not on every re-render.
   If you put any variable inside this array, the useEffect will re-run whenever that particular variable changes its value.

Separating the hook and dependency from axios call. **hook** functions has to be init before useEffect hook like below.

```
const hook = () => {
    axios.get('http://localhost:3001/notes').then((res) => {
      setNotes(res.data);
    });
  };

  useEffect(hook, []);


```
