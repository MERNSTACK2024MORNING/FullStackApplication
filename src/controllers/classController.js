const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// this function takes  All classes
exports.getAllClasses = async (req, res) => {
  try {
    const classes = await prisma.class.findMany({
      orderBy: {
        className: "asc",
      },
    });
    res.status(200).json({
      classes,
    });
  } catch (error) {
    console.log("there are error in server");
  }
};

//create a new class function
exports.createClass = async (req, res) => {
  try {
    const { className, classCode, instructorName, scheduleTime } = req.body;
    if (!className || !classCode || !instructorName || !scheduleTime) {
      return res.status(400).json({ message: "Invalid class" });
    }
    const existingClass = await prisma.class.findUnique({
      where: { classCode },
    });
    if (existingClass) {
      return res.status(400).json({ message: "Class already exists" });
    }
    const newClass = await prisma.class.create({
      data: {
        className,
        classCode,
        instructorName,
        scheduleTime,
      },
    });
    res.status(201).json({
      messge: "sucessfully created a new Class"
    })
  } catch (error) {}
};


//update a class function
exports.updateClass = async (req, res) => {
      try {
        const { className, classCode, instructorName, scheduleTime } = req.body;
        const{id } = req.params
        if (!className || !classCode || !instructorName || !scheduleTime) {
          return res.status(400).json({ message: "Invalid class" });
        }
        const existingClass = await prisma.class.findUnique({
          where: { classCode },
        });
        if (existingClass) {
          return res.status(400).json({ message: "Class already exists" });
        }
        const udpateClass = await prisma.class.update({
            where:{id:Number(id)},
          data: {
            className,
            classCode,
            instructorName,
            scheduleTime,
          },
        });
        res.status(201).json({
            messge: `sucessfully updated a  Class ${id}`
          })
      } catch (error) {}
    };


//Delete a class function
exports.deleteClass = async (req, res) => {
      try {
        const {id } = req.params
        const deleteClass = await prisma.class.delete({
         where:{id:Number(id)}
        });
        res.status(201).json({
            messge: `sucessfully deleted a Class = ${id}`
          })
      } catch (error) {}
    };
    
    