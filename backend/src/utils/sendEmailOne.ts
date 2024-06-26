import { EmailUser } from "../types/interfaces";
import { Message, sendEmail } from "../utils/sendEmail";

export class sendEmailOne extends sendEmail {
  firstName: string;
  constructor(options: EmailUser, url: string) {
    super(options, url);
    this.firstName = options.name ? options.name.split(" ")[0] : "";
  }

  async sendPasswordReset() {
    await this.send("passwordReset", {
      subject: "Your password reset token (only valid for 10 mins)",
    });
  }
}
