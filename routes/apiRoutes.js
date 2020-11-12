const db = require("../models");

module.exports = function(app) {

app.get("/api/workouts" , (req,res)=>{
    db.User.find({})
    .then(dbUser =>{
        res.json(dbUser)
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
    db.User.updateOne({ _id: req.params.id },
         { name: req.body.name ,
           duration : req.body.duration,
           weight : req.body.weight,
           reps : req.body.reps,
           sets : req.body.sets
        })
         .then(function(dbImage) {
      res.json(dbImage);
    });
  });


};