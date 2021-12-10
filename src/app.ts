import express from 'express';
import { createConnection } from 'typeorm';
import { userRoute } from './router/user_routes';

const app = express();

app.use(express.json());

app.use('/user', userRoute);

app.listen(3000, async () => {
    await createConnection();
    return console.log(`Server started on PORT 3000.`);
});