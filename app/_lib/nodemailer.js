import nodemailer from "nodemailer";

const email = process.env.NODEMAILER_EMAIL;
const password = process.env.NODEMAILER_PASS;
const ccEmail = process.env.NODEMAILER_CCEMAIL;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: email,
    pass: password,
  },
});

export const mailOptions = {
    from: email,
    to: email,
    cc: ccEmail,
}

