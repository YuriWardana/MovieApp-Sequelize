const { Movie ,ProductionHouse, Cast , MovieCast } = require('../models/index')

class MovieController{
    static read(req,res){
        Movie.findAll({include:[ProductionHouse],order:[['released_year','desc']]})
        .then(data=>{res.render('movies/index',{data})})
        // .then(data=>{console.log(data);})
        .catch(err=>{res.send(err)})
    }

    static addForm(req,res){
        res.render('movies/add')
    }
     
    static postAdd(req,res){
        let data = {
            name: req.body.name,
            released_year: req.body.released_year,
            genre: req.body.genre,
        }

        Movie.create(data)
        .then(data=>{res.redirect('/movies')})
        .catch(err=>{res.send(err.errors[0].message)})
    }

    static destroy(req,res){
        let id = +req.params.id
        Movie.destroy({
            where:{
                id:id
            }
        })
        .then(data=>{res.redirect('/movies')})
        .catch(err=>{res.send(err)})
    }

    static editForm(req,res){
        let id = +req.params.id
        let  newdata;
        Movie.findByPk(id)
        .then(data=>{
            newdata = data
            return ProductionHouse.findAll()
        })
        .then(Production=>{
            res.render('movies/edit',{newdata,Production})
        })
        .catch(err=>{res.send(err)})
    }

    static postEdit(req,res){
        let id = +req.params.id
        let newData = {
            name:req.body.name,
            released_year:req.body.released_year,
            genre:req.body.genre,
            ProdHouseId:req.body.ProdHouseId
        }

        Movie.update(newData,{
            where:{
                id:id
            }
        })
        .then(data=>{res.redirect('/movies')})
        .catch(err=>{res.send(err)})
    }

    static addCastForm(req,res){
        let id = +req.params.id
        let dataMovie
        let dataCast
        let dataMovieCast

        Movie.findByPk(id,{include:[Cast]})
        .then(data=>{
            dataMovie = data
            return Cast.findAll()
        })
        .then(data=>{
            dataCast = data
            // res.send(dataMovie.Casts)
            res.render('movies/addCast',{dataMovie,dataCast})
            
        })
        .catch(err=>{res.send(err)})
    }

    static postAddCast(req,res){
        let MovieId = req.params.id
        console.log(MovieId);
        let CastId = req.body.first_name
        console.log(CastId);
        let role = req.body.role
        console.log(role);

        MovieCast.create({MovieId,CastId,role})
        .then(data=>{res.redirect('/movies')})
        .catch(err=>{res.send(err)})
    }

    static plus(req,res){
        res.send('test')
    }
}

module.exports = MovieController
//,{include:[Cast]}