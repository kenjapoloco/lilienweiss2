import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function sendGmailer(req: NextApiRequest,res: NextApiResponse){
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASSWORD,
    },
  });

  const toHostMailData = {
    from:req.body.email,
    to: "atsuko.t706@gmail.com",
    subject:'$[お問い合わせ] ＄{req.body.email}様より',
    text: `${req.body.message} Send from ${req.body.email}`,
    html:`
      <p>【名前】</p>
      <p>${req.body.name}</p>
      <p>【メッセージ内容】</p>
      <p>${req.body.message}</p>
      <p>【アドレス】</p>
      <p>${req.body.email}</p>
    `,
  };

  transporter.sendMail(toHostMailData, function(err,info){
    if(err)console.log(err);
    else console.log(info);
  });　

}