import express from 'express'; // framework for creating routing to application
import bodyParser from 'body-parser'; // enable to send post request
import mongoose from 'mongoose'; // create models for post
import cors from 'cors'; // enables cross origin policy
import nodemon from 'nodemon'; // update application automaticallye

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://user1:userpassword123@cluster0.ttx1g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
