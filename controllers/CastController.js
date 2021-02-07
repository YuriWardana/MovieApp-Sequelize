const { Cast , Movie} = require('../models/index')
const getAge = require('../helper/helper')
class CastController{

    static read(req,res){
        Cast.findAll()
        .then(data=>{res.render('cast/index',{data})})
        .catch(err=>{console.log(err);})
    }

    static addForm(req,res){
        res.render('cast/add')
    }

    static postAdd(req,res){
        let newdata = {
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            phone_number: req.body.phone_number,
            birth_year: req.body.birth_year,
            gender : req.body.gender
        }
        Cast.create(newdata)
        .then(data=>{ res.redirect('/casts')})
        .catch(err=>{res.send(err)})
    } 
    
    static destroy(req,res){
        let id = +req.params.id
        Cast.destroy({
            where:{
                id:id
            }
        })
        .then(data=>{res.redirect('/casts')})
        .catch(err=>{res.send(err)})
    }

    static editForm(req,res){
        let id = +req.params.id
        Cast.findByPk(id)
        .then(data=>{res.render('cast/edit',{data})})
        .catch(err=>{res.send(err)})
    }

    static postEdit(req,res){
        let id = +req.params.id
        let newdata = {
            
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            phone_number: req.body.phone_number,
            birth_year: req.body.birth_year,
            gender : req.body.gender   
        }

        Cast.update(newdata,{
            where:{
                id:id
            }
        })
        .then(data=>{res.redirect('/casts')})
        .catch(err=>{res.send(err.stack)})
    }

    static getMovies(req,res){
        let id = req.params.id
        Cast.findByPk(id,{include:Movie})
        .then(data=>{
            // let age = getAge(data.birth_year-data.Movies.released_year)
            console.log(data.Movies);
            res.render('cast/movie',{data,getAge})
        })
        // .then(data=>{res.send(data)})
        .catch(err=>{res.send(err.stack)})
    }


}

module.exports = CastController
