const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.post('/send-message', function (req, res) {
    console.log(req.body);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'heliocenture@gmail.com',
            pass: 'uiiujodomujschwt',
        }
    });

    let name = req.body.name;
    let phone = req.body.phone;
    let email = req.body.email;
    let service = req.body.service;
    let adBudget = req.body.adbudget;

    var data = {
        name,
        phone,
        email,
        service,
        adBudget
    }

    console.log(data);

    var mailOptions = {
        from: name,
        to: 'heliocenture@gmail.com',
        subject: 'New Enquiry',
        text: `Name: ${name}
        Phone number: ${phone}
        Email: ${email}
        Service Required: ${service}
        Ad-Budget: ${adBudget}`,
    };

    transporter.sendMail(mailOptions, function(error) {
        if (error) {
            console.log(error);
            res.send("<h1>Error sending your details!</h1>");
        } else {
            console.log("Details sent!");
            res.send("<h1>Your details have been sent!</h1>");
        }
    })

    if (res.statusCode === 200) {
        res.send("<h1>Your details have been sent!<h1>");
    } else {
        res.send("<h1>There was an error. Please try again!</h1>");
    }
});


app.listen(3000, () => console.log('Server started on port 3000'));
