import express from 'express';


const app = express();

app.listen(3000, () => {
    return console.log(`Server started on PORT 3000.`);
});