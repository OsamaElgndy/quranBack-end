import * as dotenv from 'dotenv'

export const envVariables = {
 JWT_SECRET: process.env.JWT_SECRET,
 PORT: process.env.EMAIL_PORT,    // 3000
 EMAIL_USER: process.env.EMAIL_USER,
 EMAIL_PASS: process.env.EMAIL_PASS,
 SALT_ROUND: process.env.SALT_ROUND,
 CLIENT_URL: process.env.CLIENT_URL, // localhost:3000
 SECRETPHONE: process.env.SECRETPHONE,
 SECRETPASSWORD: process.env.SECRETPASSWORD,
};