const router = require('express').Router();
const templateRouter = require('../templates/templateRouter')

router.use('/template', templateRouter);


router.get('/', (req, res)=>{
    res.status(200).json({message: 'Welcome to the API router'})
})

module.exports=router;