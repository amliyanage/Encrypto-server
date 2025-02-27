import dotnev from 'dotenv';
import express from 'express';
import cross from 'cors';
import passwordRouter from './router/PasswordRouter'
import authRouter from './router/AuthRouter'

dotnev.config();
const app = express();

app.use(express.json());

app.use(cross({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))

app.options('*', cross());

app.use('/passwords' , passwordRouter);
app.use('/auth' , authRouter);

app.listen(5000, () => {
    console.log(`Server is running on port 5000`)
})