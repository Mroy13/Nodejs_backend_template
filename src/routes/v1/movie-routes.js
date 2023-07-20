const express=require('express');
const {movieControler}=require ('../../controlers');
//const {movieMiddleware}=require('../../middlewares');
const router=express.Router();
//router.post('/',movieControler.createMovie(req,res));
//router.get('/movieslist',movieControler.getMovie(req,res));
router.post('/',movieControler.createMovie);
router.get('/',movieControler.getMovies);
router.get('/:id',movieControler.getMovie);
module.exports=router