const db = require("../models");

module.exports = function(app) {

app.get("/api/workouts" , (req,res)=>{
    db.User.find({})
    .then(dbUser =>{
        res.json(dbUser);

        
    })
    .catch(err=>{
        res.json(err);
    })
})

app.post("/api/workouts", ({body}, res) => {
    console.log(body);
    db.User.create(body)
      
      .then(dbLibrary => {
        res.json(dbLibrary);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  app.put("/api/workouts/:id", function(req, res) {
      console.log(req.body);
    db.User.updateOne({ _id: req.params.id },
        {
           $push:{
            exercises : req.body
           } 
       
        } )
         .then(function(dbImage) {
      res.json(dbImage);
    });
  });


  app.get("/api/workouts/range" , (req,res)=>{
    db.User.find({}).limit(7)
    .then(dbUser =>{
        res.json(dbUser)
    })
    .catch(err=>{
        res.json(err);
    })
})

};