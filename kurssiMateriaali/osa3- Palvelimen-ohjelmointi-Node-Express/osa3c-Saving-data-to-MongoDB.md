# Saving data to MongoDB

## MongoDB Atlas and Compass

Remember to give whitelist IP.
Copy connection string and use it in .env file and keep it off of github.

## Schema.

Mongoose has some basic validators like required or mix/maxlength, but costum validators are nice way to handle anything.
Or virtual middlewares.

validator can send back err.response.data.message which is easy to pass at frontend and warn user.

transform is good trick to turn mongo object into json and rip \_id OBJECT and \_\_v off and just show id.
There are also other sanitation tricks, but for now those were not asked.

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

//¤ https://mongoosejs.com/docs/api/document.html#transform

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Person', personSchema);

```

## Error handling

**BACKEND**

Learned that catchAsync method with Class AppError to have nice way to clean code to different modules.
Making errorHandler module for AppError to separate DEV and PROD with mongoose CastError, ValidationError, 11000 or duplicate key. Those are mandatory it seems.

**FRONTEND**
Applied same catchAsync to front first time. It was a bit of a challenge. But that showed how to handle backend response messages at front
