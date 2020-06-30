
var nodemailer = require('nodemailer');
// email sender function
exports.sendEmail = function (link, mail) {
    // Definimos el transporter
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'mail@gmail.com',
            pass: 'password'
        }
    });
    // Definimos el email
    var mailOptions = {
        from: 'Sistema',
        to: mail,
        subject: 'Acceso a sistema',
        text: link
    };
    // Enviamos el email
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent");
           
        }
    });
};
