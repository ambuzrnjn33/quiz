const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const questionsRouter = require('./routes/questions');

const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost:27017/devops-quiz', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());
app.use('/api/questions', questionsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

