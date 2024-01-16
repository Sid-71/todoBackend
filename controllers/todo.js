const Todo = require("../models/todo");
const addTodo = async (req, res) => {
  try {
    const payload = req.body;
    console.log("todoPayload",payload);
    const addedTodo = await Todo.create(payload);
    res.status(201).send(addedTodo);
  } catch (error) {
    res.status(200).send({
      message: error.message,
      stack: error.stack,
    });
  }
};
const editTodo = async (req, res) => {
  try {
    const todoId = req.query.todoId;
    const payload = req.body;
    console.log("payload", payload);
    console.log("todoId", todoId);
    const updatedTodo = await Todo.findByIdAndUpdate(todoId, payload,{new : true});
    res.status(200).send(updatedTodo);
  } catch (error) {
    res.status(400).send({
      message: error.message,
      stack: error.stack,
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todoId = req.query.todoId;
    const deletedTodo = await Todo.findByIdAndDelete(todoId);
    res.status(200).send({
      message: "todo deleted sucessfully",
      deleteTodo: deletedTodo,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
      stack: error.stack,
    });
  }
};
 
const getAllTodo = async(req,res)=>{
  const id = req.body.userId;
  console.log("id",req.body);
  try {
    const data = await Todo.find({userId: id});
    res.status(200).send({
      data : data
    })
  } catch (error) {
    res.status(400).send({
      message: error.message,
      stack: error.stack,
    });
  }
}
const getTodo = async (req, res) => {
  try {
    const allTodo = await Todo.find();
    res.status(200).send(allTodo);
  } catch (error) {
    res.status(400).send({
      message: error.message,
      stack: error.stack,
    });
  }
};

module.exports = {
  addTodo,
  getTodo,
  editTodo,
  deleteTodo,
  getAllTodo
};
