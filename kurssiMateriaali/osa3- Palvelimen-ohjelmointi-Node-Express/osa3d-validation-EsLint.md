## Eslint

Kannattaa käyttää plugaria.

npm install eslint --save-dev

npx eslint --init

You can also run this command directly using 'npm init @eslint/config'.
√ How would you like to use ESLint? · style  
√ What type of modules does your project use? · commonjs
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ How would you like to define a style for your project? · prompt
√ What format do you want your config file to be in? · JavaScript
√ What style of indentation do you use? · tab
√ What quotes do you use for strings? · single
√ What line endings do you use? · windows
√ Do you require semicolons? · No / Yes
Successfully created .eslintrc.js file in

```
Konfiguraatiot tallentuvat tiedostoon .eslintrc.js:

module.exports = {
    'env': {
        'commonjs': true,
        'es2021': true,
        'node': true
    },
    'extends': 'eslint:recommended',
```

## RENDER

**PAKKO** Muuta frontin urlit http://localhost:3001/api/persons ==> /api/persons
**PAKKO** poista kaikki console.logit

Buildaa frontti ja siirrä se dist filu backend repoon.

Render automaattisesti luo NODE_ENV:production Jos et määritä environmenttia.

Miten sain renderin toimimaan:

Environment:
MONGODB_URI: db urli
NODE_ENV:development tai prodution
PORT: 3001

Build Command: npm install
Start Command: npm run start

### PROCESS for Render.com Backend and Frontend.

**TIP with render: Set env variable key:PORT and value: (what you want /3001) otherwise port is default 10k**
Build the front from osa2 the phonebook in the project with command npm run build. Remember to edit and remove the localhost
Take the folder and move it to the backend project folder.

Use Express static to server your Build from the folder.
**Should be after app.use(express.json())**

```
app.use(express.static('dist'))
```

TEST: npm start => go to localhost:3001 should render the webpage.

## This repo contains FullstackOpen course exercises from part 3 Node.js and Express

**URL for Render.com: https://osa3-phonebook-done.onrender.com/**
Remember to wait for Render to give CPU resources for website to show up.
Project is using production mode while on render.

## MongoDB

Create Cluster if you don't have it, add user and password with privledges.
Install Compass for easier access and add new connection string that website gave.
Add creds and connect.
Create new DB (persons) and Collection(persons) Save.

Create environmental variables for the database in config.env and use it instead some code in index.js

## Mongoose

npm i mongoose
const mongoose = require("mongoose")

### Mongoose schema based validation

- Using minLength => mongoose default validation with a text that can be sent back to the user.
- custom validator handling the phone number check with a message to warn user if invalid number

```
const personSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: [3, 'Name must be be at least 3 characters long.'],
      required: [true, 'A person must have a name.'],
    },
    number: {
      type: String,
      required: [true, 'A person must have a number '],
      minlength: [8, 'Phone number must be at least 8 characters long.'],
      validate: {
        validator: function (v) {
          return /^(\d{2,3})-(\d{5,8})$/.test(v);
        },
        message: (props) =>
          `${props.value} is not a valid phone number! A valid phone number should be in the format: 09-1234556 or 040-22334455`,
      },
    },
  },
  { collection: 'person' }
);

```

Triggering the mongoose validatorError in personController.js to send 400 statuscode instead of 500 and applying wanted data so that
errorHandler.js can handle it properly.

```
const createPerson = catchAsync(async (req, res, next) => {
  const person = req.body;

  if (!person.name || !person.number) {
    return next(new AppError('Add name or number', 400));
  }

  try {
    const newPerson = await Person.create(person);
    res.json(newPerson);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return next({
        message: error.errors.number.message,
        statusCode: 400,
        status: 'fail',
        isOperational: true,
      });
    }
    next(error);
  }
});



```

Data comes to errorHandler (remember to have next in exports).
Now error handling chain has changed the basic mongoose statusCode error to 400 instead of 500 and when ValidationError is sent to prod function it can be sent to user as a err message.

```
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendDevError(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    sendProdError(err, res);
  }
};



const sendProdError = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.error('ERROR 💥', err);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong!',
    });
  }
};

```
