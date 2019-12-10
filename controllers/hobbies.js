
var Hobby = require('../models/hobby');

module.exports = {
    index,
    new: newHobby,
    delete: deleteOne,
    show,
    update
}

function index(req,res) {
    Hobby.find({}, function(err, hobbies){
        res.render('index', {hobbies})
    });
}

function newHobby(req,res){
    console.log(req.body)
    var hobby = new Hobby(req.body);
    hobby.save(function(err){
        res.redirect('/');
    })
}

function show(req, res){
    Hobby.findById(req.params.id, function(err, hobby){
        res.render('show',{
            hobby
            
        });
    });
}

function deleteOne(req, res){
    console.log(req.params.id)
    Hobby.deleteOne({_id: req.params.id}, function(err){

        res.redirect('/')
    });

}

function update(req, res){
    console.log(req.body)
    console.log(req.params.id)
    Hobby.findOneAndUpdate({_id: req.params.id}, req.body, function(err, hobby){
                 res.redirect('/')

             });
}