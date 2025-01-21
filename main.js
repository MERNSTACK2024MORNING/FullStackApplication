import express from 'express';
import {PrismaClient} from '@prisma/client'
const app = express();
const port = 8000
const prisma = new PrismaClient();

app.get('/all',async(req,res)=>{
      const all = await prisma.user.findMany();
res.json(all)
})
app.listen(port,()=>{
      console.log(`http://localhost:${port}`)
})