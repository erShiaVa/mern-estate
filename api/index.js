import express from 'express';

const app = express();

app.listen(3000, () => {
    console.log('Server s running on port 3000');
})