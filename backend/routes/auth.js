const express=require('express');
const router=express.Router();
const User=require('../models/User');
const { body , validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
const JWT_SECRET='changululla18';

router.post('/createuser',[
    body('name','Enter valid name').isLength({min:3}),
    body('email','Enter valid email').isEmail(),
    body('password','Password length should be atleast 5').isLength({min:5})

],async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    try {
      let a= await User.findOne({email:req.body.email});
      if(a)
      {
        return res.status(400).send("Email Id Already in use");
      }
      const salt=await bcrypt.genSalt(10);
      const secPassword= await bcrypt.hash(req.body.password,salt);
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword
      });

      const data={

        user:{
          id:user.id
        }
      }


      const authToken=jwt.sign(data,JWT_SECRET);
      res.json({authToken});
      


       
    } catch (error) {
      if (error.code === 11000) {
        // Duplicate key error
        return res.status(400).json({ error: 'Email already exists' });
      }
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }

    
});

module.exports=router