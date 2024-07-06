const jwt=require('jsonwebtoken');
const JWT_SECRET='changululla18';

const fetchuser=(req,res,next)=>{


    const token=req.header('auth-token');
    if(!token)
    {
        res.status(401).send({error:"Invalid Token"});
    }
  try {
    const data=jwt.verify(token,JWT_SECRET);
    req.user=data.user;
  } catch (error) {
    res.status(401).send({error:"Invalid Token"});
  }

    next();

}


module.exports=fetchuser;