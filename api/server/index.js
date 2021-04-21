const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const responseUtils = require('./response-utils');

const PORT = process.env.PORT || 8888;

const app = express();

app.use(cors());
app.use(express.json());

app.post('/callMe', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'mail',
            pass: 'password'
        }
    });

    const mailOptions = {
        from: 'from',
        to: 'to',
        subject: 'Test mail',
        text: `${req.body.message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            responseUtils.createErrorResponse(res, error);
        } else {
            responseUtils.createSuccessResponse(res, `Email sent: ${info.response}`);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
