const express=require('express');
const { infoControler} = require('../../controlers');
const moviesRoutes=require('./movie-routes');
const router=express.Router();
router.use('/movie',moviesRoutes);
router.get('/info',infoControler.info);
module.exports=router;
