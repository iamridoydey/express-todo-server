import { items } from "../models/items.js";
// Health status
export const healthStatus = (req, res) => {
    const healthcheck = {
        uptime: process.uptime(),
        message: "OK",
        timestamp: Date.now(),
        environment: process.env.NODE_ENV || 'development'
    };
    res.status(200).json(healthcheck);
};
// Create an item
export const createItem = (req, res, next) => {
    try {
        const { name, age, salary } = req.body;
        const newItem = { id: Date.now(), name, age, salary };
        items.push(newItem);
        res.status(201).json(newItem);
    }
    catch (error) {
        next(error);
    }
};
// Read all items
export const getItems = (req, res, next) => {
    try {
        res.json(items);
    }
    catch (error) {
        next(error);
    }
};
// Read a single item by id
export const getItemById = (req, res, next) => {
    try {
        const getId = req.params.id;
        if (!getId) {
            return res.status(400).json({ message: "Missing id parameter" });
        }
        const id = parseInt(getId, 10);
        const item = items.find((item) => item.id === id);
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }
        return res.status(200).json(item);
    }
    catch (error) {
        next(error);
    }
};
// Update an item by id
export const updateItemById = (req, res, next) => {
    try {
        const _id = req.params.id;
        const { name, age, salary } = req.body;
        if (!_id) {
            return res.status(400).json({ message: "Missing id parameter" });
        }
        const itemId = parseInt(_id, 10);
        const item = items.find((item) => item.id === itemId);
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }
        // Update operation
        if (name !== undefined)
            item.name = name;
        if (age !== undefined)
            item.age = age;
        if (salary !== undefined)
            item.salary = salary;
        return res.status(200).json(item);
    }
    catch (error) {
        next(error);
    }
};
// Read a single item by id
export const deleteItemById = (req, res, next) => {
    try {
        const getId = req.params.id;
        if (!getId) {
            return res.status(400).json({ message: "Missing id parameter" });
        }
        const id = parseInt(getId, 10);
        const itemIndex = items.findIndex((item) => item.id === id);
        if (itemIndex === -1) {
            return res.status(404).json({ message: "Item not found" });
        }
        let deletedItem = items.splice(itemIndex, 1)[0];
        return res.status(200).json(deletedItem);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=itemController.js.map