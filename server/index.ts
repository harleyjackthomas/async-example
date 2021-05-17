import express, { Request, Response } from 'express';
import cors from "cors";

const app = express();
app.use(cors());

const PORT = 3001;

const todos = [
    { title: "Do the washing", description: "Wash your clothes" },
    { title: "Kick Goals", description: "Kick Goals" }
];

app.get("/todos", (req: Request, res: Response) => {
    res.send(todos);
});

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});