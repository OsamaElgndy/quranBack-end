import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import  {envVariables} from '../constants/variables.service';
import { template } from './template.service';

@Injectable()
export class SendEmailService {

 private transporter: nodemailer.Transporter;
 constructor() {
  if (!envVariables.EMAIL_PASS || !envVariables.EMAIL_USER) {
    throw new Error('EMAIL_ACCOUNT and PASSWORD_EMAIL must be defined');
  }
  this.transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: envVariables.EMAIL_USER,
      pass:   envVariables.EMAIL_PASS,
    },
  });
 }
 
 
 async  main( {code}: { code: string }) {
      console.log(envVariables.CLIENT_URL);
 Server: "email"
 const info = await this.transporter.sendMail({
  from: envVariables.EMAIL_USER, 
  to: "osamaproud01@gmail.com", 
  subject: "الرسالة بتاعت كلمة السر", 

  html:template(code),  // html body
 });
console.log("Message sent: %s", info.messageId);

}

}