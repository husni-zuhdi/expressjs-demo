'use strict';

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

// Handle register
exports.register = async (req, res) => {
    // Get User data
    const { first_name, last_name, email, password } = req.body;

    // User input validation
    if(!(email && password && first_name && last_name)) {
        res.status(400).json({
            error: true,
            message: "⛔Please provide all required data!"
        });
    };

    // Check if user is already registered in our service
    User.check(req.body.email, function(err, user) {
        if(!user) {
            console.log("err and user", err, user)
            res.status(409).json({
                error: true,
                message: "🙇‍♂️User Already Exist. Please Login"
            });
        }
    });

    // Encrypt the password
    const encryptPass = await bcrypt.hash(password, 10);

    const newUser = new User({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: encryptPass,
    });

    User.create(newUser, function(err, user) {
        if (err) {
            console.log(err)
            res.send(err);
        }

        // Create token
        const token = jwt.sign({
            user_id: user.insertId,
            email
        },process.env.TOKEN_KEY,{
        expiresIn: "2h",
        }
        );

        // Assign token to user
        user.token = token;

        res.status(201).json({
            error: false,
            message: "🎉Congrats you are registered",
            token: user.token
        });
    });
};

// Handle Login
exports.login = async (req, res) => {
    // Get Login data
    const  { email, password } = req.body;

    // Check email and password is in login data
    if(!(email && password)) {
        res.status(400).json({
            error: true,
            message: "⛔Please provide all required data!"
        });
    };

    // Check if user is already registered in our service
    User.check(req.body.email, (err, user) => {
        // console.log(user)
        if (err) {
            res.status(409).json({
                error: true,
                message: "🙇‍♂️User Haven't Registered. Please Register.",
                log: err
            });
        }
        

        // console.log(password, user[0].password)
        bcrypt.compare(password, user[0].password, function(err, match) {
            if (err){
                console.log(err)
                res.status(403).json({
                    error: true,
                    log: err
                  });
            }
            if (match){
                // Create token
                const token = jwt.sign({
                    user_id: user.id,
                    email
                }, process.env.TOKEN_KEY, {
                    expiresIn: "2h",
                }
                );

                // Assign token to user
                user[0].token = token;

                res.status(201).json(user[0]);
            } else {
              // response is OutgoingMessage object that server response http request
              return res.status(403).json({
                  error: true,
                  message: "🔑Passwords do not match"
                });
            }
          });
    });
};