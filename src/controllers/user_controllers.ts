import { Request, Response } from "express";
import { User } from "../entity/User";

// CREATE
const createUser = async (req: Request, res: Response) => {
    const user = new User(
        req.body['first_name'],
        req.body['last_name'],
        req.body['email'],
        req.body['dateOfBirth']
    );

    const results = await user.save();

    res.json(results);
};


// READ.
const getUser = async (req: Request, res: Response) => {
    const user = await User.findOne(req.params.id);

    if(user === undefined) return res.status(400).send('User not found.');

    res.json(user);
};


// UPDATE.
const updateUser = async (req: Request, res: Response) => {
    const user = await User.findOne(req.params.id);

    if(user === undefined) return res.status(400).send('User not found.');

    user.firstName = req.body['first_name'];
    user.lastName = req.body['last_name'];
    user.email = req.body['email'];
    user.dateOfBirth = req.body['dateOfBirth'];

    const result = await user.save();
    
    res.status(201).json(result);
};


// DELETE.
const deleteUser = async (req: Request, res: Response) => {
    const user = await User.delete(req.params.id);

    if(user === undefined) return res.status(400).send('User not found.');
    
    res.status(200).json('User deleted successfully.');
};


export { createUser, getUser, updateUser, deleteUser };

