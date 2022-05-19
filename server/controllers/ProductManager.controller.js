// This will need to hookup with the models. so need the Model file and the Path to Model.
const ProductManager = require("../models/ProductManager.model");

module.exports.hello = (req, res)=>{
    res.json({msg: "wazzaap mongoose ProductManagers api"})
}

// find one ProductManager
module.exports.findOneProductManager = (req, res)=>{
    ProductManager.findOne({_id: req.params.id})
    .then(foundProductManager =>{
        res.json({results: foundProductManager})
    })
    .catch(err=>{
        res.json({msg:"Something went wrong", error: err})
    })
}

// finds all ProductManagers
module.exports.findAllProductManagers = (req, res)=>{
    ProductManager.find()
        .then(allProductManagers=>{
            res.json({results: allProductManagers})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}
// find a Random ProductManager
module.exports.findRandomProductManager = (req, res)=>{
    ProductManager.find()
    .then(allProductManagers=>{
        // get a random index number from index 0 up to but not including the allQuotes.length
        let randomIdx = Math.floor(Math.random()*allProductManagers.length)
        res.json({results: allProductManagers[randomIdx]})
    })
    .catch(err=>{
        res.json({msg:"Something went wrong", error: err})
    })
}

// Create a ProductManager
module.exports.createProductManager = (req, res)=>{
    //req.body represents form information
    ProductManager.create(req.body)
    .then(newlyCreatedProductManager=>{
        res.json({results: newlyCreatedProductManager})
    })
    .catch(err=>{
        res.json({msg:"Something went wrong", error: err})
    })
}

//Updating a ProductManager
module.exports.updateProductManager = (req, res)=>{
    ProductManager.findOneAndUpdate(
        {_id: req.params.id},
        req.body, //Specify the form information to update the ProductManager with
        {new: true, runValidators: true }
    )
        .then(updatedProductManager=>{
            res.json({results: updatedProductManager})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

module.exports.deleteProductManager = (req, res)=>{
    ProductManager.deleteOne({_id: req.params.id})
    .then(deleteProductManager=>{
        res.json({results: deleteProductManager})
    })
    .catch(err=>{
        res.json({msg:"Something went wrong", error: err})
    })
}