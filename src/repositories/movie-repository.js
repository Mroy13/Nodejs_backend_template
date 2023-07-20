const {movies}=require("../models");
const crudRepository=require("./crud-repository");
class movieRepository extends crudRepository{
    constructor(){
        super(movies);
    }
}

module.exports=movieRepository;