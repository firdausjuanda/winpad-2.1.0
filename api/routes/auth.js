const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });
        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err) {
        console.log(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(404).send('User not found');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    !validPassword && res.status(400).send('Password is invalid');
    
    res.status(200).send(user);

    } catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;