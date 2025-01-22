
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());

const authRoutes = require('./routes/authRoute');

app.use('/api/auth/',authRoutes);


const port = process.env.PORT
app.listen(port,()=>{
      console.log(`http://localhost:${port}`)
})