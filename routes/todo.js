const express = require("express");
const router = express.Router();


const todoController = require('../controllers/todo');
const auth = require("../middlewares/auth");

router.get("/get-todo",todoController.getTodo);
router.post("/create-todo",auth.auth,todoController.addTodo);
router.put('/edit-todo',todoController.editTodo);
router.delete('/delete-todo',todoController.deleteTodo)
router.get("/get-user-todo",auth.auth,todoController.getAllTodo)



module.exports = router;