const jwt = require('jsonwebtoken');
exports.authenticateToken = (req,res,next)=>{
      const authHeader = req.headers['authorization'];
      const token  = authHeader && authHeader.splite('')[1]
      if(!token){
            res.status(401).json({message: "Authentication required"})
      }
      try {
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            req.userId = decoded.userId;
            next();
      } catch (error) {
            
      }
};


exports.isAdmin = async(req,res,next)=>{
      try {
            if(req.user.role !== 'admin'){
                  res.status(403).json({
                        message: "access denied for admin only"
                  })
            }
            next();
      } catch (error) {
            
      }
}