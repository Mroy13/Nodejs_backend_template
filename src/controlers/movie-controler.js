const {movieService}=require('../services');
const StatusCode=require('http-status-codes');
const {SuccessResponse,ErrorResponse}=require('../utils/common');
async function createMovie(req,res){
       try{
             const movieInfo=await movieService.createMovie({
                Name: req.body.Name,
                rating: req.body.rating,
                likes: req.body.likes
             });
             SuccessResponse.data=movieInfo;
             return res.status(StatusCode.CREATED).json(SuccessResponse);
       }
       catch(error){
              
              ErrorResponse.error=error;
              return res.status(error.statusCode).json(ErrorResponse);
       }
             
            
}
async function getMovies(req,res){
       
       try{
             const movies=await movieService.getMovies();
             SuccessResponse.data=movies;
             return res.status(StatusCode.OK).json(SuccessResponse);
       }
       catch(error){
              
              ErrorResponse.error=error;
              return res.status(error.statusCode).json(ErrorResponse);
       }
             
            
}
async function getMovie(req,res){
       console.log(req.params.id);
       try{
             const movie=await movieService.getMovie(req.params.id);
             SuccessResponse.data=movie;
             return res.status(StatusCode.OK).json(SuccessResponse);
       }
       catch(error){
              
              ErrorResponse.error=error;
              return res.status(error.statusCode).json(ErrorResponse);
       }
             
            
}

module.exports={
       createMovie,
       getMovies,
       getMovie
}