import { Router } from "express";
import { createItem, deleteItemById, getItemById, getItems, healthStatus, updateItemById } from "../controllers/itemController.js";
const route = Router();
route.get("/health", healthStatus);
route.get("/", getItems);
route.get("/:id", getItemById);
route.post("/", createItem);
route.patch("/:id", updateItemById);
route.delete("/:id", deleteItemById);
export default route;
//# sourceMappingURL=itemRoutes.js.map