import express, { type Request, type Response } from "express";
import route from "./routes/itemRoutes.js";
import { errorHandler } from "./middleWares/errorHandler.js";

const app = express();

app.use(express.json());


// Home page route
app.get("/", (req: Request, res: Response)=>{
  res.status(200).json({message: "Hello Prite Dey from express todos 👋"})
})

// Routes
app.use("/api/todos", route)

// Global Error Handler
app.use(errorHandler)

export default app;