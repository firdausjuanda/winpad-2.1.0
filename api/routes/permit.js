const Permit = require('../models/Permit');
const Work = require('../models/Work');

const router = require('express').Router();

//  Create Permit
router.post('/create', async (req, res) => {
    try {
        const newPermit = await new Permit({
            userId: req.body.userId,
            vendorId: req.body.vendorId,
            workId: req.body.workId,
            category: req.body.category,
            desc: req.body.desc,
            number: req.body.number,
            status: req.body.status,
            ppe: req.body.ppe,
            tools: req.body.tools,
        });
        const permit = await newPermit.save();
        res.status(200).send(permit);
    } catch(err){
        res.status(500).send(err);
    }
})

// Get All Permit
router.get('/', async (req, res) => {
    try {
        const permits = await Permit.find();
        res.status(200).send(permits);
    }catch(err){
        res.status(500).send(err);
    }
});

// Get one permit
router.get('/:id', async (req, res) => {
    try{
        const permit = await Permit.findOne({_id: req.params.id});
        !permit && res.status(404).send('Permit not found');
        res.status(200).send(permit);
    }catch(err){
        res.status(500).send(err);
    }
});

// Update Permit
router.put('/:id', async (req, res) => {
    const permit = await Permit.findOne({ _id: req.params.id });
    if(req.body.companyId === permit.vendorId || req.body.isAdmin){
        try{
            const permit = await Permit.findOneAndUpdate({_id: req.params.id}, {$set: req.body});
            res.status(200).send(permit);
        }catch(err){
            res.statur(500).send(err);
        }
    } else {
        return res.status(403).send('You cannot change this permit');
    }
})

// Delete Permit
router.delete('/:id', async (req, res) => {
    const permit = await Permit.findOne({_id: req.params.id});
    if(req.body.companyId === permit.vendorId || req.body.isAdmin){
        try{
            await Permit.findOneAndDelete({_id: req.params.id});
            res.status(200).send('Permit deleted!');
        }catch(err){
            res.status(500).send(err);
        }
    }else{
        return res.status(403).send('You cannot delete this permit');
    }
});

// Approve Permit Level 1
router.put('/app1/:id', async (req, res) => {
    const permit = await Permit.findOne({_id: req.params.id});
    const work = await Work.findOne({_id: permit.workId});
    if(req.body.isApprover1 === true){
        if(req.body.companyId === work.companyId){
            if(req.body.deptId === work.deptId){
                const approvedPermit = await Permit.findOneAndUpdate({_id: permit._id}, { $set:{ isApprove1: true } });
                res.status(200).send(approvedPermit);
            }else{
            return res.status(403).send('You don\'t have authorization to approve permit in this department');
            }
        }else {
            return res.status(403).send('You don\'t have authorization to approve this permit');
        }
    }else{
        return res.status(403).send('You don\'t have authorization to approve any permit');
    }
});
// Cancel Approve Permit Level 1
router.put('/capp1/:id', async (req, res) => {
    const permit = await Permit.findOne({_id: req.params.id});
    const work = await Work.findOne({_id: permit.workId});
    if(req.body.isApprover1 === true){
        if(req.body.companyId === work.companyId){
            if(req.body.deptId === work.deptId){
                if(permit.isApprove2===false){
                    const approvedPermit = await Permit.findOneAndUpdate({_id: permit._id}, { $set:{ isApprove1: false } });
                    res.status(200).send(approvedPermit);
                }else{
                    return res.status(403).send('Permit is still approved by L2');
                }
            }else{
            return res.status(403).send('You don\'t have authorization to approve permit in this department');
            }
        }else {
            return res.status(403).send('You don\'t have authorization to approve this permit');
        }
    }else{
        return res.status(403).send('You don\'t have authorization to approve any permit');
    }
});

// Approve Permit Level 2
router.put('/app2/:id', async (req, res) => {
    const permit = await Permit.findOne({_id: req.params.id});
    const work = await Work.findOne({_id: permit.workId});
    if(req.body.isApprover2 === true){
        if(req.body.companyId === work.companyId){
            if(permit.isApprove1 === true){
                const approvedPermit = await Permit.findOneAndUpdate({_id: permit._id}, { $set:{ isApprove2: true } });
                res.status(200).send(approvedPermit);
            }else{
                return res.status(403).send('Permit not yet approved in L1');
            }
        }else {
            return res.status(403).send('You don\'t have authorization to approve this permit');
        }
    }else{
        return res.status(403).send('You don\'t have authorization to approve any permit');
    }
});

// Cancel approve Permit Level 2
router.put('/capp2/:id', async (req, res) => {
    const permit = await Permit.findOne({_id: req.params.id});
    const work = await Work.findOne({_id: permit.workId});
    if(req.body.isApprover2 === true){
        if(req.body.companyId === work.companyId){
            const approvedPermit = await Permit.findOneAndUpdate({_id: permit._id}, { $set:{ isApprove2: false } });
            res.status(200).send(approvedPermit);
        }else {
            return res.status(403).send('You don\'t have authorization to approve this permit');
        }
    }else{
        return res.status(403).send('You don\'t have authorization to approve any permit');
    }
});


module.exports = router;