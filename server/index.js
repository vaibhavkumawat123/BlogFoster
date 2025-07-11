const express = require('express');
const cors = require('cors');
const {connect} = require('mongoose');
require('dotenv').config();
const upload = require('express-fileupload');

const app = express();

const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')
const {notFound , errorHandler} = require('./middleware/errorMiddleware');

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors({credentials: true, origin: process.env.FRONTEND_URL}));
app.use(upload());
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.use(notFound);
app.use(errorHandler);

// app.listen(5000, ()=> console.log("Server running on port 5000"));

connect(process.env.MONGO_URI).then(app.listen(process.env.PORT || 5000, ()=> console.log(`Server running on port ${process.env.PORT}`)
)).catch(error => {console.log(error);
})