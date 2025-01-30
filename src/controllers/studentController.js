const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

exports.getAllStudents = async(req,res)=>{
      try {
            const students = await prisma.student.findMany({
                  orderBy:{
                        registrationDate:'desc'
                  }
            })
            res.status(200).json({students})
      } catch (error) {
            console.log('Error Fetching Students',error)
      }
};

// Create a new Student
exports.createStudent = async(req,res)=>{
      try {
            const {firstName,lastName,email,phoneNumber} = req.body;
            if(!firstName || !lastName || !email || !phoneNumber)return res.status(400).json({
                  message: "Invalid email or phone number or firstName and lastName please provide a success"
            })
            const existingStudent = await prisma.student.findUnique({
                  where:{
                        email
                  }
            })
            if(existingStudent){
                  return res.status(400).json({
                        message: "A student with this email already exists"
                  })
            }
            const student = await prisma.student.create({
                  data:{
                        firstName,
                        lastName,
                        email,
                        phoneNumber:phoneNumber || null
                  }
            })
            res.status(201).json({
                  message: "successfully created a new Student"
            })
      } catch (error) {
            
      }
};
// Update
exports.updateStudent = async(req,res)=>{
      try {
          const {id} = req.params;
          const {firstName,lastName,email,phoneNumber} = req.body;
const student = await prisma.student.update({
      where:{
            id:Number(id)
      },
      data:{
            firstName,
            lastName,
            email,
            phoneNumber:phoneNumber || null
      }
})
res.status(200).json({
      messages: `successfully updated on student ${id}`
})
      } catch (error) {
            
      }
};

// Delete
exports.deleteStudent = async(req,res)=>{
      try {
          const {id} = req.params;
const student = await prisma.student.delete({
      where:{
            id:Number(id)
      }
})
res.status(200).json({
      messages: `successfully deleted on student ${id}`
})
      } catch (error) {
            
      }
};
