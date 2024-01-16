const jwt = require('jsonwebtoken');
const auth = (req,res,next)=>{
    try {
        const token = req.headers.authorization;
        if(!token){
            res.status(400).send({
                messgae : "token not found  user"
            })
        }
          let token2 = token.split(" ")[1];
          let user = jwt.verify(token2,"todoapp");
          req.body.userId = user.id;
        
         next();

    } catch (error) {
        res.status(400).send({
            messgae : "unauthorized user"
        })
    }
}

module.exports = {
    auth
}