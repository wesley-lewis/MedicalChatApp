const express = require('express')
const cors = require('cors')

const authRoutes = require('./routes/auth.js')

const app = express()
const PORT = process.env.PORT || 5000

require('dotenv').config();



app.use(cors());
// express.json() will allow us to send json payloads from frontend to the backend
app.use(express.json());
// urlencoded is a long string of (name, value) pairs which are created and sent to the backend. Each (name, value) pair is seperated by an & sign.
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Hello world')
})


app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
