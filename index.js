import { config } from "dotenv"
const dotenv = config()

import express from "express"
import connectDB from "./src/db/index.js"
import todosRoutes from "./src/routes/todos.routes.js"

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Faizan!')
})

// middlewire
app.use("/api/v1", todosRoutes)

connectDB()
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
  });
})
.catch((err) => {
  console.log("MONGO DB connection failed !!! ", err);
})


