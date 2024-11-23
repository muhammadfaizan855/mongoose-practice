import mongoose from "mongoose";
import todosModels from "../models/todos.models.js";

// add Todo
const addTodo = (req , res) => {
   const {title , description} = req.body;

   if(!title || !description){
   res.send(400).json({
    message: "Title or description is required"
   })
   return
} 

const todo = todosModels.create({
    title,
    description,
})

res.send(201).json({
    message: "user added successfully",
})

}

// get All Todo
// get Single Todo
// Delete Todo
// Edit Todo

 
export { addTodo }
