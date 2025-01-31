const {PrismaClient} = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt  = require('jsonwebtoken');
const prisma = new PrismaClient();

exports.getAllAdmins = async(req,res)=>{
      const admins = await prisma.admin.findMany({
            select:{
                  id:true,
                  username: true,
                  createdAt: true
            }
      })
      res.json(admins)
}

exports.createAdmin = async(req,res)=>{
      const {username,password} = req.body;
      if(!username || !password){
            res.status(400).json({
                  message:"username and password are required"
            })
      }
      const existingAdmin = await prisma.admin.findUnique({
            where:{
                  username
            }
      })
      if(existingAdmin){
            res.status(400).json({
                  message: "Already existing admin"
            })
      }
      const hashedpassword = await bcrypt.hash(password,10)
      const newAdmin = await prisma.admin.create({
            data:{
                  username,
                  password:hashedpassword
            },
            select:{
                  id:true,
                  username: true,
                  createdAt: true
            }    
      })
      res.status(201).json({
            message: "Admin created successfully"
      })
}

exports.adminLogin = async(req,res)=>{
      try {
            const {username,password} = req.body;
            const admin = await prisma.admin.findUnique({
                  where:{
                        username
                  }
            })
            if(!admin){
                  res.status(401).json({
                        message: "Invalid Credential"
                  })
            }
            const isInvalidPassword = await bcrypt.compare(password, admin.password)
            if(!isInvalidPassword){
                  res.status(401).json({
                        message: "Invalid Credential"
                  })
            }
            const token = jwt.sign(
                  {id: admin.id, username:admin.username, role: 'admin'},
                  process.env.JWT_SECRET,
                  {expiresIn: '1d'}
            )
            res.status(200).json({
                  token,
                  admin:{
                  id: admin.id,
                  username: admin.username
                  }
            })
      } catch (error) {
            
      }
}

// updat admin
exports.updateAdmin = async(req,res)=>{
      try {
            const {id} = req.params;
            const {username,password} = req.body;
            const data = {};
            if(username) data.username = username
            if(password) data.password =await bcrypt.hash(password,10)
const adminUpdate = await prisma.admin.update({
      where:{id:Number(id)},
      data,
      select:{
            id:true,
            username:true,
            createdAt: true
      }
})
res.status(200).json({
      message: `Successfully updated a admin = ${id} `
})
            } catch (error) {
            
      }
}