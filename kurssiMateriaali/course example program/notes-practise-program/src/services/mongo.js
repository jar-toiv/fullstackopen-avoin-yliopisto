const mongoose = require('mongoose');
require('dotenv').config();

const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoHost = process.env.MONGO_HOST;
const mongoDBName = process.env.MONGO_DB_NAME;

const url = `mongodb+srv://${mongoUser}:${mongoPassword}@$${mongoHost}${mongoDBName}?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to Mongo');
  })
  .catch((error) => {
    console.log('error connecting to Mongo'.error.message);
  });

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model('Note', noteSchema);

const note = new Note({
  content: 'HTML is Easy',
  important: true,
});

note.save().then((result) => {
  console.log('note saved!');
  mongoose.connection.close();
});
