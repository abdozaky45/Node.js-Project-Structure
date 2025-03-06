import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/', (req, res) => {
    res.send('Node.js and TypeScript API');
});

export default app;