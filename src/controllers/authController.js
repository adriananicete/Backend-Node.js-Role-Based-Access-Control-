import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/userSchema.js";

export const register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword, role });

    await newUser.save();

    res
      .status(201)
      .json({ message: `User registered with username ${username}` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const findUsername = await User.findOne({ username });
    if (!findUsername) return res.status(404).json({ error: "User not Found!" });

    const isMatch = await bcrypt.compare(password, findUsername.password);
    if(!isMatch) return res.status(400).json({error: 'Bad Request!'});

    const token = jwt.sign({id: findUsername._id, role: findUsername.role}, process.env.JWT_SECRET_KEY,{ expiresIn: '1h'});

    res.status(200).json({
        status: 'Login Successfully',
        data: {
            username: findUsername.username,
            role: findUsername.role
        },
        token: token
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'Something went wrong'});
  }
};
