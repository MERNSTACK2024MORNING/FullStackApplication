const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors  = require('cors');
app.use(cors());
dotenv.config();
app.use(express.json());

const authRoutes = require('./routes/authRoute');
const adminRoute = require('./routes/adminRoute')
const studentRoute = require('./routes/studentRoute')
const classRoute = require('./routes/classRoute')

app.use('/api/auth/',authRoutes);
app.use('/api/admins',adminRoute);
app.use('/api/students',studentRoute);
app.use('/api/class',classRoute);


const port = process.env.PORT
app.listen(port,()=>{
      console.log(`http://localhost:${port}`)
})