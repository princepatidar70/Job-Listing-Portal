import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import JobSeeker from "../schema/jobseeker.schema";

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
  
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    const newUser = new JobSeeker({ name, email, password: hashedPassword });
  
    try {
      await newUser.save();
      console.log("res",res);
      
      res.status(201).json({ message: 'User registered successfully',  });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    const user = await JobSeeker.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });
  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
  
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
  
    res.json({ token });
  });