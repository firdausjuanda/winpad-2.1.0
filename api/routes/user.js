const User = require('../models/User');

const router = require('express').Router();

// Get all users
router.get('/', async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).send(users);
    } catch(err){
        res.status(404).send('User found!');
    }
})
// Get one user
router.get('/:username', async (req, res) => {
    try{
        const user = await User.findOne({ username: req.params.username });

        if(!user) {
            res.status(404).send('User not found');
        } else {
            res.status(200).send(user);
        }
        
    } catch (err) {
        res.status(404).send(err);
    }
    
})
// Update user
router.put('/:id', async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcript.hash(req.body.password, salt);
            }catch (err){
                res.status(500).send(err);
            }
        }
        await User.findOneAndUpdate({ _id: req.params.id }, {$set: req.body});
        res.status(200).send('Account updated');
    } else {
        return res.status(403).send('You cannot change the other\'s data');
    }
})

// Delete user
router.delete('/delete/:id', async (req, res) => {
    const user = await User.findOne({ _id: req.params.id })
    !user && res.status(404).send('User not found');
    if( req.body.userId === req.params.id || req.body.isAdmin ){
        try{
            await User.findOneAndDelete({ _id: req.params.id });
            res.status(200).send('Account deleted');
        } catch(err){
            res.status(500).send(err);
        }
    } else {
        return res.status(403).send('You cannot delete this user');
    }
})

module.exports = router;