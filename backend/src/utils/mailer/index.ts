import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { ICustomer } from '../../types';

dotenv.config()

const transporter = nodemailer.createTransport({
    host: 'smtp.infomaniak.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PSWD
    },
});


const sendMail = ({ gain, customer }: { gain: string, customer: ICustomer }) => {
  const mailOptions = {
      from: `Yummy Yams - ${process.env.SMTP_MAIL}`,
      to: customer.email,
      subject: `Bravo ${customer.firstName}  ${customer.lastName} ! Vous avez gagné à notre jeu !`,
      text: `Vous avez gagné ${gain}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Erreur lors de l\'envoi du mail :', error);
    } else {
        console.log('Mail envoyé avec succès ! Réponse du serveur :', info.response);
    }
  })
}

export default sendMail