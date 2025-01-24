
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());

const authRoutes = require('./routes/authRoute');
const adminRoute = require('./routes/adminRoute')

app.use('/api/auth/',authRoutes);
app.use('/api/admins',adminRoute);


const port = process.env.PORT
app.listen(port,()=>{
      console.log(`http://localhost:${port}`)
})