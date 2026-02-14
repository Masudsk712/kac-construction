import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

const PORT: number = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});