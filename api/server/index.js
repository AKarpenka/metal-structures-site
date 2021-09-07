const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const cors = require('cors');
const nodemailer = require('nodemailer');
const responseUtils = require('./response-utils');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8888;

app.use(cors());
app.use(express.json()); 

app.post('/callMe', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'user',
            pass: 'pass'
        }
    });

    const mailOptions = {
        from: 'andrewklimenkov@gmail.com',
        to: 'klimenkov94@list.ru',
        subject: 'Test mail',
        html: `<div>Клиент: <b>${req.body.username}</b></div><div>Телефон: <b>${req.body.telephone}</b></div><div>Сообщение клинта: <b>${req.body.message}</b></div>`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            responseUtils.createErrorResponse(res, error);
        } else {
            responseUtils.createSuccessResponse(res, `Email sent: ${info.response}`);
        }
    });
});

app.post('/sendDesign', upload.single("file"), (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'user',
            pass: 'pass'
        }
    });

    const mailOptions = {
        from: 'andrewklimenkov@gmail.com',
        to: 'klimenkov94@list.ru',
        subject: 'Test mail',
        html: `<div>Клиент: <b>${req.body.username}</b></div><div>Телефон: <b>${req.body.telephone}</b></div><div>Сообщение клинта: <b>${req.body.message}</b></div>`,
        attachments: [
            {   
                filename: req.file.originalname,
                content: fs.createReadStream(path.join(__dirname, `../uploads/${req.file.filename}`))
            }
        ]
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            responseUtils.createErrorResponse(res, error);
        } else {
            fs.unlinkSync(path.join(__dirname, `../uploads/${req.file.filename}`));
            responseUtils.createSuccessResponse(res, `Email sent: ${info.response}`);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
