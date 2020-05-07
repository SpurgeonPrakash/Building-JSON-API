const db = require("../models");

exports.getTodos = (req,res) => {
  db.Todo.find()
  .then((todos) => {
    res.json(todos);
  })
  .catch((err) => {
    res.send(err);
  });
}

exports.createTodo = (req,res) => {
  db.Todo.create(req.body)
  .then(newTodo => {
    res.status(201).json(newTodo);
  })
  .catch((err) => {
    res.send(err)
  });
}

exports.getTodo =  (req,res) => {
  db.Todo.findById(req.params.todoId)
  .then(foundTodo => {
    res.json(foundTodo);
  })
  .catch(err => {
    res.send(err);
  });
}

exports.updateTodo =  (req,res) => {
  db.Todo.findOneAndUpdate({_id:req.params.todoId},req.body, {useFindAndModify: false, new: true})
  .then((updatedTodo) => {
    res.json(updatedTodo);
  })
  .catch((err) => {
    res.send(err);
  });
}

exports.deleteTodo = (req,res) => {
  db.Todo.deleteOne({_id:req.params.todoId})
  .then(() => {
    res.json({message: "We Delleted It!"})
  })
  .catch(err => {
    res.send(err);
  })
}

module.exports = exports;
