import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { IMailProvider, Imessage } from "../IMailProvider";

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "1c37cc6912df81",
        pass: "78f41adfb70edf",
      },
    });
  }

  async sendMail(message: Imessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    });
  }
}
