import * as dotenv from 'dotenv'

export const envVariables = {
 JWT_SECRET: process.env.JWT_SECRET,
 PORT: process.env.EMAIL_PORT,    // 3000
 USER_EMAIL: process.env.USER_EMAIL,
 USER_PASSWORD: process.env.USER_PASSWORD,
 SALT_ROUND: process.env.SALT_ROUND,
 CLIENT_URL: process.env.CLIENT_URL, // localhost:3000
 SECRETPHONE: process.env.SECRETPHONE,
 SECRETPASSWORD: process.env.SECRETPASSWORD,
};