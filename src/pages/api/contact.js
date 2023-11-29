import nodemailer from "nodemailer";

export default async function contactAPI(req, res) {
    //recupération des données depuis le fetch coté front-end
  try {
    const { nom, email, message } = req.body;

    // Validation des champs obligatoires pour vérification coté serveur 
    if (!nom || !email || !message) {
      return res.status(400).json({ message: "Tous les champs sont obligatoires." });
    }

    // Validation de l'e-mail pour vérification coté serveur 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "L'adresse e-mail n'est pas valide." });
    }

    // Configuration du transporteur Nodemailer pour l'envoi d'e-mails
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: "lucile.thieulin.dev@gmail.com",  
        pass: "zgbc vjnc pjdh kbza",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    
    transporter.verify(function(error, success) {
      if (error) {
        console.error("Erreur lors de la vérification du transporteur Nodemailer:", error);
      } else {
        console.log("Le transporteur Nodemailer est prêt à envoyer des e-mails");
      }
    });

    // Envoi de l'e-mail
    const mail = await transporter.sendMail({
      from: email,
      to: "lucile.thieulin.dev@gmail.com",
      replyTo: email,
      subject: `Nouveau message de ${nom}`,
      html: `
        <p> Nom: ${nom} </p>
        <p> E-mail: ${email} </p>
        <p> Message: ${message} </p>
      `,
    });

    console.log("Message envoyé:", mail.messageId);

    return res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erreur dans l'envoi de l'e-mail." });
    
  }
}