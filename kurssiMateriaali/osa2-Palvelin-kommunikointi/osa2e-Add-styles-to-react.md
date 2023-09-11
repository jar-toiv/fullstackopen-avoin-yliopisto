# Adding styles to React app

Css [preprocessor](https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor)

Create index.css and import in in main.jsx
Reset styles in css file
Start creating styles if not using preprocessor

### Css rules

Selectors: define which element the rule should be applied to.
Declaration: sets the color green

```
h1 {
  color: green;
  font-style: italic;
}

OR

li {
  color: grey;
  padding-top: 3px;
  font-size: 15px;
}
```

### Class selectors

In React using className is a must. In html it would be class=
Having class binds only the given element for that styling

```
 return
    <li className='note'>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>

**Defining class selector in css**

.note {
  color: grey;
  padding-top: 5px;
  font-size: 15px;
}

```

## Normalize or More radical reset all styles what comes from browser

It is good practice to remove all style features that get pushed in by browser.

For example you can add this to top of your css file or you can use even link to pre created styles/ resets.

```
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section {
  display: block;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}
```

## Improved error message

Adding styling for errors in Notes practice program.

```
const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className='error'>
      {message}
    </div>
  )
}

```

### Setting useState for Errors and using it.

```
const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const [errorMessage, setErrorMessage] = useState(null)

  // ...

  return (
    <div>
      <h1>Notes</h1>

      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      // ...
    </div>
  )
}

```

```
Catching the error and called setEMsg state with the Notification component
.catch(error => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })


```

```
Notification Component

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className="error">{message}</div>;
};

```

## [Inline](https://react-cn.github.io/react/tips/inline-styles.html) styles

Inline rules:
Pseudo-classes cant be used well [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

Old school way is to separate js,html and css, but is heavy with bigger projects.
React developers wanted to embed all together in jsx files.

Adding styles into elements using style= (can be object or declared in div)

There is style object created in Footer component and then rendered in App return() with the wanted logic
**This could prolly be good for state changes, unless want to do it in css.**

```
const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2023</em>
    </div>
  )
}

const App = () => {
  // ...

  return (
    <div>
      <h1>Notes</h1>

      <Notification message={errorMessage} />

      // ...


      <Footer />
    </div>
  )
}
```
