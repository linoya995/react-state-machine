import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 5000;

app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
