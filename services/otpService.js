import OTPGenerator from 'otp-generator';

export const generateOTP = () => {
  return OTPGenerator.generate(5, { digits: true, alphabets: false, upperCase: false, specialChars: false });
};
