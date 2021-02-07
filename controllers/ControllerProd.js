const  { ProductionHouse } = require('../models/index')
class ControllerProd{
    static read(req,res){
        ProductionHouse.findAll({
            order:[['name_prodHouse','ASC']]
        })
        .then(data=>{
            res.render('prodHouse/index',{data})
        })
        .catch(err=>{
            console.log(err);
        })

    }

}

module.exports = ControllerProd