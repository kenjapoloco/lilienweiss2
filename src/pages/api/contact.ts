import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function sendmail(req: NextApiRequest, res: NextApiResponse) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "atsuko.t706@gmail.com",
      pass: "upwt vzvq gsvm gusp",
    },
  });

  //管理人が受け取るメール
  const toHostMailData = {
    from: `${req.body.email}`,
    to: "atsuko.t706@gmail.com",
    subject: `【お問い合わせ】${req.body.name}様より`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `
      <p>【名前】</p>
      <p>${req.body.name}</p>
      <p>【メールアドレス】</p>
      <p>${req.body.email}</p>
      <p>【電話番号】</p>
      <p>${req.body.tel}</p>
      <p>【メッセージ】</p>
      <p>${req.body.message}</p>

    `,
  };

  transporter.sendMail(toHostMailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.send("success");
}