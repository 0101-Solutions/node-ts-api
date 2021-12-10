import { Router } from "express";
import { createUser, deleteUser, getUser, updateUser } from "../controllers/user_controllers";

const userRoute = Router();

// POST: Create
userRoute.post('/', createUser);

// GET: Read
userRoute.get('/:id', getUser);

// PATCH: Update/Modify
userRoute.patch('/:id', updateUser);

// PUT: Update/Replace
userRoute.put('/:id', updateUser);

// DELETE: Delete
userRoute.delete('/:id', deleteUser);


export { userRoute };
