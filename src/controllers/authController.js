const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');
const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      res.status(400).json({
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hashSync(password,salt)
    const user = await prisma.user.create({
      data: {
        email,
        password:hashedPassword,
        name,
      },
    });
    const token = jwt.sign(
      {userId: user.id},
      process.env.JWT_SECRET,
      {expiresIn: '1h'}
    );

    res.status(201).json({
      message: "User registered successfully",
      token
    });
  } catch (error) {}
};


//Login
const login = async(req,res)=>{
  try {
    const {email,password} = req.body;
    const user = await prisma.user.findUnique({
      where:{
        email
      }
    })
    if(!user){
      res.status(400).json({
        message: "fadlan email ama password ka mid ayaa kaa qaldan"
      })
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if(!isPasswordValid)return
    const token = jwt.sign(
      {userId: user.id},
      process.env.JWT_SECRET,
      {expiresIn: '1h'}
    )
    res.status(200).json({
      message: "Login Successfully",
      token
    })
  } catch (error) {
    
  }
};


const getUsers = async(req,res)=>{
      try {
            const users = await prisma.user.findMany();
            res.status(200).json(users);
      } catch (error) {
            
      }
};

module.exports ={
      register,
      getUsers,
      login
}