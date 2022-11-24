import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";
export class MailTrapMailProvider implements IMailProvider{
  private transporter: Mail;
  constructor(){
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth:{
        user: '2cc3fe02bc39f9',
        pass: 'e4080398c643cd'
      }
    })
  }
  async sendMail(message: IMessage): Promise<void> {
      await this.transporter.sendMail({
        to:{
          name: message.to.name,
          address: message.to.email,
        },
        from: {
          name: message.from.name,
          address: message.from.email,
        },
        subject: message.subject,
        html: message.body
      })
  }
}