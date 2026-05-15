import express, { Request, Response } from "express";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import cors from "cors";
import fs from "fs";
import creds from "./config";
import { error } from "console";

const app = express();
const router = express.Router();

const serverPort = 5000;

app.use(cors());
app.use(express.json());
app.use("/", router);

const transportConfig: SMTPTransport.Options = {
  host: creds.HOST,
  port: creds.PORT,
  secure: false,
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
};

const transport = nodemailer.createTransport(transportConfig);
transport.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

app.get("/", (req: Request, res: Response) => {
  res.json("Test");
});

app.listen(serverPort, () => {
  console.log(`Backend is running on port ${serverPort}`);
});

router.post("/send", async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  const senderEmail = `${name} <${creds.EMAIL}>`;

  const yourEmail = `${creds.YOURNAME} <${creds.EMAIL}>`;

  const content = `
    Name: ${name}
    Email: ${email}
    Message: ${message}
  `;

  const mail = {
    from: senderEmail,
    to: creds.EMAIL,
    subject: `Nytt meddelande från ${name}`,
    text: content,
  };

  try {
    // Send mail to yourself
    await transport.sendMail(mail);

    // Auto reply
    await transport.sendMail({
      from: yourEmail,
      to: email,
      subject: "Meddelande mottaget",
      text: `Hej ${name},
      
Tack för att du hörde av dig. Jag har mottagit ditt meddelande och återkommer inom kort.

Vänliga hälsningar,
${creds.YOURNAME}
${creds.YOURSITE}
`,
    });

    res.json({
      status: "success",
    });
  } catch (error) {
    console.error(error);

    res.json({
      status: "fail",
    });
  }
});
