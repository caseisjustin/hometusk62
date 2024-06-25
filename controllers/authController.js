import User from '../models/user.js';
import { generateOTP } from '../services/otpService.js';

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const otp = generateOTP(); // Generate OTP
    const user = await User.create({ name, email, password, role, otp });
    // Here you can send the OTP to the user via email, SMS, etc.
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ where: { email, otp } });
    if (!user) {
      res.status(401).json({ error: 'Invalid OTP' });
      return;
    }
    // Clear OTP after successful verification
    await user.update({ otp: null });
    // Generate JWT token for authenticated user (assuming you have implemented JWT functionality)
    const token = generateJWTToken(user); // Example function to generate JWT token
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
