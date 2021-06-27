const Company = require('../models/Company');
const router = require('express').Router();

// Create Company
router.post('/create', async (req, res) => {
    const newCompany = await new Company({
        companyCountry: req.body.companyCountry,
        companyCode: req.body.companyCode,
        companyProducts: req.body.companyProducts,
        companyType: req.body.companyType,
        companyName: req.body.companyName,
        companyLoc: req.body.companyLoc,
        companyLeader: req.body.companyLeader,
    });
    const company = await newCompany.save();
    res.status(200).send(company);
});

// Get All Company
router.get('/', async (req, res) => {
    try{
        const company = await Company.find();
        res.status(200).send(company);
    }catch(err){
        res.status(500).send(err);
    }
});

// Update Company
router.put('/:id', async (req, res) => {
    const company = await Company.findOne({_id: req.params.id});
    if(company.id === req.body.companyId && req.body.companyAdmin || req.body.isAdmin){
        try{
            const updatedCompany = await Company.findOneAndUpdate({_id: company.id}, { $set: req.body });
            res.status(200).send(updatedCompany);
        }catch(err){
            res.status(500).send(err);
        }
        
    }else{
        return res.status(403).send('You are not allowed to change this company!');
    }
})

module.exports = router;