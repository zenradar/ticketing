import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/api/users/currentUser', (req, res) => {
  console.log('Request received.');
  res.send({"dummy": "text"});

});

app.listen(3003, () => {
  console.log('Listening on port 3003.');
});

