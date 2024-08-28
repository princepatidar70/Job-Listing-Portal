
import express from 'express';
import JobSeeker from '../schema/jobseeker.schema.js';

const router = express.Router();

router.post('/register',async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new JobSeeker({ name, email, password });
    try {
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully',  });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
 
});



export default router;
