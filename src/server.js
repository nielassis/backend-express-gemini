import express from "express";
import { initializeRoutes } from "./routes/initializeRoutes.js";

const PORT = process.env.PORT || 3001;
const app = express();

// Registrar rotas
initializeRoutes(app);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
