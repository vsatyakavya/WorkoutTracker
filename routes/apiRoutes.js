const db = require("../models");

module.exports = function(app) {

app.get("/api/workouts" , (req,res)=>{
    db.User.find({})
    .then(dbUser =>{
        res.json(dbUser)
        console.log(dbUser);
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
            exercises : req.body
            // [{
            //     type :req.body.type,
            //     name: req.body.name ,
            //      duration : req.body.duration,
            //      weight : req.body.weight,
            //      reps : req.body.reps,
            //      sets : req.body.sets
            // }
         

            // ]
        }


       )
         .then(function(dbImage) {
      res.json(dbImage);
    });
  });


  app.get("/api/workouts/range" , (req,res)=>{
    db.User.find({})
    .then(dbUser =>{
        res.json(dbUser)
    })
    .catch(err=>{
        res.json(err);
    })
})

};