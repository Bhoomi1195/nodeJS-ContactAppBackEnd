import express from "express";
import userRoutes from "./routes/user.routes";
import cors from "cors";
import { errorHandler } from "./middleware/error.middleware";
import { logger } from "./middleware/logger.middleware";
import contactRoutes from "./routes/contact.routes";

const API_PREFIX = "/api/v1";
const app = express();
app.use(logger);
app.disable("etag");
app.use(cors());
app.use(express.json());

app.use(`${API_PREFIX}/users`, userRoutes);
app.use(`${API_PREFIX}/contacts`, contactRoutes);

app.use(errorHandler);


export default app;