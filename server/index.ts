import express from "express";
import cors from "cors";
import routes from "./routes/routes";

// Create Express application
const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Attach the routes to the "/api" endpoint
app.use("/api", routes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
