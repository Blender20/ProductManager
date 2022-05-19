const ProductManagerController = require("../controllers/ProductManager.controller")
console.log("testing from routs")
module.exports = (app)=>{
    //routes here
    app.get("/api/hello", ProductManagerController.hello);
    app.get("/api/ProductManagers/random", ProductManagerController.findRandomProductManager);
    app.get("/api/ProductManagers", ProductManagerController.findAllProductManagers);
    app.post("/api/ProductManagers", ProductManagerController.createProductManager);
    app.get("/api/ProductManagers/:id", ProductManagerController.findOneProductManager);
    app.put("/api/ProductManagers/:id", ProductManagerController.updateProductManager);
    app.delete("/api/ProductManagers/:id", ProductManagerController.deleteProductManager);
    
    }
    
    //all the static api's should be on top
    //all the dynamic api's should be at the bottom