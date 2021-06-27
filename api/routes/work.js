const router = require('express').Router();
const Work = require('../models/Work');
const User = require('../models/User');

//  Create work
router.post('/create', async (req, res) => {
    try {
        const newWork = await new Work({
            title: req.body.title,
            desc: req.body.desc,
            userId: req.body.userId,
            country: req.body.country,
            companyId: req.body.companyId,
            vendorId: req.body.vendorId,
            deptId: req.body.deptId,
            area: req.body.area,
            status: req.body.status,
            pict: req.body.pict,
        });
        const work = await newWork.save();
        res.status(200).send(work);
    } catch (err) {
        res.status(500).send(err);
    }
})

// Get all works
router.get('/', async (req, res) => {
    try{
        const works = await Work.find();
        res.status(200).send(works);
    } catch(err){
        res.status(404).send('Work is empty!');
    }
});

// Get one work
router.get('/:id', async (req, res) => {
    try{
        const work = await Work.findOne({ _id: req.params.id });
        if(!work) {
            res.status(404).send('Work not found');
        } else {
            res.status(200).send(work);
        }
    } catch (err) {
        res.status(404).send(err);
    }
    
})
// Update user
router.put('/:id', async (req, res) => {
    const work = await Work.findOne({_id: req.params.id});
    const data = {
        title: req.body.title,
        desc: req.body.desc,
        deptId: req.body.deptId,
        area: req.body.area,
        pict: req.body.pict,
        completePic: req.body.completePic,
        closingPermit: req.body.closingPermit,
    }
    if(req.body.companyId === work.vendorId || req.body.isAdmin){
        try{
            await Work.findOneAndUpdate({ _id: req.params.id }, { $set: data });
            return res.status(200).send('Work updated');
        } catch(err){
            res.status(500).send('Something wrong');
        }
        
    } else {
        return res.status(403).send('You cannot change this work!');
    }
})

// Delete work
router.delete('/delete/:id', async (req, res) => {
    const work = await Work.findOne({ _id: req.params.id })
    !work && res.status(404).send('Work not found');
    if( req.body.companyId === work.vendorId || req.body.isAdmin ){
        try{
            await Work.findOneAndDelete({ _id: req.params.id });
            res.status(200).send('Work deleted');
        } catch(err){
            res.status(500).send(err);
        }
    } else {
        return res.status(403).send('You cannot delete this work');
    }
})

module.exports = router;