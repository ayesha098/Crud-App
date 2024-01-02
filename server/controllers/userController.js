
const { signupmodel } = require('../models/signup');
const jwt = require("jsonwebtoken");
const key = "secret"


const signup = (req, res) => {
    signupmodel.create({
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        dob: req.body.dob,
        phone: req.body.phone,
        gender: req.body.gender,
        password: req.body.password
    })
        .then(users => {
            res.json(users)
            console.log(users)
           
        })
        .catch(err => {
        console.log(err);
         
        });
};
const signupread = (req, res) => {
    signupmodel.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
}
const login = (req, res) => {
    jwt.sign(req.body, key, (err, token) => {
        res.json({token})
        console.log({ token })

    })
}
const auth = async(req, res) => {
    const token = req.body.token;

    try {
        var d = jwt.verify(token, key);
        console.log('Email:', d.user_email);
        console.log('Password:', d.password);

        const user = await signupmodel.findOne({ user_email: d.user_email, password: d.password });

        if (user) {
            console.log('User found:', user);
            res.json(user);
        } else {
            console.log('User not found');
            res.json({ error: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }

   
}


module.exports = { signup, signupread, login, auth };
