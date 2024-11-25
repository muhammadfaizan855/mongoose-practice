import mongoose from "mongoose";
import Todos from "../models/todos.models.js";

// add Todo
const addTodo = (req , res) => {
   const { title, description } = req.body;

   if(!title || !description){
   res.send(400).json({
    message: "Title or description is required"
   })
   return
} 

const todo = Todos.create({
    title,
    description,
})

res.send(201).json({
  message: "user added successfully",
  todo   
})

}




// get All Todo


const getAllTodo = async (req , res) => {
   const todos = await Todos.find({})
   res.send(200).json({
      todos: todos,
   })
}


// get Single Todo


// Delete Todo
// Edit Todo

 
export { addTodo, getAllTodo }
