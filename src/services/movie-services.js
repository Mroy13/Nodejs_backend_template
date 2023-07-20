const StatusCode=require('http-status-codes');
const {movieRepository}=require("../repositories");
const Apperror=require("../utils/error/App-error");
const { ValidationError } = require('sequelize');

const MovieRepository=new movieRepository();
async function createMovie(data){
   try{
        const Movie=await MovieRepository.create(data);
        return Movie;
   }
   catch(error){
        console.log(error);
         if(error.name=='SequelizeValidationError'){
            const explanation=[];
            error.errors.forEach(err => {
               explanation.push(err.message);
            });
           
            throw new Apperror(explanation,StatusCode.BAD_REQUEST);
         }
         else{
         throw new Apperror("request not resolved due to server side probelem",StatusCode.INTERNAL_SERVER_ERROR);
         }
   }
}
async function getMovies(data){
   try{
        const Movies=await MovieRepository.getAll(data);
        return Movies;
   }
   catch(error){
        
      throw new Apperror("request not resolved due to server side probelem",StatusCode.INTERNAL_SERVER_ERROR);
         
   }
}

async function getMovie(id) {
   try {
       const movie= await MovieRepository.get(id);
       return movie;
   } catch(error) {
       if(error.statusCode == StatusCode.NOT_FOUND) {
           throw new Apperror(error.message, error.statusCode);
       }
       throw new Apperror('Cannot fetch data of all the movies', StatusCode.INTERNAL_SERVER_ERROR);
   }
}

module.exports={
          createMovie,
          getMovies,
          getMovie
}