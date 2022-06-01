'use strict';

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

// Handle register
exports.register = async (req, res) => {
    // Get User data
    const { first_name, last_name, email, password } = req.body;

    // User input validation
    if(!(email && password && first_name && last_name)) {
        res.status(400).send({
            error: true,
            message: "⛔Please provide all required data!"
        });
    };

    // Check if user is already registered in our service
    const checkUser = User.check(req.body);

    if(checkUser) {
        res.status(409).send("🙇‍♂️User Already Exist. Please Login");
    }

    // Encrypt the password
    const encryptPass = await bcrypt.hash(password, 10);
    // console.log(encryptPass);


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

        res.json({
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
        res.status(400).send({
            error: true,
            message: "⛔Please provide all required data!"
        });
    };

    // Check if user is already registered in our service
    const user = User.check(req.body);

    if(user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign({
            user_id: user.data.id,
            email
        }, process.env.TOKEN_KEY, {
            expiresIn: "2h",
        }
        );

        // Assign token to user
        user.data.token = token;

        res.status(201).json(user);
    };
};