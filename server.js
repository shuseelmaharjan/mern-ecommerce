const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// import routes
const userRouters = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');



// use routes
app.use('/api', userRouters);
app.use('/api/auth', authRoutes);




app.get('/', (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));


