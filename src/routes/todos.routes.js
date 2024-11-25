import express from "express"
import { addTodo, getAllTodo } from "../controllers/todos.controllers.js";



const router = express.Router();

router.post("/todo", addTodo)
router.get("/todos", getAllTodo)

export default router;